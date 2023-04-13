import React, { Component } from "react";
import { BrowserRouterProps } from "react-router-dom";
import LogIn from "../../LogIn";

const email_regex = RegExp(/^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A -Z0–9]{2,4}\s?$/i);

interface SignUpProps extends BrowserRouterProps{
  name?: any;
  value?: any;
  alert: AlertProps;
}

interface SignUpStatus{
  fistname: string;
  lastname: string;
  emailaddress: string;
  password: string;
  error: {
    fistname: string;
    lastname: string;
    emailaddress: string;
    password: string;
  }
  alert: AlertStatus;
}

interface AlertProps{
  type: 'success' | 'error';
  message: string;
}

interface AlertStatus{
  type: 'success' | 'error';
   message: string,
   show: boolean,
}



export default class SignUp extends Component<SignUpProps, SignUpStatus>{

  handleClose = () => {
    this.setState({ alert: { ...this.state.alert, show: false } });
  }

  handleUpload = async () => {
    const {fistname, lastname, emailaddress, password} = this.state;

    const SignUpData = {
      fistname: fistname,
      lastname: lastname,
      emailaddress: emailaddress,
      password: password,
    }
  
    let response = await fetch('https://localhost:3000/authorization/signUp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(SignUpData),
    })
  }

    
    render() {
      const { alert } = this.state;
      const { error } = this.state;

        return <div className='tab-content'>
                <div id='signup'>
                <h1 id="sign_felirat">Sign Up</h1>

            
              <div className='top-row'>
                <div className='form-group'>
                  <label htmlFor="">Firstname: <span className='req'>{error.fistname}</span></label>
                  <input type="text" className="form-control" required autoComplete='off' placeholder="Firstname" />
                </div>

                <div className='form-group'>
                  <label htmlFor="">Lastname: <span className='req'>*</span></label>
                  <input type="text" className="form-control" required autoComplete='off' placeholder="Lastname" />
                </div>

                <div className='form-group'>
                  <label htmlFor="">Email Address:<span className='req'>*</span></label>
                  <input type="email" className="form-control" required autoComplete='off' placeholder="Email Adress" />
                </div>

                <div className='form-group'>
                  <label htmlFor="">Password: <span className='req'>*</span></label>
                  <input type="password" className="form-control" required autoComplete="off" placeholder="Password"/>
                </div>

                <div className='form-group'>
                  <label htmlFor="">Password again: <span className='req'>*</span></label>
                  <input type="password" className="form-control" required autoComplete="off" placeholder="Password Again"/>
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> <br />
                </div><br />

                <button type='submit' className='button button-block' id="gomb">Sign Up</button><br />
                </div>
            
                {alert.show && (
                <div className={`alert ${alert.type}`}>
                  <span className="closebtn" onClick={this.handleClose}>&times;</span>
                  {alert.message}
                </div>
              )}

            </div>
        </div>
    }
  }


