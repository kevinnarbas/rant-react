import React from 'react'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'
import './NavBar.css'

const linkItem = {textDecoration: 'none', color: 'white'}

const NavBar = (props) => {
  const nav = props.user ? 
    <>  
      <Nav.Item>
        <Nav.Link><Link to='' style={linkItem} onClick={props.handleLogout}>Log Out</Link></Nav.Link>
      </Nav.Item>
    </>
    :
    <>
      <Nav.Item>
        <Nav.Link><Link to="/signup" style={linkItem}>Sign Up</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link><Link to="/login" style={linkItem}>Log In</Link></Nav.Link>
      </Nav.Item>
    </>

  return(
    <div>
      <Nav
        activeKey="/"
        className="NavBar"
      >
        <Nav.Item>
          <Nav.Link><Link to="/" style={linkItem}>RANT</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link><Link to="/about" style={linkItem}>About</Link></Nav.Link>
        </Nav.Item>
        {nav}
      </Nav>
    </div>
  )
}
export default NavBar