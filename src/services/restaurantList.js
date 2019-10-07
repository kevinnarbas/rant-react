import Axios from "axios"

const BASE_URL = 'https://api.yelp.com/v3/'

function SearchBusiness() {
  Axios.get(`${'https://cors-anywhere.herokuapp.com/'}${BASE_URL}businesses/search`, {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
    },
    params: {
      latitude: 37.774929, 
      longitude: -122.419418,
    }
  })
  .then(res =>  console.log(res.data.businesses))
  .catch(err => {console.log('Error')})
}

export default SearchBusiness
