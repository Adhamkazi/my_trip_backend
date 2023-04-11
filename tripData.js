const mongoose = require('mongoose')


const connection = mongoose.connect('mongodb+srv://adham:adham@cluster0.iq2zpvd.mongodb.net/tripapp?retryWrites=true&w=majority')


const tripSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String },
    destination: { type: String },
    no_of_travelers: { type: Number },
    budget: { type: Number },
}
)

const tripModel = mongoose.model("trip", tripSchema)

module.exports = {
    connection, tripModel
}

