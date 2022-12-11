import React from "react";
import t from "../../../../assets/teslabot.jpg"
import "./JobSummaryCard.css"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const JobSummaryCard = (job) => {
    const userDetails = useSelector(state => state.loginData).userDetails
    const data = job.data

    return(
        <div class="card">
            <div class="d-flex algin-center card-header p-3">
                <div className="wd-company-logo me-2">
                    <img src={t}/>
                </div>
                <div className="wd-company">
                    <div className="wd-name"><b>Google</b></div>
                    <div className="wd-location">Boston, MA</div>
                </div>
            </div>
            <div className="card-body">
                <h5 className="card-title">{data.positionName}</h5>
                <p className="mb-2 card-text">{data.positionType}</p>
                <div className="mb-2">
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <small className="mx-2 text-muted">{`${data.applicants.length} applicants`}</small>
                </div>
                <Link to={`detail/${data._id}`}>view job</Link>
                <hr />
                <div>
                    <i class="fa fa-star-o mx-3" aria-hidden="true"></i>
                    <i class="fa fa-thumbs-o-down" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    );
}

export default JobSummaryCard;