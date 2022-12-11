import React from "react";
import t from "../../../../assets/teslabot.jpg"
import "./ExternalJobSummaryCard.css";
import { useSelector } from "react-redux";

const ExternalJobSummaryCard = ({job}) => {
    const userDetails = useSelector(state => state.loginData).userDetails
    console.log(userDetails.role)
    console.log({job})
    return (
        <div className="grid-item">
            <div class="card">
                <div class="d-flex algin-center card-header p-3">
                    <div className="wd-company-logo me-2">
                        <img src={t}/>
                    </div>
                    <div className="wd-company">
                        <div className="wd-name"><b>{job.company.display_name}</b></div>
                        <div className="wd-location">{job.location.display_name}</div>
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{job.title}</h5>
                    <p className="mb-2 card-text">Co-op</p>
                    <div className="mb-2">
                        <i className="fa fa-user" aria-hidden="true"></i>
                        <small
                            className="mx-2 text-muted">{Math.floor(Math.random() * (50000 - 10 + 1)) + 10} applicants</small>
                    </div>
                    <a href={job.redirect_url}>view job</a>
                    <hr/>
                    <div>
                        <i class="fa fa-star-o mx-3" aria-hidden="true"></i>
                        <i class="fa fa-thumbs-o-down" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExternalJobSummaryCard;