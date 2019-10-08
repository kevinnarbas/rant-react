import React from 'react'
import './BusinessDetailPage.css'
import {Container, Row, Col} from 'react-bootstrap'
import DetailDetails from '../../components/DetailDetails/DetailDetails'
import reviewService from '../../utils/reviewService'

class BusinessDetailPage extends React.Component {
  state = {
    reviews: []
  }

  componentDidMount() {
    const reviews = reviewService.index()
    this.setState({reviews})
    console.log(reviews)
  }

  render() {
    const {name, image_url} = this.props.location.state.businesses
    return (
      <>
        <h1>{name}</h1>
        <hr />
        <Container>
          <Row>
            <Col xs={4}><h5>Wait time:</h5> Overall Rating</Col>
            <Col xs={4}><h5>Wait Service:</h5> Overall Rating</Col>
            <Col xs={4}><h5>Food Taste:</h5> Overall Rating</Col>
          </Row>
          <Row>
            <Col xs={4}><h5>Instagraminess:</h5> Overall Rating</Col>
            <Col xs={4}><h5>Cleanliness:</h5> Overall Rating</Col>
            <Col xs={4}><h5>Bathrooms:</h5> Overall Rating</Col>
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
            <Col>{}</Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default BusinessDetailPage