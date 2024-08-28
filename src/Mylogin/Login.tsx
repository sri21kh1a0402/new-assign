//import React from 'react'
import './login.css'

export default function Login() {
  return (
    <div>


<div className="container">
    <div className="row">
        <div className="col-md-offset-5 col-md-4 text-center">
            <h1 className='text-white'>Unique Login Form</h1>
              <div className="form-login">
                <h4>Secure Login</h4>
                
                <input type="text" id="userName" className="form-control input-sm chat-input" placeholder="username"/>
                
                <input type="text" id="userPassword" className="form-control input-sm chat-input" placeholder="password"/>
                
                <div className="wrapper">
                        <span className="group-btn">
                            <a href="#" className="btn btn-danger btn-md">login <i className="fa fa-sign-in"></i></a>
                        </span>
                </div>
            </div>
        </div>
    </div>
    
    
    <div className="footer text-white text-center">
        <p>© 2020 Unique Login Form. All rights reserved | Design by <a href="https://freecss.tech">Free Css</a></p>
    </div>
    
</div>
    </div>
  )
}
