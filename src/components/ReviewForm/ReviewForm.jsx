import React from 'react'
import {Button} from 'react-bootstrap'
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
  }

  render() {
    return (
      <form onSubmit={this.handleReviewSubmit}>
        <label>Wait Time: </label>
        <select name="waitTime" id="" onChange={this.handleChange} value={this.state.waitTime}>
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
        </select>
        <label>Wait Service: </label>
        <select name="waitService" id="" onChange={this.handleChange} value={this.state.waitService}>
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
        </select>
        <label>Food Quality: </label>
        <select name="foodTaste" id="" onChange={this.handleChange} value={this.state.foodTaste}>
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
        </select>
        <label>Gram Worth: </label>
        <select name="instaWorth" id="" onChange={this.handleChange} value={this.state.instaWorth}>
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
        </select>
        <label>Cleanliness: </label>
        <select name="cleanliness" id="" onChange={this.handleChange} value={this.state.cleanliness}>
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
        </select>
        <label>Bathrooms: </label>
        <select name="bathroom" id="" onChange={this.handleChange} value={this.state.bathroom}>
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
        </select>
        <input 
          type="text" 
          placeholder="Your review goes here" 
          name="review" onChange={this.handleChange} 
          value={this.state.review}
        />
        <Button type="submit" style={{backgroundColor: '#FF5252', borderColor: '#FF5252'}}>SUBMIT</Button>
      </form>
    )
  }
}

export default ReviewForm