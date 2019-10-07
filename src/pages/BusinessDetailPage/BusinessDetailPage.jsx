import React from 'react'
import './BusinessDetailPage.css'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const BusinessDetailPage = (props) => {
  const {name, is_closed, display_phone, image_url, price, location} = props.location.state.businesses
  const [line1, line2] = location.display_address
  return (
    <>
      <h1>{name}</h1>
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
        <Row>
          <Col xs={6}>
            <img className="Detail-img" src={image_url} alt="restauraunt-type"/>
          </Col>
          <Col sx={6}>
            <h3>{is_closed ? 'Now Closed' : 'Now Open'}</h3>
            <div>{line1}</div>
            <div>{line2}</div>
            <div>{display_phone}</div>
            <div>{price}</div>
            <Link to='/'>
              <div>BACK</div>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>NO RANTS YET...rant about it!</Col>
        </Row>
      </Container>
    </>
  )
}

export default BusinessDetailPage