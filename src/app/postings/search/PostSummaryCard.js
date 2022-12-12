import React from "react";
import "./PostSummaryCard.css"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletePostingThunk } from "../../../services/postings/postings-thunks";

const PostSummaryCard = (post) => {
    const data = post.data
    const dispatch = useDispatch()
    const deleteJobHandler = () => {
        dispatch(deletePostingThunk(data._id))

    }
    console.log(data)
    return(
        <div class="card">
            <div class="d-flex algin-center card-header p-3">
                <div className="wd-company-logo me-2">
                    <img src={`https://github.com/gowtham7991/CS5610-Project4-JobApplicationTracker/blob/main/src/assets/logos/${data.company.toLowerCase()}.png?raw=true`}/>
                </div>
                <div className="wd-company">
                    <div className="wd-name"><b>{data.company}</b></div>
                    <div className="wd-location">{data.location}</div>
                </div>
            </div>
            <div className="card-body">
                <h5 className="card-title">{data.positionName}</h5>
                <p className="mb-2 card-text">{data.positionType}</p>
                <div className="mb-2">
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <small className="mx-2 text-muted">{`${data.applicants} applicants`}</small>
                </div>
                <div className={`mt-2`}>
                    <Link to={`/app/postings/job/${data._id}/applicants`}>view applicants</Link>
                </div>
                <div className="mt-2">
                    <button className={`btn btn-danger btn-sm p-1`} style={{height:"30px"}} onClick={deleteJobHandler}>Delete Job</button>
                </div>
                <hr />
                <div>
                    <i class="fa fa-star-o mx-3" aria-hidden="true"></i>
                    <i class="fa fa-thumbs-o-down" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    );
}

export default PostSummaryCard;