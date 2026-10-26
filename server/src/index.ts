import { hashPassword, normEmail, passwordProblem, validEmail } from './auth.js';
import { buildApp } from './app.js';
import { config } from './config.js';
import { migrate, pool, q } from './db.js';

async function seedAdmin() {
  const email = normEmail(config.adminEmail);
  if (!email || !config.adminPassword) return;
  if (!validEmail(email) || passwordProblem(config.adminPassword)) throw new Error('ADMIN_EMAIL / ADMIN_PASSWORD are invalid');
  const { rowCount } = await q('select 1 from users where lower(email) = $1', [email]);
  if (rowCount) return;
  await q("insert into users (email, password_hash, role) values ($1, $2, 'admin')", [email, await hashPassword(config.adminPassword)]);
  console.log(`Created first administrator ${email}`);
}

async function main() {
  await migrate();
  await seedAdmin();
  const app = await buildApp();
  await app.listen({ port: config.port, host: '0.0.0.0' });
  const stop = async () => {
    await app.close();
    await pool.end();
    process.exit(0);
  };
  process.on('SIGINT', stop);
  process.on('SIGTERM', stop);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
