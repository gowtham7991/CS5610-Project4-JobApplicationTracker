import React from "react";
import Post from "./PostSummaryCard"

const Postings = () => {
    const posts = [1,2,3]

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