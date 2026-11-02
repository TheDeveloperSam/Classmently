import { betterAuth } from "better-auth";
import { Pool } from "pg";

export const auth = betterAuth({
  ...(process.env.DATABASE_URL
    ? { database: new Pool({ connectionString: process.env.DATABASE_URL }) }
    : {}),
  baseURL: process.env.BETTER_AUTH_URL,
  emailAndPassword: { enabled: true },
});
