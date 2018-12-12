import React, { Component } from 'react';
import '../SignUp.css'

const tokenURL = 'social-jukebox-backend.herokuapp.com/api/users'

class SignUp extends Component{

  state = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    passwordConfirmation: ''
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    fetch(tokenURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'user':
        {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
          password_confirmation: this.state.passwordConfirmation
        }
    }
    )
    })
    .then(()=>{
      this.props.history.push('/');
    })
  }

  render(){
    return(
      <div className='login-wrapper'>

      <div className="left">
        <div className="signin">
        <h1 className='logo'>Quick and Easy Signup</h1>
        <form onSubmit={this.submitHandler} className='signup-fields'>
        <h3>Account Details</h3>
          <div>
            <label htmlFor="firstName">First name*</label>
            <input name="firstName" type="text" className="signup-input" value={this.state.firstName} onChange={this.changeHandler}/>
          </div>

          <div>
            <label htmlFor="lastName">Last name*</label>
            <input name="lastName" type="text" className="signup-input" value={this.state.lastName} onChange={this.changeHandler}/>
          </div>

          <div>
            <label htmlFor="email">Email*</label>
            <input name="email" type="email" className="signup-input" value={this.state.email} onChange={this.changeHandler}/>
          </div>

          <div>
            <label htmlFor="username">Username*</label>
            <input name="username" type="text" className="signup-input" value={this.state.username} onChange={this.changeHandler}/>
          </div>

          <div>
            <label htmlFor="password">Password*</label>
            <input name="password" type="password" className="signup-input" value={this.state.password} onChange={this.changeHandler}/>
          </div>

          <div>
            <label htmlFor="passwordConfirmation">Password Confirmation*</label>
            <input name="passwordConfirmation" type="password" className="signup-input" value={this.state.passwordConfirmation} onChange={this.changeHandler}/>
          </div>

          <div>
            <input type="submit" className="primary-btn signup-btn" value="Create Account"/>
          </div>
        </form>
        </div>
        </div>

        <div className="right">
          <div id="showcase-signup">
            <div className="showcase-content">
              <div className="right-container">
                <h1 className="showcase-text">Immerse your life in <strong>Music</strong> with your Social Jukebox</h1>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default SignUp
