const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({
  review: {type: String},
  restId: String,
  waitTime: {type: Number, max: 5},
  waitService: {type: Number, max: 5},
  foodTaste: {type: Number, max: 5},
  instaWorth: {type: Number, max: 5},
  cleanliness: {type: Number, max: 5},
  bathroom: {type: Number, max: 5},
  user: {type: Schema.Types.ObjectId, ref: 'User'}
}, {timestamps: true})

module.exports = mongoose.model('Review', reviewSchema)