import React from 'react'
import Axios from "axios"
import {Route, Switch, Link} from 'react-router-dom'


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
    console.log(this.state.reviews)
  }


  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.search} name="search" onChange={this.handleChange}/>
          <button type="submit">Search</button>
        </form>
        <Switch>
          <Route exact path="/" render={() => 
            <div>
              {this.state.businesses.map((business, id) => 
                <Link
                  to={{
                    pathname:`business/${business.id}`,
                    state: {businesses: business}
                  }}
                  key={id}
                >
                  <div key={id}>{business.name}</div>
                </Link>
                )}
            </div>
          } />
        </Switch>
      </>
    )
  }
}

export default SearchList