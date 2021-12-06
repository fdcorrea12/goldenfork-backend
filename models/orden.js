const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrdenSchema = new Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    telephone: { type: Number, required: true },
    email: { type: String, required: true },
    entry: { type: String },
    canEntry: { type: Number },
    mainCourse: { type: String },
    canMainCourse: { type: Number },
    drink: { type: String },
    canDrink: { type: Number },
    dessert: { type: String },
    canDessert: { type: Number }
});

module.exports = mongoose.model('ordens', OrdenSchema);
