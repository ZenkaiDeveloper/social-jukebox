import React, { Component } from 'react';
import '../Login.css'

class SignUp extends Component{
  render(){
    return(
      <div>
        <h1>Quick and Easy Signup Process</h1>
        <h3>Account Details</h3>
        <form>
          <div>
            <label htmlFor="firstName">First name*</label>
            <input name="firstName" type="text" className="signup-input" />
          </div>

          <div>
            <label htmlFor="lastName">Last name*</label>
            <input name="lastName" type="text" className="signup-input" />
          </div>

          <div>
            <label htmlFor="email">Email*</label>
            <input name="lastName" type="email" className="signup-input" />
          </div>

          <div>
            <label htmlFor="username">Username*</label>
            <input name="username" type="text" className="signup-input" />
          </div>

          <div>
            <label htmlFor="password">Password*</label>
            <input name="password" type="password" className="signup-input" />
          </div>

          <div>
            <label htmlFor="passwordConfirmation">Password Confirmation*</label>
            <input name="passwordConfirmation" type="password" className="signup-input" />
          </div>

          <div>
            <input type="submit" className="primary-btn" value="Create Account"/>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp
