import { Component } from "react";

export default class LogIn extends Component{
    render(){
        return <div>

            <div className="tab-content">
                <div id='login'>
                    <h1 id="login_felirat">Log In</h1>
                        

                            <div className='form-group'>
                            <label htmlFor="">Email Address: <span className='req'>*</span></label>
                            <input type="email" className="form-control" required autoComplete="off" placeholder="Email Address"/>
                            </div>

                            <div className='form-group'>
                            <label htmlFor="">Password: <span className='req'>*</span></label>
                            <input type="password" className="form-control" required autoComplete="off" placeholder="Password"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> <br />
                            </div><br />
            

                        <button type='submit' className='button button-block' id="gomb">Log In</button><br />
            
                        
                </div>
            </div>
        </div>

}
}