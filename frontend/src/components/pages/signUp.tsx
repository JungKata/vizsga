import React, { Component } from "react";
import { BrowserRouterProps } from "react-router-dom";



const email_regex = RegExp(/^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A -Z0–9]{2,4}\s?$/i);

interface SignUpProps extends BrowserRouterProps{
  name?: any;
  value?: any;
  alert: AlertProps;
}

interface SignUpStatus{
  firstname: string;
  lastname: string;
  emailAddress: string;
  password: string;
  passwordAgain: string
  error: {
    firstname: string;
    lastname: string;
    emailAddress: string;
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
    const {firstname, lastname, emailAddress, password} = this.state;

    const SignUpData = {
      firstname: firstname,
      lastname: lastname,
      emailAddress: emailAddress,
      password: password
      
    }
  
    let response = await fetch('http://localhost:3000/authorization/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(SignUpData),
    });

    const { statusMessage } = await response.json();
    const isSuccess = response.ok && statusMessage === 'Sikeres regisztrált';
    if(isSuccess){
    this.setState({
        firstname: isSuccess ? '' : this.state.firstname,
        lastname: isSuccess ? '' : this.state.lastname,
        emailAddress: isSuccess ? '' : this.state.emailAddress,
        password: isSuccess ? '' : this.state.password,
        
    alert: {
        type: isSuccess ? 'success' : this.state.alert.type,
        statusMessage: isSuccess ? 'Sikeresen regisztrált' : this.state.alert.statusMessage,
        show: isSuccess ? true : this.state.alert.show,
      },
    });

    this.timeoutStatus = setTimeout(() =>{
      window.location.href = '/logIn'
    },8000);
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
          error.emailAddress = '';
        } else {
          error.emailAddress = 'Az email cím nem megfelő formátumú';
        }
        break;
    
      case 'password':
        const uppercaseRegExp   = /(?=.*?[A-Z])/;
        const lowercaseRegExp   = /(?=.*?[a-z])/;
        const digitsRegExp      = /(?=.*?[0-9])/;
        const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
        
        

        if (value.length < 6) {
          error.password = 'A jelszónak legalább 6 karakter hosszúnak kell lennie!';
        }else if(!uppercaseRegExp.test(value)){
          error.password = 'A jelszónak legalább egy nagy betűt tartalmaznia kell'
        } else if(!lowercaseRegExp.test(value)){
          error.password = 'A jelszónak legalább egy kis betűt tartalmaznia kell'
        } else if(!digitsRegExp.test(value)){
          error.password = 'A jelszónak legalább egy számot tartalmaznia kell'
        } else if(!specialCharRegExp.test(value)){
          error.password = 'A jelszónak legalább egy speciális karaktert tartalmaznia kell'
        } else {
          error.password = '';
        }
        break;

        case 'passwordAgain':
        if (value !== this.state.password) {
        error.passwordAgain = 'A két jelszó nem egyezik';
        }else{
          error.passwordAgain = '';
        }
        break;
      default:
      break;

    }
    this.setState(Object.assign(this.state, { error, [name]: value }));
  }
   
  handleSubmit = ( event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValid = Object.values(this.state.error).every((val) => val === "");

    if (isValid) {
      this.setState({
        alert: { type: "success", statusMessage: "Sikeresen Regisztrált!!", show: true },
   });
    this.timeoutStatus = setTimeout(() => {
      window.location.href = '/logIn'
    }, 8000);
    }else {
      this.setState({
      alert: { type: "error", statusMessage: "Nem sikerült regisztrálni!", show: true },
    });
  }
}
    
handleLogin = () => {
  window.location.href = '/logIn'

};

constructor(props: SignUpProps){
  super(props)
  const startStatus : SignUpStatus = {
    firstname: '',
    lastname: '',
    emailAddress: '',
    password: '',
    passwordAgain: '',
      error: {
        firstname: '',
        lastname: '',
        emailAddress: '',
        password: '',
        passwordAgain: ''
      },
      alert: {type: "success", statusMessage: '', show: false},
  }
  this.state = startStatus;
  this.handleChange = this.handleChange.bind(this);
}



    render() {
      const { alert } = this.state;
      const { error } = this.state;

        return <div className='tab-content'>
                <div id='signup'>
                <h1 id="sign_felirat">Sign Up</h1>

              <form onSubmit={this.handleSubmit} noValidate>
              <div className='top-row' >
                <div className='form-group'>
                  <label htmlFor="">Firstname: <span className='req'>{error.firstname}</span></label>
                  <input type="text" name="firstname" onChange={this.handleChange} className="form-control" required autoComplete='off' placeholder="Firstname" />
                  {error.firstname
                  ? <span style={{ color: "red" }}>{error.firstname}</span>
                  : null
                  }

                </div>

                <div className='form-group'>
                  <label htmlFor="">Lastname: <span className='req'>*</span></label>
                  <input type="text" name="lastname" onChange={this.handleChange} className="form-control" required autoComplete='off' placeholder="Lastname" />
                  {error.lastname
                  ? <span style={{ color: "red" }}>{error.lastname}</span>
                  : null
                  }
                </div>

                <div className='form-group'>
                  <label htmlFor="">Email Address:<span className='req'>*</span></label>
                  <input type="email" name="emailAddress" onChange={this.handleChange} className="form-control" required autoComplete='off' placeholder="Email Adress" />
                  {error.emailAddress
                  ? <span style={{ color: "red" }}>{error.emailAddress}</span>
                  : null
                  }
                </div>

                <div className='form-group'>
                  <label htmlFor="">Password: <span className='req'>*</span></label>
                  <input type="password" name="password" onChange={this.handleChange} className="form-control" required autoComplete="off" placeholder="Password" />
                  {error.password
                  ? <span style={{ color: "red" }}>{error.password}</span>
                  : null
                  }
                </div>

                <div className='form-group'>
                  <label htmlFor="">Password again: <span className='req'>*</span></label>
                  <input type="password" name="passwordAgain" onChange={this.handleChange} className="form-control" required autoComplete="off" placeholder="Password Again"/>
                  {error.passwordAgain
                  ? <span style={{ color: "red" }}>{error.passwordAgain}</span>
                  : null
                  }
                  <br />
                

                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> <br />
                </div><br />

                
                <button type='submit' className='button button-block' id="gomb" onClick={this.handleUpload}>Sign Up</button><br />
                
                <div >
                <button type="submit" className="button button-block" id="gomb" onClick={this.handleLogin}>Login</button>
                </div>

              </div>
            
                {alert.show && (
                <div className={`alert ${alert.type}`}>
                  <span className="closebtn" onClick={this.handleClose}>&times;</span>
                  {alert.statusMessage}
                </div>
              )}

            </form>
            </div>
        </div>

      //https://www.cluemediator.com/password-and-confirm-password-validation-in-react
    }
  }



