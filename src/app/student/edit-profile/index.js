import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { Link } from "react-router-dom";

const EditProfile = () => {
    const options = [{ label: "Grapes 🍇", value: "grapes" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Strawberry 🍓", value: "strawberry", disabled: true },];
    const [selected, setSelected] = useState([]);

    return(
        <div className="container rounded bg-white mt-5 mb-5">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/app/student">Home</Link></li>
                    <li class="breadcrumb-item"><Link to="/app/jobs/search">Jobs</Link></li>
                    <li class="breadcrumb-item"><Link to="/app/student/applications">Applications</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Edit Profile</li>
                </ol>
            </nav>
            <div className="row text-center mt-2"><p className="h4 text-center">Profile Settings</p></div>
            <div className="row">
                <div className="col-md-3 border-right">
                    <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span className="font-weight-bold">Edogaru</span><span className="text-black-50">edogaru@mail.com.my</span><span> </span></div>
                </div>
                <div className="col-md-5 border-right">
                    <div className="p-3 py-5">
                        <p className="h5">Personal Info</p>                
                        <div className="row my-2">
                            <div className="col-md-6"><label className="labels">Name</label><input type="text" className="form-control" placeholder="first name" value=""/></div>
                            <div className="col-md-6"><label className="labels">Surname</label><input type="text" className="form-control" value="" placeholder="surname"/></div>
                            <div className="col"><label className="labels">About me</label><textarea type="text" className="form-control" placeholder="first name" value=""/></div>
                        </div>
                        <p className="h5">Contact Info</p>
                        <div className="row my-3">
                            <div className="col-md-12"><label className="labels">Mobile Number</label><input type="text" className="form-control" placeholder="enter phone number" value=""/></div>
                            <div className="col-md-12"><label className="labels">Email ID</label><input type="text" className="form-control" placeholder="enter email id" value=""/></div>
                            <div className="col-md-12"><label className="labels">Address Line 1</label><input type="text" className="form-control" placeholder="enter address line 1" value=""/></div>
                        </div>
                        <p className="h5">Education</p>
                        <div className="row my-3">
                            <div className="col-md-12">
                                <label className="labels">Highest Level of Education</label>
                                <select className="form-control">
                                    <option value="">select</option>
                                    <option value="">High School</option>
                                    <option value="">Undergraduate</option>
                                    <option value="">Graduate</option>
                                    <option value="">Ph.d</option>
                                </select>
                            </div>
                            <div className="col-md-12"><label className="labels">Major</label><input type="text" className="form-control" placeholder="education" value=""/></div>
                            <div className="col-md-12"><label className="labels">GPA</label><input type="text" className="form-control" placeholder="education" value=""/></div>
                        </div>
                        <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="p-3 py-5">
                        <p className="h5">Relevant Links</p>
                        <div className="row my-3">
                            <div className="col-md-12"><label className="labels">Linkedin</label><input type="text" className="form-control" placeholder="education" value=""/></div>
                            <div className="col-md-12"><label className="labels">Github</label><input type="text" className="form-control" placeholder="education" value=""/></div>
                            <div className="col-md-12"><label className="labels">Website</label><input type="text" className="form-control" placeholder="education" value=""/></div>
                        </div>
                        
                        <p className="h5">Skills</p>
                        <div className="row my-3">
                            <div className="col-md-12">
                                <MultiSelect
                                    options={options}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                                <p className="h6">Your skills:</p>
                                {
                                    selected.map(skill => 
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


