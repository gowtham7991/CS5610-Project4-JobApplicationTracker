import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { findPostingsByCompanyThunk } from "../../../services/postings/postings-thunks";
import Post from "./PostSummaryCard"
import { Link } from "react-router-dom";

const Postings = () => {
    const userDetails = useSelector(state => state.loginData).userDetails
    const posts = useSelector(state => state.postingData).postings
    const isLoading = useSelector(state => state.postingData).isLoading
    const params = useParams()
    const dispatch = useDispatch()
    console.log(userDetails)
    const companyId = params.hasOwnProperty("companyId") ? params.companyId : userDetails.companyId
    useEffect(() => {
        dispatch(findPostingsByCompanyThunk(companyId))
    }, [])

    return(
        <div className="container">
            <p className="h5">Recent Postings</p>
            <div className="border">
                <div className="row">
                    <div className="col">
                        <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><Link to={`../${userDetails.role.toLowerCase()}`}>Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Postings</li>
                        </ol>
                        </nav>
                    </div>
                </div>
                <div className="grid-container">
                    {posts.map(posting => 
                        <div className="grid-item">
                            <Post data={posting}/>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Postings