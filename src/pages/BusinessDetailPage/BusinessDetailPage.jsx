import React from 'react'
import './BusinessDetailPage.css'
import {Container, Row, Col, Media} from 'react-bootstrap'
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

  handleFormSubmit = () => this.componentDidMount()

  render() {
    const {businesses} = this.props.location.state
    const {name, image_url} = businesses
    const user = this.props.location.state.user ? 
      <DetailDetails 
        location={businesses} 
        user={this.props.location.state.user._id}
        handleFormSubmit={this.handleFormSubmit}
      />
      :
      <DetailDetails 
        location={businesses}
        handleFormSubmit={this.handleFormSubmit}    
      />

    return (
      <>
        <h1>{name}</h1>
        <hr />
        <Container>
          <Row>
            <Col xs={4}>
              <h5><i class="far fa-clock"></i> Wait time:</h5>
              <h3 className="Detail-num">{this.state.waitTime || 'No Rants'}</h3>
            </Col>
            <Col xs={4}>
              <h5><i class="fas fa-user-check"></i> Wait Service:</h5>
              <h3 className="Detail-num">{this.state.waitService || 'No Rants'}</h3>
            </Col>
            <Col xs={4}>
              <h5><i class="fas fa-utensils"></i> Food Taste:</h5>
              <h3 className="Detail-num">{this.state.foodTaste || 'No Rants'}</h3>
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <h5><i class="fas fa-camera-retro"></i> Gram Worth:</h5>
              <h3 className="Detail-num">{this.state.instaWorth || 'No Rants'}</h3>
            </Col>
            <Col xs={4}>
              <h5><i class="fas fa-broom"></i> Cleanliness:</h5>
              <h3 className="Detail-num">{this.state.cleanliness || 'No Rants'}</h3>
            </Col>
            <Col xs={4}>
              <h5><i class="fas fa-restroom"></i> Bathrooms:</h5>
              <h3 className="Detail-num">{this.state.bathroom || 'No Rants'}</h3>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col xs={6}>
              <img className="Detail-img" src={image_url} alt="restauraunt-type"/>
            </Col>
            <Col sx={6}>
              {user}
            </Col>
          </Row>
          <hr/>
          <Row>
            <h4>REVIEWS:</h4>
            <ul className="list-unstyled" style={{display: 'flex', flexWrap: 'wrap'}}>
              {this.state.reviews.reverse().map((review, id) =>
                <Col xs={6}>
                  <Media as="li" key={id}>
                    <Media.Body className="Detail-review">
                      <div className="Detail-cats">
                        <h6><i class="far fa-clock"></i> :</h6>&nbsp;
                          <h5 className="Detail-num">{review.waitTime || 'No Comment'}&nbsp; </h5><h5>|</h5>&nbsp;
                        <h6><i class="fas fa-user-check"></i> :</h6>&nbsp;
                          <h5 className="Detail-num">{review.waitService || 'No Comment'}&nbsp; </h5><h5>|</h5>&nbsp;
                        <h6><i class="fas fa-utensils"></i> :</h6>&nbsp;
                          <h5 className="Detail-num">{review.foodTaste || 'No Comment'}</h5>&nbsp;
                      </div>
                      <div className="Detail-cats">
                        <h6><i class="fas fa-camera-retro"></i> :</h6>&nbsp;
                          <h5 className="Detail-num">{review.instaWorth || 'No Comment'}&nbsp; </h5><h5>|</h5>&nbsp;
                        <h6><i class="fas fa-broom"></i> :</h6>&nbsp;
                          <h5 className="Detail-num">{review.cleanliness || 'No Comment'}&nbsp; </h5><h5>|</h5>&nbsp;
                        <h6><i class="fas fa-restroom"></i> :</h6>&nbsp;
                          <h5 className="Detail-num">{review.bathroom || 'No Comment'}</h5>&nbsp;
                      </div>
                      <p>
                        {review.review || 'Declined to write review'}
                      </p>
                    </Media.Body>
                  </Media>
                </Col>
              )}
            </ul>
          </Row>
        </Container>
      </>
    )
  }
}

export default BusinessDetailPage