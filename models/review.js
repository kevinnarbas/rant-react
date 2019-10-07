const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({
  review: {type: String},
  wait_time: {type: Number},
  waitService: {type: Number},
  foodTaste: {type: Number},
  instaWorth: {type: Number},
  cleanliness: {type: Number},
  bathroom: {type: Number},
}, {timestamps: true})

module.exports = mongoose.model('Review', reviewSchema)