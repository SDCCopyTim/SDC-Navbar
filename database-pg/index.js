const { Pool } = require('pg');

const pool = new Pool({
  user: 'jeffhicks',
  host: 'localhost',
  database: 'timcamppg',
  port: 5432,
});

module.exports = pool;