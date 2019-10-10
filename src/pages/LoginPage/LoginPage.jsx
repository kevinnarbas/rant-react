import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import userService from '../../utils/userService'
// import LoginToast from '../../components/LoginToast/LoginToast'
import {Toast} from 'react-bootstrap'

class LoginPage extends Component {
  
  state = {
    email: '',
    pw: '',
    show: false,
    setShow: false,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      this.props.handleSignupOrLogin();
      this.props.history.push('/');
    } catch (err) {
      this.handleToast(true)
    }
  }
  
  handleToast = (val) => {
    this.setState({show: val, setShow: val})
  }

  render() {

    return (
      <div className="LoginPage">
        <header className="header-footer">Log In</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <div className="col-sm-12">
              <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="form-control" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default">Log In</button>&nbsp;&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
            </div>
          </div>
        </form>
        <Toast onClose={() => this.handleToast(false)} show={this.state.show} delay={2000} autohide>
          <Toast.Header>
            <strong>Hey Buddy&nbsp;&nbsp;&nbsp;</strong>
            <small>&nbsp;&nbsp;&nbsp;</small>
          </Toast.Header>
          <Toast.Body>&nbsp;&nbsp;&nbsp;Wrong Login Info&nbsp;&nbsp;&nbsp;</Toast.Body>
        </Toast>
      </div>
    );
  }
}

export default LoginPage;