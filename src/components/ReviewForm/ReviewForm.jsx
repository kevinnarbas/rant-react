import React from 'react'
import {Button, Form, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import reviewService from '../../utils/reviewService'

class ReviewForm extends React.Component {
  state = {
    user: this.props.user,
    restId: this.props.id,
    waitTime: '',
    waitService: '',
    foodTaste: '',
    instaWorth: '',
    cleanliness: '',
    bathroom: '',
    review: '',
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleReviewSubmit = e => {
    e.preventDefault()
    reviewService.create(this.state)
    this.setState({
      waitTime: '',
      waitService: '',
      foodTaste: '',
      instaWorth: '',
      cleanliness: '',
      bathroom: '',
      review: '',
    })
    this.props.handleFormSubmit()
  }

  render() {
    const user = this.props.user ? 
      <>
        <Form.Group>
          <Form.Row>
            <Col xs={3}>
              <Form.Label>Wait Time: </Form.Label>
            </Col>
            <Col xs={9}>
              <Form.Control as='select' name="waitTime" id="" onChange={this.handleChange} value={this.state.waitTime}>
                <option value="">No response</option>
                <option value="1">1</option>
                <option value="1.5">1.5</option>
                <option value="2">2</option>
                <option value="2.5">2.5</option>
                <option value="3">3</option>
                <option value="3.5">3.5</option>
                <option value="4">4</option>
                <option value="4.5">4.5</option>
                <option value="5">5</option>
              </Form.Control>
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group>
          <Form.Row>
            <Col xs={3}>
              <Form.Label>Wait Service: </Form.Label>
            </Col>
            <Col xs={9}>
              <Form.Control as='select' name="waitService" id="" onChange={this.handleChange} value={this.state.waitService}>
                <option value="">No response</option>
                <option value="1">1</option>
                <option value="1.5">1.5</option>
                <option value="2">2</option>
                <option value="2.5">2.5</option>
                <option value="3">3</option>
                <option value="3.5">3.5</option>
                <option value="4">4</option>
                <option value="4.5">4.5</option>
                <option value="5">5</option>
              </Form.Control>
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group>
          <Form.Row>
            <Col xs={3}>
              <Form.Label>Food Quality: </Form.Label>
            </Col>
            <Col xs={9}>
              <Form.Control as='select' name="foodTaste" id="" onChange={this.handleChange} value={this.state.foodTaste}>
                <option value="">No response</option>
                <option value="1">1</option>
                <option value="1.5">1.5</option>
                <option value="2">2</option>
                <option value="2.5">2.5</option>
                <option value="3">3</option>
                <option value="3.5">3.5</option>
                <option value="4">4</option>
                <option value="4.5">4.5</option>
                <option value="5">5</option>
              </Form.Control>
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group>
          <Form.Row>
            <Col xs={3}>
              <Form.Label>Gram Worth: </Form.Label>
            </Col>
            <Col xs={9}>
              <Form.Control as='select' name="instaWorth" id="" onChange={this.handleChange} value={this.state.instaWorth}>
                <option value="">No response</option>
                <option value="1">1</option>
                <option value="1.5">1.5</option>
                <option value="2">2</option>
                <option value="2.5">2.5</option>
                <option value="3">3</option>
                <option value="3.5">3.5</option>
                <option value="4">4</option>
                <option value="4.5">4.5</option>
                <option value="5">5</option>
              </Form.Control>
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group>
          <Form.Row>
            <Col xs={3}>
              <Form.Label>Cleanliness: </Form.Label>
            </Col>
            <Col xs={9}>
              <Form.Control as='select' name="cleanliness" id="" onChange={this.handleChange} value={this.state.cleanliness}>
                <option value="">No response</option>
                <option value="1">1</option>
                <option value="1.5">1.5</option>
                <option value="2">2</option>
                <option value="2.5">2.5</option>
                <option value="3">3</option>
                <option value="3.5">3.5</option>
                <option value="4">4</option>
                <option value="4.5">4.5</option>
                <option value="5">5</option>
              </Form.Control>
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group>
          <Form.Row>
            <Col xs={3}>
              <Form.Label>Bathrooms: </Form.Label>
            </Col>
            <Col xs={9}>
              <Form.Control as='select' name="bathroom" id="" onChange={this.handleChange} value={this.state.bathroom}>
                <option value="">No response</option>
                <option value="1">1</option>
                <option value="1.5">1.5</option>
                <option value="2">2</option>
                <option value="2.5">2.5</option>
                <option value="3">3</option>
                <option value="3.5">3.5</option>
                <option value="4">4</option>
                <option value="4.5">4.5</option>
                <option value="5">5</option>
              </Form.Control>
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group>
          <Form.Control
            as='textarea'
            rows='3'
            type="text" 
            placeholder="Your review goes here" 
            name="review" onChange={this.handleChange} 
            value={this.state.review}
          />
        </Form.Group>
        <Button type="submit" style={{backgroundColor: '#FF5252', borderColor: '#FF5252'}}>SUBMIT</Button>
      </>
      :
      <>
        <p><Link style={{color: '#FF5252'}} to='/signup'>SIGN UP</Link> To use this feature!</p>
        <p>Or <Link style={{color: '#FF5252'}} to='/login'>LOG IN</Link> to use this feature!</p>
      </>

      return (
      <Form onSubmit={this.handleReviewSubmit}>
        {user}
      </Form>
    )
  }
}

export default ReviewForm