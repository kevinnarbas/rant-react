import React from 'react'
import Axios from "axios"
import './SearchList.css'
import {Route, Switch, Link} from 'react-router-dom'
import SearchCard from '../SearchCard/SearchCard'
import {Card, CardColumns, Form, Row, Button, Col} from 'react-bootstrap'


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
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col>
              <Form.Control 
                type="text" 
                value={this.state.search} 
                name="search" 
                onChange={this.handleChange} 
                placeholder="Search Here:"
              />
            </Col>
            <Col>
              <Button type="submit">Search</Button>
            </Col>
          </Row>
        </Form>
        <br/>
        <Switch>
          <Route exact path="/" render={() => 
            <CardColumns>
              {this.state.businesses.map((business, id) => 
                <Link
                  to={{
                    pathname:`business/${business.id}`,
                    state: {businesses: business}
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
        </Switch>
      </>
    )
  }
}

export default SearchList