import React from "react";
import logo from "../../../assets/google.jpg"
import "./CompanyCard.css"
import { Link } from "react-router-dom";

const CompanyCard = (companyData) => {
    const data = companyData.data

    return(
        <div className="card wd-companycard-container">
            <img className="card-img-top" src={logo} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">{data.overview}</p>
                <p className="card-text">{`Jobs Posted: ${data.jobsPosted.length}`}</p>
                <Link to={`../postings/company/${data._id}`} className="btn btn-primary">Check Postings</Link>
            </div>
        </div>
    );
}

export default CompanyCard