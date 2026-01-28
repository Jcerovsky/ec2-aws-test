import express from 'express'
import os from 'os'

const app = express()

app.use(express.json())

app.get('/status', (req, res) => {
    const hostname = os.hostname()
    const time = new Date(Date.now())
    const version = "1.0.0"
    res.status(200).json({version: version, hostname: hostname, time: time})
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})