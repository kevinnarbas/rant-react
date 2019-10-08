import React from 'react'
import {Button} from 'react-bootstrap'

class ReviewForm extends React.Component {
  
  handleReviewSubmit = e => {
    e.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleReviewSubmit}>
        <label>Wait Time: </label>
        <select name="waitTime" id="">
          <option value="null">No response</option>
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
        <label>Wait Time: </label>
        <select name="waitTime" id="">
          <option value="null">No response</option>
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
        <select name="waitService" id="">
          <option value="null">No response</option>
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
        <select name="foodTaste" id="">
          <option value="null">No response</option>
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
        <select name="instaWorth" id="">
          <option value="null">No response</option>
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
        <select name="cleanliness" id="">
          <option value="null">No response</option>
          <option value="1">1</option>
          <option value="1.5.5">1.5</option>
          <option value="2">2</option>
          <option value="2.5.5">2.5</option>
          <option value="3">3</option>
          <option value="3.5.5">3.5</option>
          <option value="4">4</option>
          <option value="4.5.5">4.5</option>
          <option value="5">5</option>
        </select>
        <label>Bathrooms: </label>
        <select name="bathroom" id="">
          <option value="null">No response</option>
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
        <input type="text" placeholder="Your review goes here"/>
        <Button style={{backgroundColor: '#FF5252', borderColor: '#FF5252'}}>SUBMIT</Button>
      </form>
    )
  }
}

export default ReviewForm