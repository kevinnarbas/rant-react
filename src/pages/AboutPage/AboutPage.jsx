import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const AboutPage = () => {
  return (
    <Container>
      {/* <img src="https://miro.medium.com/max/762/1*KVSXYX5Owz7-_5Rm_jHEKQ.jpeg" alt="React meme"/> */}
      <h1>Rant</h1>
      <h3><i>-User Reviews on more than just one parameter</i></h3>
      <p>Here at RANT the goal was to make a platform where a user can base a review on many different parameters.  Other apps base everything on only one rating system and that works for some, but there are some flaws in that.  Lets say a customer had a bad experience with a server but the food was amazing.  Of course it'll be a one star review, sure they can comment in the review that the food was great but the server was bad, but who has the time to read every review to find out why they gave the review. Also some people dont mind a wait if the food is that amazing and want to know that upfront and not go through hundreds of one star reviews complaining about the wait.</p>
      <br/>
      <p>Thats where RANT comes in where a customer can review a business differently for different reasons.</p>
      <h3>Lets Meet The Creator:</h3>
      <Row>
        <Col sm={5}>
          <img style={{width: '50%'}} src="https://i.imgur.com/Jd94yTr.png" alt="meeee"/>
        </Col>
        <Col sm={7}>
          <p>Well first off id like to say that I'm an adventurous eater.  That being said I am not afraid of eating at lower tier establishments according to other sites' users such as yelp.  My motivation to build this app was to give users the ability to rate places on several criteria.  I'm also patient and can wait if the food is worth it.  Also I'm not as bothered as most people are with slow/rude service so I thought it sucks that some of these places with great food gets rated so low cause things like that.</p>
          <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <h1><i class="fab fa-linkedin"></i></h1>
            <h1><i class="fab fa-github-square"></i></h1>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default AboutPage