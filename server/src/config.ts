const env = process.env;

const isProd = env.NODE_ENV === 'production';
const jwtSecret = env.JWT_SECRET ?? '';

if (isProd && (jwtSecret.length < 16 || jwtSecret === 'change-me')) {
  throw new Error('JWT_SECRET must be set to a long random string in production');
}

export const config = {
  isProd,
  port: Number(env.PORT ?? 3000),
  databaseUrl: env.DATABASE_URL ?? 'postgres://aster:aster@localhost:5432/aster',
  jwtSecret: jwtSecret || 'dev-only-secret-do-not-use',
  corsOrigins: (env.CORS_ORIGIN ?? '').split(',').map((s) => s.trim()).filter(Boolean),
  allowRegistration: (env.ALLOW_REGISTRATION ?? 'true') !== 'false',
  adminEmail: env.ADMIN_EMAIL,
  adminPassword: env.ADMIN_PASSWORD,
  /** highest level that exists; admins can open levels 2..maxLevel */
  maxLevel: Number(env.MAX_LEVEL ?? 2),
  studentDist: env.STUDENT_DIST,
  adminDist: env.ADMIN_DIST,
};

export const PASSWORD_MIN = 6;
export const PASSWORD_MAX = 200;
