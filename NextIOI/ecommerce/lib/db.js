console.log("DB FILE LOADED");

import { Pool } from "pg";

const pool = new Pool({
  host: "localhost",        // DB host
  port: 5432,               // Default PostgreSQL port
  user: "postgres",         // DB username
  password: "admin",  // DB password
  database: "postgres",    // ✅ DB name
  max: 5
});

export default pool;