import React, { Component } from 'react';
import {Link, Route, Redirect, withRouter} from 'react-router-dom';
import '../Login.css';
import SignUp from './SignUp';

class Login extends Component{
  state={
    username:"",
    password:""
  }


  changeHandler = (event)=>{
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  login = (e)=>{
    e.preventDefault();
    const username = this.state.username
    const password = this.state.password
    console.log(username ,password)
    let options = {
      method:"POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        "auth":{
          "username": username,
          "password": password
        }
      })
    }
    fetch("http://localhost:3002/api/user_token", options)
      .then(r=>r.json())
      .then(result=>{
        console.log(result)
        localStorage.setItem('jwt', result.jwt)
      })
      .then(()=>{
        this.props.history.push('/')
        // window.location.replace('/')
      })
      .then(()=>{
        this.props.getData()
      })
      .catch(error =>{
        console.log(error)
      })



  }

  render(){
    return(
      <div className="login-wrapper">
        <div className="left">
          <div className="signin">
            <div className="logo">
              <h1>Social Jukebox</h1>
            </div>
            <form onSubmit={this.login}>
              <div>
                <label htmlFor="username">Username</label>
                <input className="text-input" name="username" type="text" value={this.state.username} onChange={this.changeHandler} />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input className="text-input" name="password" type="password" value={this.state.password} onChange={this.changeHandler} />
              </div>
              <div>
                <input type="submit" className="primary-btn" value="Sign in"/>
              </div>
            </form>
            <div className="links">
              <Link className="forgot-password" to="/">Forgot Password?</Link>
            </div>
            <div className="or">
              <hr className="bar" />
              <span>OR</span>
              <hr className="bar" />
            </div>

            <Link to="/signup" className="secondary-btn">Create an account</Link>

          </div>
        </div>

        <div className="right">
          <div id="showcase">
            <div className="showcase-content">
              <div className="right-container">
                <h1 className="showcase-text">Immerse your life in <strong>Music</strong> with your Social Jukebox</h1>
                <Link to="/signup" className="secondary-btn">Join for Free</Link>
              </div>
            </div>
          </div>
        </div>

      </div>

    )
  }
}

export default withRouter(Login)
