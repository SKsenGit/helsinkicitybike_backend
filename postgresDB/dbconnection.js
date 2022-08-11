const Pool = require('pg').Pool

if ( process.env.NODE_ENV !== 'production' ) {
    require('dotenv').config()
  }

const PGPool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
})

module.exports = PGPool