import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import {OverlayTrigger, Tooltip} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './NavBar.css'

const linkItem = {textDecoration: 'none', color: 'white', fontWeight: '700'}

const NavBar = (props) => {
  const nav = props.user ? 
    <>  
      <Nav.Link>
        <Link to='' style={linkItem} onClick={props.handleLogout}>
          &nbsp;&nbsp;|&nbsp;&nbsp; <i class="fas fa-lock"></i> Log Out
        </Link>
      </Nav.Link>
    </>
    :
    <>
      <Nav.Link><Link to="/signup" style={linkItem}><i class="fas fa-user-plus"></i>&nbsp; Sign Up</Link></Nav.Link>
      <Nav.Link><Link to="/login" style={linkItem}>|&nbsp; <i class="fas fa-unlock"></i>&nbsp; Log In</Link></Nav.Link>
    </>
  
  const name = props.user && 
    <>
      <Navbar.Text style={linkItem}>
        Hello &nbsp;{props.user.name}!
      </Navbar.Text>
    </>

  return(
    <div>
      <Navbar inverse fluid className="NavBar" expand="xl">
        <Nav>
          <OverlayTrigger placement='bottom' overlay={<Tooltip>Not A Button</Tooltip>}>
            <h3 className="NavBar-brand"><i class="fas fa-theater-masks"></i> RANT&nbsp;</h3>
          </OverlayTrigger>
          <OverlayTrigger placement='bottom' overlay={<Tooltip>Home Page</Tooltip>}>
            <Nav.Link style={{padding: 0, margin: '0 10px'}}>
              <Link to="/" style={linkItem}>
                <h4 style={{margin: 0}}><i class="fas fa-home"></i></h4>
              </Link>
            </Nav.Link>
          </OverlayTrigger>
          <OverlayTrigger placement='bottom' overlay={<Tooltip>About Page</Tooltip>}>
            <Nav.Link style={{padding: 0, margin: '0 10px'}}>
              <Link to="/about" style={linkItem}>
                <h4><i class="far fa-address-card"></i></h4>
              </Link>
            </Nav.Link>
          </OverlayTrigger>
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