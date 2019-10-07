import React from 'react'
import SearchBusiness from '../../services/restaurantList'

class SearchList extends React.Component {
  state = {
    businesses: []
  }
  
  componentDidMount() {
    const businesses = SearchBusiness()
    this.setState({businesses: businesses})
    console.log(businesses)
  }

  render() {
    return (
      <h1>Search List</h1>
    )
  }
}

export default SearchList