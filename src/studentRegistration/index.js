import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom";
import bgImage from "../assets/signup.png"
import logo from "../assets/logo.png"
import { studentRegistrationThunk } from "../services/registration/registration-thunks";
import { useDispatch } from "react-redux";

const StudentRegisterPage = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [dob, setDOB] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const studentRegisterHandler = e => {
        e.preventDefault();
        const registrationDetails = {
           
            "email": email,
            "password": password,
            "name" : {
                "firstName": firstName,
                "lastName": lastName
            },
            "dob": dob
        }

        console.log(registrationDetails)
        dispatch(studentRegistrationThunk(registrationDetails));
        navigate('/login')
    }
    
    return (
        <div>
            <div className="row m-0 wd-login-page">
                <div className="col-xl-7 col-12 wd-form-container p-0">
                    <div className="wd-logo-container p-2">
                        <Link to="/">
                            <img src={logo} style={{width:"10rem", height:"3rem"}}/>
                        </Link>
                    </div>
                    <div className="wd-login-form">
                        <h1 style={{fontSize:"3rem"}}>Sign up</h1>
                        <div className="mt-4 mb-4"><span style={{fontWeight:"400"}}>Not a student?</span> <Link to="/register/recruiter">Register as recruiter</Link></div>
                        <form onSubmit={studentRegisterHandler}>
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
                                <label for="dob" className="form-label"><b>Date of Birth</b></label>
                                <input type="date" className="form-control" id="dob" 
                                    placeholder="date of birth" value={dob} onChange={(e) => setDOB(e.target.value)}/>
                            </div>
                            <div className="form-submit">
                                <div className="mt-4 ml-2 mr-2">
                                    <button type="submit" className ="btn btn-primary w-100">Sign up</button>
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

export default StudentRegisterPage