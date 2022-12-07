import React from "react";
import "./index.css"
import { MultiSelect } from "react-multi-select-component";
import { useState } from "react";
import { Link } from "react-router-dom";

const PostingForm = () => {
    const options = [
        { label: "Grapes 🍇", value: "grapes" },
        { label: "Mango 🥭", value: "mango" },
        { label: "Strawberry 🍓", value: "strawberry", disabled: true },
      ];
      
    
    const [selected, setSelected] = useState([]);

    return(
        <div className="wd-job-posting container rounded bg-white mt-5">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/app/recruiter">Home</Link></li>
                    <li class="breadcrumb-item"><Link to="/app/jobs/">Postings</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Profile</li>
                </ol>
            </nav>
            <p className="h4 mb-5 text-center">Create a new job</p>
            <form>
                <div className="form-group mb-4">
                    <label for="jobtitle" className="form-label"><b>Job Title</b></label>
                    <input type="text" className="form-control" id="jobtitle" 
                        placeholder="Enter job title" />
                </div>

                <div className="form-group mb-4">
                    <label for="amount" className="form-label"><b>Description</b></label>
                    <textarea className="form-control" id="description" rows="10" style={{height:"6rem"}}></textarea>
                </div>

                <div className="form-group mb-4">
                    <label for="term" className="form-label"><b>Term</b></label>
                    <select className="form-control" id="term" >
                        <option selected>select</option>
                        <option>Spring 23</option>
                        <option>Summer 23</option>
                        <option>Fall 23</option>
                    </select>
                </div>   

                <div className="form-group mb-4">
                    <label for="position-type" className="form-label"><b>Position Type</b></label>
                    <select className="form-control" id="position-type" >
                        <option selected>select</option>
                        <option>Co-op</option>
                        <option>Internship</option>
                        <option>Fulltime</option>
                    </select>
                </div>
                
                <div className="form-group mb-4">
                    <label for="duration" className="form-label"><b>Duration</b></label>
                    <input type="text" className="form-control" id="duration" 
                        placeholder="Enter job title" />
                </div>

                <div className="form-group mb-4">
                    <label for="location" className="form-label"><b>Location</b></label>
                    <input type="text" className="form-control" id="location" 
                        placeholder="Enter job location" />
                </div>

                <div className="form-group mb-4">
                    <label for="payment-type" className="form-label"><b>Payment Type</b></label>
                    <select className="form-control" id="payment-type" >
                        <option selected>select</option>
                        <option>Hourly</option>
                        <option>Weekly</option>
                        <option>Bi-weekly</option>
                        <option>Monthly</option>
                    </select>
                </div>
                
                <div className="form-group mb-4">
                    <label for="amount" className="form-label"><b>Pay</b></label>
                    <div className="d-flex">
                        <span className="input-group-text">$</span>
                        <input type="text" className="form-control" id="amount" aria-label="Amount (to the nearest dollar)"/>
                        <span className="input-group-text">.00</span>
                    </div>
                </div>

                <div className="form-group mb-4">
                    <label for="application-deadline" className="form-label"><b>Application Deadline</b></label>
                    <input type="date" className="form-control" id="application-deadline" 
                        placeholder="Enter job title" />
                </div>

                <div className="form-group mb-4">
                    <label for="start-date" className="form-label"><b>Start Date</b></label>
                    <input type="date" className="form-control" id="start-date" />
                </div>



                <div className="form-group mb-4">
                    <label for="numberofopenings" className="form-label"><b>Number of openings</b></label>
                    <input type="text" className="form-control" id="numberofopenings" 
                        placeholder="" />
                </div>

                <div className="form-group mb-4">
                    <label for="skills-required" className="form-label"><b>Desired Skills</b></label>
                    <MultiSelect
                        options={options}
                        value={selected}
                        onChange={setSelected}
                        labelledBy="Select"
                    />
                </div>
   
                <div className="form-submit">
                    <div className="mt-4 ml-2 mr-2">
                        <button type="submit" className ="btn btn-primary w-100" >Create</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default PostingForm