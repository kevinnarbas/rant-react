import React from 'react'
import './BusinessDetailPage.css'
import {Container, Row, Col} from 'react-bootstrap'
import DetailDetails from '../../components/DetailDetails/DetailDetails'
import reviewService from '../../utils/reviewService'

class BusinessDetailPage extends React.Component {
  state = {
    reviews: [],
    waitTime: 0,
    waitService: 0,
    foodTaste: 0,
    instaWorth: 0,
    cleanliness: 0,
    bathroom: 0,
  }

  async componentDidMount() {
    const {id} = this.props.match.params
    let allReviews = await reviewService.index()
    let thisReview = await allReviews.filter(review => review.restId === id)
    await this.setState({reviews: thisReview})
    this.getOverallRatings()
  }

  getMean = (total, length, category) => {
    // console.log(category)
    let mean = total / length
    let ceilMean = Math.ceil(mean*2) / 2
    this.setState({[category]: ceilMean})
  }

  getRating = async (category) => {
    let nums = []
    let total = 0
    
    await this.state.reviews.forEach(review => {
      nums.push(review[category])
    })
    await nums.forEach(num => {
      if (num === null) nums.pop()
    })
    await nums.forEach(num => {
      total += num
    })
    await this.getMean(total, nums.length, category)
  }

  async getOverallRatings() {
    await this.getRating('waitTime')
    await this.getRating('waitService')
    await this.getRating('foodTaste')
    await this.getRating('instaWorth')
    await this.getRating('cleanliness')
    await this.getRating('bathroom')
  }

  render() {
    const {name, image_url} = this.props.location.state.businesses
    return (
      <>
        <h1>{name}</h1>
        <hr />
        <Container>
          <Row>
            <Col xs={4}><h5>Wait time:</h5><h3>{this.state.waitTime || 'No Rants'}</h3></Col>
            <Col xs={4}><h5>Wait Service:</h5><h3>{this.state.waitService || 'No Rants'}</h3></Col>
            <Col xs={4}><h5>Food Taste:</h5><h3>{this.state.foodTaste || 'No Rants'}</h3></Col>
          </Row>
          <Row>
            <Col xs={4}><h5>Gram Worth:</h5><h3>{this.state.instaWorth || 'No Rants'}</h3></Col>
            <Col xs={4}><h5>Cleanliness:</h5><h3>{this.state.cleanliness || 'No Rants'}</h3></Col>
            <Col xs={4}><h5>Bathrooms:</h5><h3>{this.state.bathroom || 'No Rants'}</h3></Col>
          </Row>
          <hr />
          <Row>
            <Col xs={6}>
              <img className="Detail-img" src={image_url} alt="restauraunt-type"/>
            </Col>
            <Col sx={6}>
              <DetailDetails location={this.props.location.state.businesses} />
            </Col>
          </Row>
          <Row>
            <Col>{this.state.reviews.map((review, id) => 
              <div className="Detail-review">
                <div>Wait Time: {review.waitTime || 'No Comment'}</div>
                <div>Wait Service: {review.waitService || 'No Comment'}</div>
                <div>Food Taste: {review.foodTaste || 'No Comment'}</div>
                <div>Gram Worth: {review.instaWorth || 'No Comment'}</div>
                <div>Cleanliness: {review.cleanliness || 'No Comment'}</div>
                <div>Bathroom: {review.bathroom || 'No Comment'}</div>
                <div>Review: {review.review || 'No Comment'}</div>
              </div>
            )}</Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default BusinessDetailPage