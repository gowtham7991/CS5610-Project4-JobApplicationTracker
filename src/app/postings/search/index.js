import React from "react";
import { useSelector } from "react-redux";
import Post from "./PostSummaryCard"

const Postings = () => {
    const posts = useSelector(state => state.postingData).postings
    const isLoading = useSelector(state => state.postingData).isLoading

    return(
        <div className="container">
            <p className="h5">Recent Postings</p>
            <div className="border">
                <div className="grid-container">
                {posts.map(posting => 
                    <div className="grid-item">
                        <Post />
                    </div>)
                }
                </div>
            </div>
        </div>
    );
}

export default Postings