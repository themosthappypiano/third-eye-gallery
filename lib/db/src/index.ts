import { drizzle } from "drizzle-orm/node-postgres";
import { drizzle as sqliteDrizzle } from "drizzle-orm/better-sqlite3";
import pg from "pg";
import Database from "better-sqlite3";
import * as schema from "./schema";

const { Pool } = pg;

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

// Auto-detect database type based on URL
const isLocal = process.env.DATABASE_URL.startsWith('file:');

let pool: pg.Pool | undefined;
let db: any;

if (isLocal) {
  // SQLite for local development
  const sqlite = new Database(process.env.DATABASE_URL.replace('file:', ''));
  db = sqliteDrizzle(sqlite, { schema });
} else {
  // PostgreSQL for production
  pool = new Pool({ connectionString: process.env.DATABASE_URL });
  db = drizzle(pool, { schema });
}

export { pool, db };
export * from "./schema";
