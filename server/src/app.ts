import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import cors from '@fastify/cors';
import fastifyStatic from '@fastify/static';
import Fastify from 'fastify';
import { config } from './config.js';
import { adminRoutes } from './routes/admin.js';
import { studentRoutes } from './routes/student.js';

export async function buildApp() {
  const app = Fastify({ logger: !process.env.QUIET, bodyLimit: 100_000, trustProxy: true });

  await app.register(cors, {
    origin: config.corsOrigins.length ? config.corsOrigins : false,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  });

  app.get('/health', async () => ({ ok: true }));
  await app.register(studentRoutes);
  await app.register(adminRoutes);

  // /admin without the trailing slash is a very common way to open the panel
  app.get('/admin', (_req, reply) => reply.redirect('/admin/'));
  app.get('/favicon.ico', (_req, reply) => reply.code(204).send());

  // optional: serve the built site and admin panel from the same process
  const studentDist = resolve(config.studentDist ?? '../dist');
  const adminDist = resolve(config.adminDist ?? '../admin/dist');
  if (existsSync(adminDist)) await app.register(fastifyStatic, { root: adminDist, prefix: '/admin/', decorateReply: false });
  if (existsSync(studentDist)) await app.register(fastifyStatic, { root: studentDist, prefix: '/' });

  return app;
}

