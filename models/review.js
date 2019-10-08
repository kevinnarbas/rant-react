const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({
  review: {type: String},
  waitTime: {type: Number, min: 1, max: 5},
  waitService: {type: Number, min: 1, max: 5},
  foodTaste: {type: Number, min: 1, max: 5},
  instaWorth: {type: Number, min: 1, max: 5},
  cleanliness: {type: Number, min: 1, max: 5},
  bathroom: {type: Number, min: 1, max: 5},
}, {timestamps: true})

module.exports = mongoose.model('Review', reviewSchema)