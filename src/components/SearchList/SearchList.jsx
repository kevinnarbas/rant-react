import React from 'react'
import Axios from "axios"
import './SearchList.css'
import {Route, Switch, Link} from 'react-router-dom'
import SearchCard from '../SearchCard/SearchCard'
import {Card, CardColumns, Form, Row, Button, Col, Container} from 'react-bootstrap'


class SearchList extends React.Component {
  state = {
    businesses: [],
    search: '',
  }
  
  componentDidMount() {
    Axios.get(`${'https://cors-anywhere.herokuapp.com/'}${process.env.REACT_APP_BASE_URL}businesses/search`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
      },
      params: {
        latitude: 37.774929, 
        longitude: -122.419418,
        limit: 25,
        term: `${this.state.search}`
      }
    })
    .then(res => {
      const businesses = res.data.businesses
      this.setState({businesses})
    })
    .catch(err => {console.log('Error')})
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.componentDidMount()
  }


  render() {
    const user = this.props.user ? 
      <Route exact path="/" render={() => 
        <CardColumns>
          {this.state.businesses.map((business, id) => 
            <Link
              to={{
                pathname:`business/${business.id}`,
                state: {businesses: business, user: this.props.user},
              }}
              key={id}
            >
              <Card style={{ width: '20rem'}}>
                <SearchCard business={business}/>
              </Card>
            </Link>
            )}
        </CardColumns>
      } />
      :
      <Route exact path="/" render={() => 
        <CardColumns>
          {this.state.businesses.map((business, id) => 
            <Link
              to={{
                pathname:`business/${business.id}`,
                state: {businesses: business},
              }}
              key={id}
            >
              <Card style={{ width: '20rem'}}>
                <SearchCard business={business}/>
              </Card>
            </Link>
            )}
        </CardColumns>
      } />


    return (
      <>
        <Card>
          <Card.Img src="https://cdn.rentokil.com/content/local/uk-amb/images/desktop/main_restaurant-pub-bar-banner.jpg" alt="Card image" />
          <Card.ImgOverlay style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            {/* <Card.Title><h1>RANT</h1></Card.Title> */}
            <br/>
            <Form onSubmit={this.handleSubmit} style={{display: 'flex', width: '80%'}}>
              <Form.Control 
                type="text" 
                value={this.state.search} 
                name="search" 
                onChange={this.handleChange} 
                placeholder="Search Here:"
              />
              <Button style={{backgroundColor: '#FF5252', borderColor: '#FF5252'}} type="submit">SEARCH</Button>
            </Form>
          </Card.ImgOverlay>
        </Card>
        <br/>
        <Container>
          <Row>
            <Col>
              <Switch>
                {user}
              </Switch>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default SearchList