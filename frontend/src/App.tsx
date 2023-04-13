import React, { Component } from 'react';
import './App.css';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import SignUp from './components/pages/signUp'
import 'bootstrap/dist/css/bootstrap.css';
//import { Navbar } from 'react-bootstrap';
import LogIn from './LogIn';
import QuizMaker from './components/pages/QuizMaker';


class App extends Component {


  render() {
    return <div className='html'>

      <div className='container-fluid' id='menu'>
        <div className='row'>

          <div className='col-md-3'>
            <Link to='/quizRider' className='quizrider'>QuizRider</Link>
          </div>

          <div className='col-lg-3'>
            <Link to='/signUp' className='sign'>Sign Up</Link>
          </div>

          <div className='col-lg-3'>
            <Link to='/logIn' className='login'>Log In</Link>
          </div>

          <div className='col-lg-3'>
          <Link to='/quizMaker' className='make'>Quiz Maker</Link>
          </div>
        </div>
      </div>


      <main>
        <Routes>
          <Route path='/signUp' element={<SignUp alert={{ type: 'success', statusMessage: '' }} />}></Route>
          {/* <SignUp alert={{ type: 'success', message: '' }} /> */}
        
          <Route path='/logIn' element={<LogIn />}></Route>
          <Route path='/quizMaker' element={<QuizMaker />}></Route>
        </Routes>
      </main>

    </div>


  }
}

export default App;
