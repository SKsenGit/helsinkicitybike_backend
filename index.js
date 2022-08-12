const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3001

const db = require('./postgresDB/queries')

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.use(express.static('build'))

app.get('/api/', (request, response) => {
    response.json({ info: 'A backend test is successful!' })
})

app.get('/api/stations', db.getStations)
app.get('/api/stations/:id', db.getStationById)
app.post('/api/stations', db.createStation)
app.get('/api/journeys', db.getJourneys)
//app.post('/api/journeys', db.createJourney)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})

