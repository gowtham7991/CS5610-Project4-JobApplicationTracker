import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import bgImage from "../../../assets/teslabot.jpg"
import "./index.css"
import logo from "../../../assets/logo.png"

const StudentRegisterPage = () => {
    let [firstName, setFirstName] = useState('')
    let [lastName, setLastName] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('');
    let [university, setUniversity] = useState('');

    const studentRegisterHandler = () => {
        const registrationDetails = {
            firstName,
            lastName,
            email,
            password,
            university
        }
        console.log(registrationDetails)
    }
    return (
        <div>
            <div className="row m-0 wd-login-page">
                <div className="col-7 wd-form-container p-0">
                    <div className="wd-logo-container p-2">
                        <img src={logo}/>
                    </div>
                    <div className="wd-login-form">
                        <h1 style={{fontSize:"3rem"}}>Sign up</h1>
                        <div className="mt-4 mb-4"><span style={{fontWeight:"400"}}>Not a student?</span> <Link to="/recruiter/register">Register as recruiter</Link></div>
                        <form>
                            <div className="row">
                                <div class="col form-group mt-4">
                                    <label for="fisrt-name" className="form-label"><b>First Name</b></label>
                                    <input type="text" className="form-control" id="fisrt-name" 
                                        placeholder="Enter email" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                                </div>
                                <div class="col form-group mt-4">
                                    <label for="last-name" className="form-label"><b>Last Name</b></label>
                                    <input type="text" className="form-control" id="last-name"
                                        placeholder="Enter email" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                                </div>
                            </div>
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
                            <div class="form-group mt-4">
                                <label for="university" className="form-label"><b>University</b></label>
                                <select class="form-control" id="university" value={university} onChange={(e) => setUniversity(e.target.value)}>
                                    <option selected>select</option>
                                    <option>Northeastern university</option>
                                    <option>Massachussets Institute of Technology</option>
                                    <option>Boston university</option>
                                    <option>Harvard university</option>
                                    <option>Wentworth Institute of Technology</option>
                                </select>
                            </div>
                            <div className="form-submit">
                                <div className="mt-4 ml-2 mr-2">
                                    <button type="submit" className ="btn btn-primary w-100" onClick={studentRegisterHandler}>Sign up</button>
                                </div>
                                
                            </div>
                        </form>
                        <span className="d-flex justify-content-between my-4">
                            <hr className="w-46 d-inline-block"/> or <hr className="d-inline-block"/>
                        </span>
                        <div className="mt-4 mb-4"><span style={{fontWeight:"400"}}>Already have a JobFinder account?</span> <Link to="/login">Log in</Link></div>
                    </div>
                </div>
                
                <div className="col wd-bgimage p-0">
                    <img src={bgImage} width="100%" height="100%"/>
                </div>
            </div>
        </div>
    );
}

export default StudentRegisterPage