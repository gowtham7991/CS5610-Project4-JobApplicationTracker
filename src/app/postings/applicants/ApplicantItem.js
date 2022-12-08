import React from "react";
import logo from "../../../assets/logo.png"
import { Link } from "react-router-dom";
import "./ApplicantItem.css"

const ApplicantItem = ({data}) => {
    return(
        <li className="wd-application-item list-group-item border">
            <div className="row">
                <div className="col-1 p-3">
                    <img src={logo} className="rounded" style={{width:"100%", height:"100%"}}/>
                </div>
                <div className="col">
                    <p className="h6">Student Name</p>
                    <p>Stream</p>
                    <small className="text-muted">{`Application submitted ${'Oct 14, 2022'}, ${'9:35'}`}</small>
                    <div>
                        <Link to="/jobs/1111">View profile</Link>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default ApplicantItem