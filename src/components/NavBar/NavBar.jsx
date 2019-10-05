import React from 'react'
import { Nav } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const NavBar = (props) => {
  // const nav = 


  return(
    <div>
      <Nav
        activeKey="/"
        // onSelect={selectedKey => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/">RANT</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link><Link to="/signup">Sign Up</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link><Link to="/login">Log In</Link></Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}
export default NavBar