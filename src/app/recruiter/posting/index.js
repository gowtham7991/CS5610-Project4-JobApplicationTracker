import React from "react";
import "./index.css"
import { MultiSelect } from "react-multi-select-component";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createJobThunk } from "../../../services/jobs/jobs-thunks";
import { useSelector } from "react-redux";

const PostingForm = () => {
    const userDetails = useSelector(state => state.loginData).userDetails
    const skillsList = [
        { label: "Java", value: "Java" },
        { label: "Python", value: "Python" },
        { label: "C", value: "C++" },
        { label: "C", value: "C" },
        { label: "JavaScript", value: "JavaScript" },
        { label: "AWS", value: "AWS" },
        { label: "Linux", value: "Linux" },
        { label: "Docker", value: "Docker" },
        { label: "GCP", value: "GCP" },
        { label: "Django", value: "Django" },
      ];
      
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [term, setTerm] = useState("");
    const [positionType, setPositionType] = useState("");
    const [duration, setDuration] = useState("");
    const [location, setLocation] = useState("");
    const [paymentType, setPaymentType] = useState("");
    const [pay, setPay] = useState("");
    const [deadlineDate, setDeadlineDate] = useState("");
    const [startDate, setStartDate] = useState("");
    const [openings, setOpenings] = useState("");
    const [skills, setSkills] = useState([]);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const createJobHandler = (e) => {
        e.preventDefault();
        const skillsSelected = skills.map(s => s.value)
        const jobDetails = {
            positionName: title,
            description: description,
            term: term,
            positionType: positionType,
            numOpenings: openings,
            location: location,
            paymentType: paymentType,
            deadlineToApply: deadlineDate,
            company: userDetails.profile.companyName,
            skillsReqd: skillsSelected,
            startDate: startDate,
            jobLength: duration,
            pay: pay,
        }
        dispatch(createJobThunk(jobDetails))
        navigate("../../postings")
    }
    return(
        <div className="wd-job-posting container rounded bg-white mt-5">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/app/recruiter">Home</Link></li>
                    <li class="breadcrumb-item"><Link to="/app/postings/">Postings</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Profile</li>
                </ol>
            </nav>
            <p className="h4 mb-5 text-center">Create a new job</p>
            <form>
                <div className="form-group mb-4">
                    <label for="jobtitle" className="form-label"><b>Job Title</b></label>
                    <input type="text" className="form-control" id="jobtitle" 
                        placeholder="Enter job title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>

                <div className="form-group mb-4">
                    <label for="amount" className="form-label"><b>Description</b></label>
                    <textarea className="form-control" id="description" 
                    rows="10" style={{height:"6rem"}}  value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>

                <div className="form-group mb-4">
                    <label for="term" className="form-label"><b>Term</b></label>
                    <select className="form-control" id="term"  value={term} onChange={(e) => setTerm(e.target.value)}>
                        <option selected>select</option>
                        <option>Spring</option>
                        <option>Summer</option>
                        <option>Fall</option>
                        <option>Winter</option>
                    </select>
                </div>   

                <div className="form-group mb-4">
                    <label for="position-type" className="form-label"><b>Position Type</b></label>
                    <select className="form-control" id="position-type"  value={positionType} onChange={(e) => setPositionType(e.target.value)}>
                        <option selected>select</option>
                        <option>Coop</option>
                        <option>Internship</option>
                        <option>FullTime</option>
                    </select>
                </div>
                
                <div className="form-group mb-4">
                    <label for="duration" className="form-label"><b>Duration</b></label>
                    <input type="number" className="form-control" id="duration" 
                        placeholder="Enter job title"  value={duration} onChange={(e) => setDuration(e.target.value)}/>
                </div>

                <div className="form-group mb-4">
                    <label for="location" className="form-label"><b>Location</b></label>
                    <input type="text" className="form-control" id="location" 
                        placeholder="Enter job location"  value={location} onChange={(e) => setLocation(e.target.value)}/>
                </div>

                <div className="form-group mb-4">
                    <label for="payment-type" className="form-label"><b>Payment Type</b></label>
                    <select className="form-control" id="payment-type"  
                        value={paymentType} onChange={(e) => setPaymentType(e.target.value)}>
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
                        <input type="number" className="form-control" id="amount" 
                        aria-label="Amount (to the nearest dollar)"  value={pay} onChange={(e) => setPay(e.target.value)}/>
                        <span className="input-group-text">.00</span>
                    </div>
                </div>

                <div className="form-group mb-4">
                    <label for="application-deadline" className="form-label"><b>Application Deadline</b></label>
                    <input type="date" className="form-control" id="application-deadline" 
                         value={deadlineDate} onChange={(e) => setDeadlineDate(e.target.value)}/>
                </div>

                <div className="form-group mb-4">
                    <label for="start-date" className="form-label"><b>Start Date</b></label>
                    <input type="date" className="form-control" id="start-date"  
                        value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
                </div>



                <div className="form-group mb-4">
                    <label for="numberofopenings" className="form-label"><b>Number of openings</b></label>
                    <input type="number" className="form-control" id="numberofopenings" 
                        placeholder=""  value={openings} onChange={(e) => setOpenings(e.target.value)}/>
                </div>

                <div className="form-group mb-4">
                    <label for="skills-required" className="form-label"><b>Desired Skills</b></label>
                    <MultiSelect
                        options={skillsList}
                        value={skills}
                        onChange={setSkills}
                        labelledBy="Select"
                    />
                </div>
   
                <div className="form-submit">
                    <div className="mt-4 ml-2 mr-2">
                        <button type="submit" className ="btn btn-primary w-100" onClick={(e) => createJobHandler(e)}>Create</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default PostingForm