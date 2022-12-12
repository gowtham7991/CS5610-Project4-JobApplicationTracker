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
            <div className="">
                <div className="row">
                    <div className="col">
                        <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><Link to={`/app/${userDetails.role.toLowerCase()}`}>Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Postings</li>
                        </ol>
                        </nav>
                    </div>
                </div>
                <div className="row">
                    {posts.length > 0 && posts.map(posting => 
                        <div className="col-lg-4 col-sm-12">
                            <Post data={posting}/>
                        </div>)
                    }
                    {
                        posts.length === 0 && <p>No postings found</p>
                    }
                </div>
            </div>
        </div>
    );
}

export default Postings