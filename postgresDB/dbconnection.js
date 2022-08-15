const Pool = require('pg').Pool
console.log("NODE_ENV = " +process.env.NODE_ENV)
if ( process.env.NODE_ENV !== 'production' ) {
    require('dotenv').config()
  }

const PGPool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  ssl: true,
})

module.exports = PGPool