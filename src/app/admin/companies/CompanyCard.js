import React from "react";
import logo from "../../../assets/google.jpg"
import "./CompanyCard.css"
import { Link } from "react-router-dom";

const CompanyCard = (data) => {
    return(
        <div className="card wd-companycard-container">
            <img className="card-img-top" src={logo} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">Company Name</h5>
                <p className="card-text">Company Description</p>
                <Link to="../postings/company/1" className="btn btn-primary">Check Postings</Link>
            </div>
        </div>
    );
}

export default CompanyCard