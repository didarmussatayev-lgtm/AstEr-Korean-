import { readFileSync } from 'node:fs';
import pg from 'pg';
import { config } from './config.js';

export const pool = new pg.Pool({ connectionString: config.databaseUrl, max: 10 });

export async function q<T extends pg.QueryResultRow = Record<string, unknown>>(text: string, params: unknown[] = []) {
  return pool.query<T>(text, params);
}

export async function migrate() {
  const sql = readFileSync(new URL('../schema.sql', import.meta.url), 'utf8');
  await pool.query(sql);
}
