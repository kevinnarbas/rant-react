import React from 'react'
import {Container} from 'react-bootstrap'

const AboutPage = () => {
  return (
    <Container>
      {/* <img src="https://miro.medium.com/max/762/1*KVSXYX5Owz7-_5Rm_jHEKQ.jpeg" alt="React meme"/> */}
      <h1>Rant</h1>
      <h3><i>-User Reviews on more than just one parameter</i></h3>
      <p>Here at RANT the goal was to make a platform where a user can base a review on many different parameters.  Other apps base everything on only one rating system and that works for some, but there are some flaws in that.  Lets say a customer had a bad experience with a server but the food was amazing.  Of course it'll be a one star review, sure they can comment in the review that the food was great but the server was bad, but who has the time to read every review to find out why they gave the review. Also some people dont mind a wait if the food is that amazing and want to know that upfront and not go through hundreds of one star reviews complaining about the wait.</p>
      <br/>
      <p>Thats where RANT comes in where a customer can review a business differently for different reasons.</p>
    </Container>
  )
}

export default AboutPage