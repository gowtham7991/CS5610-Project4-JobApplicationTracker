import React from "react";
import ApplicationItem from "./ApplicationItem";

const ApplicationList = () => {
    const applications = [{"_id":1, "av":"aaa"}, {"_id":2, "av":"bbb"}];
    return(
        <div className="container">
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