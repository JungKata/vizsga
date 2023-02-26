import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{


  render(){
  return <div>
      <form action="">
        <ul className='tab-group'>
          <li className='tab active'><a href="#signup">Sign Up</a></li>
          <li className='tab'><a href="#login">Log In</a></li>
        </ul>

{/*Sign Up*/}
        <div className='tab-content'>
          <div id='signup'>
            <h1>Sign Up</h1>

            <form action="/" method='post'>
              <div className='top-row'>
                <div className='field-wrap'>
                  <label htmlFor="">Firstname: <span className='req'>*</span></label>
                  <input type="text" required autoComplete='off' />
                </div>

                <div className='field-wrap'>
                  <label htmlFor="">Lastname: <span className='req'>*</span></label>
                  <input type="text" required autoComplete='off' />
                </div>

                <div className='field-wrap'>
                  <label htmlFor="">Email Address:<span className='req'>*</span></label>
                  <input type="email" required autoComplete='off' />
                </div>

                <div className='field-wrap'>
                  <label htmlFor="">Password: <span className='req'>*</span></label>
                  <input type="password"required autoComplete="off"/>
                </div>

                <div className='field-wrap'>
                  <label htmlFor="">Password again: <span className='req'>*</span></label>
                  <input type="password"required autoComplete="off"/>
                </div>

                <button type='submit' className='button button-block'>Sign Up</button>

{/*Log In*/}

            <div id='login'>
                <h1>Log In</h1>
                <form action="/" method='post'></form>

                <div className='field-wrap'>
                  <label htmlFor="">Email Address: <span className='req'>*</span></label>
                  <input type="email"required autoComplete="off"/>
                </div>

                <div className='field-wrap'>
                <label htmlFor="">Password: <span className='req'>*</span></label>
                  <input type="password"required autoComplete="off"/>
                </div>
            </div>

            <button type='submit' className='button button-block'>Log In</button>
            
             </div>
            </form>
          
          </div>
        </div>
      </form>
    </div>
  
}
}

export default App;
