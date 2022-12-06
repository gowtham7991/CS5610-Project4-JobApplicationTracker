import React from "react";
import ApplicantItem from "./ApplicantItem"

const ApplicationList = () => {
    const applicants = [{"_id":1, "av":"aaa"}, {"_id":2, "av":"bbb"}];
    return(
        <div className="container">
            <ul className="list-group">
            {
                applicants.map(application => 
                    <ApplicantItem key={application._id} data={application}/>
                    )
            }
        </ul>
        </div>
    );
}

export default ApplicationList