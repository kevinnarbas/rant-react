import React from 'react'
import {Card} from 'react-bootstrap'

const SearchCard = (props) => {
  const {name, is_closed, image_url, display_phone} = props.business
  return(
    // <Card style={{ height: '8rem', width: '16rem'}}>
      <>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title style={{color: "black", backgroundColor: 'rgba(255,255,255,0.5)'}}>{name}</Card.Title>
        <Card.Text>
          {is_closed ? 'Now Closed' : 'Now Open'}
        </Card.Text>
        <Card.Footer>
          {display_phone}
        </Card.Footer>
      </Card.Body>
      </>
    // </Card>
  )
}

export default SearchCard