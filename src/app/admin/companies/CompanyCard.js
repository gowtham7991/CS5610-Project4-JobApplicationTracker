import React from "react";
import "./CompanyCard.css"
import { Link } from "react-router-dom";

const CompanyCard = (companyData) => {
    const data = companyData.data

    return(
        <div className="card wd-companycard-container">
            <div className="px-3 py-2">
                <img className="card-img-top" src={`https://github.com/gowtham7991/CS5610-Project4-JobApplicationTracker/blob/main/src/assets/logos/${data.logo}?raw=true`} alt="Card image cap"/>

            </div>
            <div className="card-body py-4">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">{data.overview}</p>
                <p className="card-text">{`Jobs Posted: ${data.jobsPosted.length}`}</p>
                <div className="wd-postings-link">
                    <Link to={`../postings/company/${data._id}`}>Check Postings</Link>
                </div>
            </div>
        </div>
    );
}

export default CompanyCard