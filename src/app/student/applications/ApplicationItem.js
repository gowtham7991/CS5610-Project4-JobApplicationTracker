import React from "react";
import "./ApplicationItem.css"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { withdrawApplicationThunk } from "../../../services/applications/applications-thunk";

const ApplicationItem = ({data}) => {
    const dispatch = useDispatch()
    const withdrawApplicationHandler = () => {
        dispatch(withdrawApplicationThunk(data._id))
    }
    return(
        <li className="wd-application-item list-group-item border">
            <div className="row">
                <div className="col-1 p-3 d-flex justify-content-center align-items-center">
                    <img src={`https://github.com/gowtham7991/CS5610-Project4-JobApplicationTracker/blob/main/src/assets/logos/${data.job.company.toLowerCase()}.png?raw=true`} className="wd-company-logo rounded" />
                </div>
                <div className="col">
                    <p className="h6">{data.job.positionName}</p>
                    <p>{data.job.company}</p>
                    <small className="text-muted">{`Application submitted ${'Oct 14, 2022'}, ${'9:35'}`}</small>
                    <div>
                        <Link to={`/app/jobs/detail/${data.job._id}`}>View job</Link>
                    </div>
                </div>
                <div className="col-2 d-flex justify-content-center align-items-center">
                    <button className="btn btn-danger rounded-pill" onClick={withdrawApplicationHandler}>withdraw</button>
                </div>
            </div>
        </li>
    );
}

export default ApplicationItem