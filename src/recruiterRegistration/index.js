import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom";
import bgImage from "../assets/signup.png"
import "./index.css"
import logo from "../assets/logo.png"
import { recruiterRegistrationThunk } from "../services/registration/registration-thunks";
import { useDispatch } from "react-redux";

const RecuiterRegisterPage = () => {
    let [firstName, setFirstName] = useState('')
    let [lastName, setLastName] = useState('')
    let [linkedinURL, setLinkedinURL] = useState('')
    let [personalEmail, setPersonalEmail] = useState('')
    let [workEmail, setWorkEmail] = useState('')
    let [password, setPassword] = useState('');
    let [company, setCompany] = useState('');
    let [role, setRole] = useState('');
    let [dob, setDOB] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const recruiterRegisterHandler = () => {
        const registrationDetails = {
            "name": {
                "firstName" : firstName,
                "lastName" : lastName,
            },
            "email" : personalEmail,
            "password": password,
            "dob" : dob,
            profile :{
                "linkedInURL": linkedinURL,
                "position": role,
                "companyName": company
            },
        }

        dispatch(recruiterRegistrationThunk(registrationDetails));
        navigate('/login');
    }
    return (
        <div>
            <div className="row wd-login-page m-0">
                <div className="col-xl-7 col-12 wd-form-container p-0">
                <div className="wd-logo-container p-2">
                    <Link to="/">
                            <img src={logo} style={{width:"10rem", height:"3rem"}}/>
                        </Link>
                    </div>
                    <div className="wd-login-form">
                        <h1 style={{fontSize:"3rem"}}>Sign up</h1>
                        <div className="mt-4 mb-4"><span style={{fontWeight:"400"}}>Not a recruiter?</span> <Link to="/register/student">Register as student</Link></div>
                        
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
                                <label for="linkedin-url" className="form-label"><b>Linkedin URL</b></label>
                                <input type="text" className="form-control" id="linkedin-url" aria-describedby="emailHelp" 
                                    placeholder="Enter your linkedin url" value={linkedinURL} onChange={(e) => setLinkedinURL(e.target.value)}/>
                            </div>
                            <div class="form-group mt-4">
                                <label for="personal-email" className="form-label"><b>Personal Email</b></label>
                                <input type="email" className="form-control" id="personal-email" aria-describedby="emailHelp" 
                                    placeholder="Enter email" value={personalEmail} onChange={(e) => setPersonalEmail(e.target.value)}/>
                            </div>
                            <div class="form-group mt-4">
                                <label for="work-email" className="form-label"><b>Work Email <small className="text-muted">(opt.)</small></b></label>
                                <input type="email" className="form-control" id="work-email" aria-describedby="emailHelp" 
                                    placeholder="Enter email" value={workEmail} onChange={(e) => setWorkEmail(e.target.value)}/>
                            </div>
                            <div class="form-group mt-4">
                                <label for="exampleInputPassword1" className="form-label"><b>Password</b></label>
                                <input type="password" className="form-control" id="exampleInputPassword1" 
                                    placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <div class="form-group mt-4">
                                <label for="company" className="form-label"><b>Company</b></label>
                                <select class="form-control" id="company" value={company} onChange={(e) => setCompany(e.target.value)}>
                                    <option selected>select</option>
                                    <option>Google</option>
                                    <option>Amazon</option>
                                    <option>Meta</option>
                                    <option>Apple</option>
                                    <option>Netflix</option>
                                    <option>Tesla</option>
                                </select>
                            </div>
                            <div class="form-group mt-4">
                                <label for="role" className="form-label"><b>Role</b></label>
                                <select class="form-control" id="role" value={role} onChange={(e) => setRole(e.target.value)}>
                                    <option selected>select</option>
                                    <option>University Recruiter</option>
                                    <option>Recruiter</option>
                                    <option>Hiring Manager</option>
                                    <option>Talent Lead</option>
                                </select>
                            </div>
                            <div class="form-group mt-4">
                                <label for="dob" className="form-label"><b>Date of Birth</b></label>
                                <input type="date" className="form-control" id="dob" 
                                    placeholder="date of birth" value={dob} onChange={(e) => setDOB(e.target.value)}/>
                            </div>
                            <div className="form-submit">
                                <div className="mt-4 ml-2 mr-2">
                                    <button type="submit" className ="btn btn-primary w-100" onClick={recruiterRegisterHandler}>Sign up</button>
                                </div>
                                
                            </div>
                        </form>

                        <span className="d-flex justify-content-between my-4">
                            <hr className="w-46 d-inline-block"/> or <hr className="d-inline-block"/>
                        </span>
                        <div className="mt-4 mb-4"><span style={{fontWeight:"400"}}>Already have a JobFinder account?</span> <Link to="/login">Log in</Link></div>
                    </div>
                </div>
                
                <div className="col wd-bgimage d-none d-xl-block p-0">
                    <img src={bgImage} width="100%" height="100%"/>
                </div>
            </div>
        </div>
    );
}

export default RecuiterRegisterPage