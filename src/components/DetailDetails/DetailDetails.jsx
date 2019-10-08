import React from 'react'
import {Link} from 'react-router-dom'
import {Accordion, Card, Button} from 'react-bootstrap'
import ReviewForm from '../ReviewForm/ReviewForm'

const DetailDetails = (props) => {
  const {location, is_closed, display_phone, price} = props.location
  const [line1, line2] = location.display_address
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          Main Details
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <h3>{is_closed ? 'Now Closed' : 'Now Open'}</h3>
            <div>{line1}</div>
            <div>{line2}</div>
            <div>{display_phone}</div>
            <div>{price}</div>
            <Link to='/'>
              <Button style={{backgroundColor: '#FF5252', borderColor: '#FF5252'}}>BACK</Button>
            </Link>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="1">
          Other Details
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            Hours of operation
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="2">
          Wanna RANT about this place?
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            <ReviewForm />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}


export default DetailDetails