const Review = require('../../models/review')

module.exports = {
  create,
  reviews,
}


function create(req, res) {
  console.log(req.body)
  Review.create(req.body, function(err, review) {
    if (err) console.log(err)
    res.json(review)
  })
}

async function reviews(req, res) {
  const reviews = await Review.find({})
  console.log(reviews)
}