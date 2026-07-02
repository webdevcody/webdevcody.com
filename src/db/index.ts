import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { env } from "@/env";
import * as schema from "@/db/schema";

let pool: Pool | null = null;

export function getPool() {
  if (!env.DATABASE_URL) {
    throw new Error("DATABASE_URL is required for sponsor database operations.");
  }

  pool ??= new Pool({
    connectionString: env.DATABASE_URL,
  });

  return pool;
}

export const db = drizzle(getPool(), { schema });

export type Db = typeof db;
