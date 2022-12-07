import React from "react";
import ApplicationItem from "./ApplicationItem";
import { Link } from "react-router-dom";
const ApplicationList = () => {
    const applications = [{"_id":1, "av":"aaa"}, {"_id":2, "av":"bbb"}];
    return(
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/app/student/">Home</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Applications</li>
                </ol>
            </nav>
            <ul className="list-group">
            {
                applications.map(application => 
                    <ApplicationItem key={application._id} data={application}/>
                    )
            }
        </ul>
        </div>
    );
}

export default ApplicationList