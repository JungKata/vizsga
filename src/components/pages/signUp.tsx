import { Component, ReactNode } from "react";

export default class signUp extends Component{
    render(){
        return <div>

        <div className='tab-content'>
            <div id='signup'><br />
                <h1>Sign Up</h1>

            
              <div className='top-row'>
                <div className='form-group'>
                  <label htmlFor="">Firstname: <span className='req'>*</span></label>
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

                <button type='submit' className='button button-block'>Sign Up</button><br />

                </div>
            
            </div>
        </div>
    </div>

        
    }
}