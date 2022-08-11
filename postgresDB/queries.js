const PGPool = require('./dbconnection');
const getStations = (request, response) => {
    PGPool.query('SELECT * FROM stations ORDER BY nimi ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
module.exports = {getStations}