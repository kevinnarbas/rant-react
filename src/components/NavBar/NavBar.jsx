import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import {Link} from 'react-router-dom'
import './NavBar.css'

const linkItem = {textDecoration: 'none', color: 'white'}

const NavBar = (props) => {
  const nav = props.user ? 
    <>  
      <Nav.Link><Link to='' style={linkItem} onClick={props.handleLogout}>&nbsp;&nbsp;|&nbsp;&nbsp;Log Out</Link></Nav.Link>
    </>
    :
    <>
      <Nav.Link><Link to="/signup" style={linkItem}>&nbsp;&nbsp;|&nbsp;&nbsp;Sign Up</Link></Nav.Link>
      <Nav.Link><Link to="/login" style={linkItem}>|&nbsp;&nbsp;Log In</Link></Nav.Link>
    </>
  
  const name = props.user && 
    <>
      <Navbar.Text style={linkItem}>
        Signed in as: &nbsp;{props.user.name}
      </Navbar.Text>
    </>

  return(
    <div>
      <Navbar inverse fluid className="NavBar" expand="xl">
        <Nav>
          <h3 className="NavBar-brand"><i class="fas fa-theater-masks"></i> RANT&nbsp;</h3>
          <Nav.Link><Link to="/" style={linkItem}>Home</Link></Nav.Link>
          <Nav.Link><Link to="/about" style={linkItem}>About</Link></Nav.Link>
        </Nav>
        <Nav>
          {name}
          {nav}
        </Nav>
      </Navbar>
    </div>
  )
}
export default NavBar