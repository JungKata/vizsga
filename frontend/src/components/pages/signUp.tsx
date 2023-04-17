import React, { Component } from "react";
import { BrowserRouterProps } from "react-router-dom";
import LogIn from "../../LogIn";  
import { error } from "console";
import { type } from "os";
import { isRegExp } from "util/types";

const email_regex = RegExp(/^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A -Z0–9]{2,4}\s?$/i);

interface SignUpProps extends BrowserRouterProps{
  name?: any;
  value?: any;
  alert: AlertProps;
}

interface SignUpStatus{
  firstname: string;
  lastname: string;
  emailaddress: string;
  password: string;
  passwordAgain: string
  error: {
    firstname: string;
    lastname: string;
    emailaddress: string;
    password: string;
    passwordAgain: string
  }
  alert: AlertStatus;
}

interface AlertProps{
  type: 'success' | 'error';
  statusMessage: string;
}

interface AlertStatus{
  type: 'success' | 'error';
   statusMessage: string,
   show: boolean,
}



export default class SignUp extends Component<SignUpProps, SignUpStatus>{

  timeoutStatus: ReturnType<typeof setTimeout> | undefined;

  handleClose = () => {
    this.setState({ alert: { ...this.state.alert, show: false } });
  }

  handleUpload = async () => {
    const {firstname, lastname, emailaddress, password} = this.state;

    const SignUpData = {
      firstname: firstname,
      lastname: lastname,
      emailaddress: emailaddress,
      password: password,
    }
  
    let response = await fetch('https://localhost:3000/authorization/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(SignUpData),
    })

    const { statusMessage } = await response.json();
    const isSuccess = response.ok && statusMessage === 'Sikeres regisztrált';
    if(isSuccess){
    this.setState({
        firstname: isSuccess ? '' : this.state.firstname,
        lastname: isSuccess ? '' : this.state.lastname,
        emailaddress: isSuccess ? '' : this.state.emailaddress,
        password: isSuccess ? '' : this.state.password,
    alert: {
        type: isSuccess ? 'success' : this.state.alert.type,
        statusMessage: isSuccess ? 'Sikeresen regisztrált' : this.state.alert.statusMessage,
        show: isSuccess ? true : this.state.alert.show,
      },
    });

    this.timeoutStatus = setTimeout(() =>{
      window.location.href = '/logIn'
    },5000);
    }
    else{
    this.setState({
      alert:{
        type: 'error',
        statusMessage:'Hiba lépet fel a regisztráció során',
        show: true
        },
      });
    }
  };

  handleChange = (event: any) => {
    event.preventDefault();
    const {name, value} = event.target

    var error = this.state.error
    switch (name) {
      case 'firstname':
        if (value.length < 3) {
          error.firstname = 'A keresztnévnek legalább 3 karakter hosszúnak kell lennie!';
        } else {
          error.firstname = '';
        }
        break;
    
      case 'lastname':
        if (value.length < 3) {
          error.lastname = 'A vezetéknévnek legalább 3 karakter hosszúnak kell lennie!';
        } else {
          error.lastname = '';
        }
        break;
    
      case 'emailAddress':
        if (email_regex.test(value)) {
          error.emailaddress = '';
        } else {
          error.emailaddress = 'Az email cím nem megfelő formátumú';
        }
        break;
    
      case 'password':
        if (value.length < 6) {
          error.password = 'A jelszónak legalább 6 karakter hosszúnak kell lennie!';
        } else {
          error.password = '';
        }
        break;

      case 'passwordAgain':
      if (error.password && value !== error.passwordAgain) {
       return 'A jelszó és a jelszó újra nem egyezik';
      }
    break;

    default:
    break;

    }
    this.setState(Object.assign(this.state, { error, [name]: value }));
  }
   
  handleSubmit = ( event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.setState({
      alert: {type:"success", statusMessage:"Sikeresen regisztrált!", show: true }
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
                  <label htmlFor="">Firstname: <span className='req'>{error.firstname}</span></label>
                  <input type="text" className="form-control" required autoComplete='off' placeholder="Firstname" name="fistname" />
                </div>

                <div className='form-group'>
                  <label htmlFor="">Lastname: <span className='req'>*</span></label>
                  <input type="text" name="lastname" className="form-control" required autoComplete='off' placeholder="Lastname" />
                </div>

                <div className='form-group'>
                  <label htmlFor="">Email Address:<span className='req'>*</span></label>
                  <input type="email" name="emailAddress" className="form-control" required autoComplete='off' placeholder="Email Adress" />
                </div>

                <div className='form-group'>
                  <label htmlFor="">Password: <span className='req'>*</span></label>
                  <input type="password" name="password" className="form-control" required autoComplete="off" placeholder="Password" />
                </div>

                <div className='form-group'>
                  <label htmlFor="">Password again: <span className='req'>*</span></label>
                  <input type="password" name="passwordAgain" id="passwordAgain" className="form-control" required autoComplete="off" placeholder="Password Again"/>
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> <br />
                </div><br />

                <button type='submit' className='button button-block' id="gomb">Sign Up</button><br />
                </div>
            
                {alert.show && (
                <div className={`alert ${alert.type}`}>
                  <span className="closebtn" onClick={this.handleClose}>&times;</span>
                  {alert.statusMessage}
                </div>
              )}

            </div>
        </div>
    }
  }


