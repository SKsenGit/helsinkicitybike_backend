const PGPool = require('./dbconnection');


const getStations = (request, response) => {
    PGPool.query('SELECT * FROM stations ORDER BY nimi ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const getStationById = (request, response) => {
    const id = parseInt(request.params.id)
    PGPool.query('SELECT * FROM stations WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const createStation = (request, response) => {
    const rowCount = request.body.stations.length
    const stations = request.body.stations

    if (rowCount === 1) {
        PGPool.query('INSERT INTO stations \
            (nimi,namn,name,osoite,adress,kaupunki,stad,operaattor,kapasiteet,x,y) \
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) returning id', stations[0], (error, results) => {
            if (error) {
                response.status(400).send(error)
            }
            response.status(201).send({ "id": results.rows[0].id })
        })

    }
    else if (rowCount > 1) {
        let queryValuesText = "INSERT INTO stations \
        (id,nimi,namn,name,osoite,adress,kaupunki,stad,operaattor,kapasiteet,x,y)\
        VALUES "
        let maxId = 0
        for (let i = 0; i < stations.length; i++) {
            if (maxId < stations[i][0]) maxId = stations[i][0]

            if (i > 0) {
                queryValuesText += ","
            }
            queryValuesText += "(" + stations[i][0] + ", '"
                + stations[i][1] + "', '"
                + stations[i][2] + "', '"
                + stations[i][3] + "', '"
                + stations[i][4] + "', '"
                + stations[i][5] + "', '"
                + stations[i][6] + "', '"
                + stations[i][7] + "', '"
                + stations[i][8] + "', "
                + stations[i][9] + ", "
                + stations[i][10] + ", "
                + stations[i][11] + ")"
        }
        queryValuesText += "; Select setval('stations_id_seq'," + maxId + ",true) "

        PGPool.query(queryValuesText, (error, results) => {
            if (error) {
                response.status(400).send(error)
            }

            response.status(201).send({ "rowCount": results[0].rowCount })
        })


    }
    else {
        response.status(400).send("The request doesn't have any stations data.")

    }
}

const getJourneys = (request, response) => {
    PGPool.query('SELECT * FROM journeys', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = { getStations, getStationById, createStation, getJourneys }