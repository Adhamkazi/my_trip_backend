const express = require("express");
const cors = require("cors")

const { tripModel } = require('./tripData')
const { connection } = require('./tripData')

const app = express()
app.use(express.json())


app.use(cors())

app.get('/', (req, res) => {
    res.send("Home Page")
})

app.get("/all", async (req, res) => {
    try {
        const trip = await tripModel.find()
        res.send(trip)
    } catch (err) {
        console.log("unable to get All details");
    }
})
app.post("/add", async (req, res) => {

    try {
        const trip = new tripModel(req.body)
        await trip.save()
        res.send({ "MSG": "Data has been saved" })

    } catch (err) {
        res.send({ "MSG": err.message })
    }
})




app.listen(4000, async () => {
    try {
        await connection
        console.log({ "msg": "Connected to DB" })
    } catch (err) {
        console.log({ "MSG": err.message })
    }

    console.log({
        "msg": "Server is Running on 4000"
    })
})