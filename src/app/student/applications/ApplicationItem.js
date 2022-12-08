import React from "react";
import Google from "../../../assets/google.jpg"
import "./ApplicationItem.css"
import { Link } from "react-router-dom";

const ApplicationItem = ({data}) => {
    return(
        <li className="wd-application-item list-group-item border">
            <div className="row">
                <div className="col-1 p-3 d-flex justify-content-center align-items-center">
                    <img src={Google} className="wd-company-logo rounded" />
                </div>
                <div className="col">
                    <p className="h6">Job position - title</p>
                    <p>Company Name</p>
                    <small className="text-muted">{`Application submitted ${'Oct 14, 2022'}, ${'9:35'}`}</small>
                    <div>
                        <Link to="/app/jobs/detail/1111">View job</Link>
                    </div>
                </div>
                <div className="col-2 d-flex justify-content-center align-items-center">
                    <button className="btn btn-danger rounded-pill">withdraw</button>
                </div>
            </div>
        </li>
    );
}

export default ApplicationItem