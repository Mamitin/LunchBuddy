const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lunchSchema = new Schema({
    lunchName: { type: String, required: true },
    restaurant: {type: String, required: true },
    host: {type: String, required: true },
    lunchType: {type: String, required: false },
    lunchTime: {type: String, required: true },
    image: {type: String, required: false},
    restaurantLink: {type: String, required: true },
    attendees: {type: Number}
});

const Lunches = mongoose.model("Lunches", lunchSchema);

module.exports = Lunches;


