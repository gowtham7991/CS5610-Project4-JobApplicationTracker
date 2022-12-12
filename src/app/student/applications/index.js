import React, { useEffect } from "react";
import ApplicationItem from "./ApplicationItem";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findApplicationsThunk } from "../../../services/applications/applications-thunk";
const ApplicationList = () => {
    const userDetails = useSelector(state => state.loginData).userDetails
    const applications = useSelector(state => state.applicationsData).applications
    const isLoading = useSelector(state => state.applicationsData).isLoading

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findApplicationsThunk(userDetails._id))
    }, [])
    console.log(applications)
    
    return(
        <div className="container">
            {
                !isLoading &&
                <div>
                    <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/app/student/">Home</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Applications</li>
                </ol>
            </nav>
            <ul className="list-group">
            {
                applications.length > 0 && applications.map(application => 
                    <ApplicationItem key={application._id} data={application}/>
                    )
            }
            {
                applications.length === 0 && <p>no applications found</p>
            }
        </ul>
                </div>
            }
        </div>
    );
}

export default ApplicationList