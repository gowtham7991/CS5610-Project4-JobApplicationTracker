import React from "react";
import logo from "../../../assets/logo.png"
import "./ApplicationItem.css"
import { Link } from "react-router-dom";

const ApplicationItem = ({data}) => {
    return(
        <li className="list-group-item border">
            <div className="row">
                <div className="col-1 p-3">
                    <img src={logo} className="rounded" />
                </div>
                <div className="col">
                    <p className="h6">Job position - title</p>
                    <p>Company Name</p>
                    <small className="text-muted">{`Application submitted ${'Oct 14, 2022'}, ${'9:35'}`}</small>
                    <div>
                        <Link to="/jobs/1111">View job</Link>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default ApplicationItem