import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { saveProfileThunk } from "../../../services/profile/profile-thunks";

const EditProfile = () => {
    const skillList = [{ label: "Grapes 🍇", value: "grapes" },
        { label: "Mango 🥭", value: "mango" },
        { label: "Strawberry 🍓", value: "strawberry", disabled: true },];
    const [skills, setSkills] = useState([]);
    const [firstName, setFirstName] = useState([]);
    const [lastName, setLastName] = useState([]);
    const [aboutMe, setAboutMe] = useState([]);
    const [mobileNumber, setMobileNumber] = useState([]);
    const [graduationDate, setGraduationDate] = useState([]);
    const [address, setAddress] = useState([]);
    const [educationLevel, setEducationLevel] = useState([]);
    const [major, setMajor] = useState([]);
    const [GPA, setGPA] = useState([]);
    const [linkedInURL, setLikedinURL] = useState([]);
    const [githubURL, setGithubURL] = useState([]);
    const [website, setWesbite] = useState([]);
    const userDetails = useSelector(state => state.loginData).userDetails
    const dispatch = useDispatch()
    const saveProfileHandler = () => {
        const skillsSelected = skills.map(skill => skill.value)
        const profileDetails = {   
                "name": {
                    "firstName": firstName,
                    "lastName": lastName 
                },
                "uid" : userDetails.uid,
                "profile": {
                "aboutMe": aboutMe,
                "linkedInURL": linkedInURL,
                "githubURL": githubURL,
                "skills": skillsSelected,
                "website": website,
                "mobileNumber": Number(mobileNumber),
                "address": address,
                "educationLevel": educationLevel,
                "major": major,
                "GPA": GPA
            }
        }

        dispatch(saveProfileThunk(profileDetails))
    }

    return(
        <div className="container rounded bg-white mt-5 mb-5">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/app/student">Home</Link></li>
                    <li class="breadcrumb-item"><Link to="/app/jobs/">Jobs</Link></li>
                    <li class="breadcrumb-item"><Link to="../profile">Profile</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Edit Profile</li>
                </ol>
            </nav>
            <div className="row text-center mt-2"><p className="h4 text-center">Profile Settings</p></div>
            <div className="row">
                <div className="col-md-3 border-right">
                    <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span className="font-weight-bold">{`${userDetails.name.firstName} ${userDetails.name.lastName}`}</span><span className="text-black-50">{userDetails.email}</span><span> </span></div>
                </div>
                <div className="col-md-5 border-right">
                    <div className="p-3 py-5">
                        <p className="h5">Personal Info</p>                
                        <div className="row my-2">
                            <div className="col-md-6"><label className="labels">Firstname</label><input type="text" className="form-control" placeholder="enter first name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/></div>
                            <div className="col-md-6"><label className="labels">Lastname</label><input type="text" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="enter last name"/></div>
                            <div className="col"><label className="labels">About me</label><textarea type="text" className="form-control" placeholder="enter about me" value={aboutMe} onChange={(e) => setAboutMe(e.target.value)}/></div>
                        </div>
                        <p className="h5">Contact Info</p>
                        <div className="row my-3">
                            <div className="col-md-12"><label className="labels">Mobile Number</label><input type="text" className="form-control" placeholder="enter phone number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)}/></div>
                            <div className="col-md-12"><label className="labels">Email ID</label><input type="text" className="form-control" placeholder="enter email id"/></div>
                            <div className="col-md-12"><label className="labels">Address Line 1</label><input type="text" className="form-control" placeholder="enter address line" value={address} onChange={(e) => setAddress(e.target.value)}/></div>
                        </div>
                        <p className="h5">Education</p>
                        <div className="row my-3">
                            <div className="col-md-12">
                                <label className="labels">Highest Level of Education</label>
                                <select className="form-control" value={educationLevel} onChange={(e) => setEducationLevel(e.target.value)}>
                                    <option value="">select</option>
                                    <option value="High School">High School</option>
                                    <option value="Undergraduate">Undergraduate</option>
                                    <option value="Graduate">Graduate</option>
                                    <option value="Ph.d">Ph.d</option>
                                </select>
                            </div>
                            <div className="col-md-12"><label className="labels">Major</label><input type="text" className="form-control" placeholder="major"  value={major} onChange={(e) => setMajor(e.target.value)}/></div>
                            <div className="col-md-12"><label className="labels">GPA</label><input type="number" className="form-control" placeholder="GPA"  value={GPA} onChange={(e) => setGPA(e.target.value)}/></div>
                        </div>
                        <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button" onClick={saveProfileHandler}>Save Profile</button></div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="p-3 py-5">
                        <p className="h5">Relevant Links</p>
                        <div className="row my-3">
                            <div className="col-md-12"><label className="labels">Linkedin</label><input type="text" className="form-control" placeholder="linkedin url" value={linkedInURL} onChange={(e) => setLikedinURL(e.target.value)}/></div>
                            <div className="col-md-12"><label className="labels">Github</label><input type="text" className="form-control" placeholder="github url"  value={githubURL} onChange={(e) => setGithubURL(e.target.value)}/></div>
                            <div className="col-md-12"><label className="labels">Website</label><input type="text" className="form-control" placeholder="website"  value={website} onChange={(e) => setWesbite(e.target.value)}/></div>
                        </div>
                        
                        <p className="h5">Skills</p>
                        <div className="row my-3">
                            <div className="col-md-12">
                                <MultiSelect
                                    options={skillList}
                                    value={skills}
                                    onChange={setSkills}
                                    labelledBy="Select"
                                />
                                <p className="h6">Your skills:</p>
                                {
                                    skills.map(skill => 
                                        <li>{skill.label}</li>
                                        )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default EditProfile;


