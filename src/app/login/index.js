import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom";
import bgImage from "../../assets/teslabot.jpg"
import "./index.css"
import logo from "../../assets/logo.png"

const LoginPage = () => {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let navigate = useNavigate();

    const loginHandler = () => {
        const loginDetails = {
            email : email,
            password  :password
        }
        console.log(loginDetails)
        let newPath = '/student/home'
        navigate(newPath)
    }

    return (
        <div>
            <div className="row m-0 wd-login-page">
                <div className="col-4 wd-form-container p-0">
                    <div className="wd-logo-container p-2">
                        <img src={logo}/>
                    </div>
                    <div className="wd-login-form p-5">
                        <h1 style={{fontSize:"3rem"}}>Log in</h1>
                        <div className="mt-4 mb-4"><span style={{fontWeight:"400"}}>Need a JobFinder account?</span> <Link to="/student/register">Sign up</Link></div>
                        <span className="d-flex justify-content-between">
                            <hr className="w-46 d-inline-block"/> or <hr className="d-inline-block"/>
                        </span>
                        <form>
                            <div class="form-group mt-4">
                                <label for="exampleInputEmail1" className="form-label"><b>Email address</b></label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                                    placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div class="form-group mt-4">
                                <label for="exampleInputPassword1" className="form-label"><b>Password</b></label>
                                <input type="password" className="form-control" id="exampleInputPassword1" 
                                    placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <div className="form-submit">
                                <div className="mt-4 ml-2 mr-2">
                                    <button type="submit" className ="btn btn-primary w-100" onClick={loginHandler}>Log In</button>
                                </div>
                                
                            </div>
                        </form>
                        <hr />
                        <div className="mt-4 mb-4"><span style={{fontWeight:"400"}}>Forgor your password?</span> <Link to="/login">Recover password</Link></div>
                    </div>
                </div>
                
                <div className="col wd-bgimage p-0">
                    <img src={bgImage} width="100%" height="100%"/>
                </div>
            </div>
        </div>
    );
}

export default LoginPage