import { Component, FormEvent } from "react";
import { BrowserRouterProps } from "react-router-dom";


interface LogInStatus{
     emailAddress: string,
     password: string,
     error: string,
}

    interface TokenProps extends BrowserRouterProps{
    Usertoken: string;
    UsertokenChange: (token: string) => void,
 }



    export default class LogIn extends Component<TokenProps, LogInStatus>{

    timeoutStatus: ReturnType<typeof setTimeout> | undefined;

     constructor(props: TokenProps){
         super(props);
         this.state = {
             emailAddress: '',
             password: '',
             error: '',
         }
    }




    handleLogin = async (e:FormEvent) => {
        e.preventDefault();
        const LogInData = {
            'emailAddress' : this.state.emailAddress,
            'password': this.state.password
        };

        const response = await fetch('http://localhost:3000/authorization/loginProfile',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(LogInData)
        });
    
    
    if (!response.ok) {
        const errorMessage = response.status === 401 ? 'A fiók nem létezik vagy rossz bejelentkezési adatok adott meg' : 'Szerver hiba';
        this.setState({ error: errorMessage });
        return;
      }
      window.location.href = '/quizMaker'
    
    const Usertoken = await response.json();
    localStorage.setItem('Usertoken', Usertoken.token);
    this.setState({
        emailAddress: '',
        password: '',
        error: ''
        }, () => {
    this.props.UsertokenChange(Usertoken);
    });
    this.timeoutStatus = setTimeout(() => {
        window.location.href = '/quizMaker'
      }, 8000);
    } 

    handleLogOut = async () => {
        const token = localStorage.getItem('Usertoken');
        if( token == null){
            return
        }

        const response = await fetch('http://localhost:3000/authorization/LogOut', {
            method: 'DELETE',
            headers:{
                'Authorization': `Bearer ${token}`
            }
        });

        if (response.ok) {
            this.setState({
              emailAddress: '',
              password: '',
              error: ''
            }, () => {
              localStorage.removeItem('Usertoken');
              this.props.UsertokenChange('');
            });
          }
    }

    componentDidMount() {
        const Usertoken = localStorage.getItem('UserToken');
        if (Usertoken) {
          this.props.UsertokenChange(Usertoken);
        }
      }

      handleUpload = () => {
        window.location.href = '/signUp'
      };


    render(){

        const {Usertoken} = this.props;
        const { emailAddress, password, error } = this.state;
        const logInStatus = Usertoken !== '';

        return <div>

            <div className="tab-content">
                <div id='login'>
                    <h1 id="login_felirat">Log In</h1>
                        
                            <form onSubmit={this.handleLogin}>
                            <div className='form-group'>
                            <label htmlFor="">Email Address: <span className='req'>*</span></label>
                            <input type="email" value={emailAddress} className="form-control" required autoComplete="off" placeholder="Email Address"
                            onChange={(e) => this.setState({ emailAddress: e.target.value })}/>
                            </div>

                            <div className='form-group'>
                            <label htmlFor="">Password: <span className='req'>*</span></label>
                            <input type="password" value={password} className="form-control" required autoComplete="off" placeholder="Password"
                            onChange={(e) => this.setState({ password: e.target.value })}/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email and password with anyone else.</small> <br />
                            </div><br />
            

                        <button type='submit' className='button button-block' id="gomb" onClick={this.handleLogin}>Log In</button><br />

                        <button type='submit' className='button button-block' id="gomb" onClick={this.handleUpload}>Sign Up</button><br />
            
                        </form>
                        
                </div>
            </div>
        </div>

    }
}

