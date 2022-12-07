import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
    return(
        <div>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/app/student">Home</Link></li>
                    <li class="breadcrumb-item"><Link to="/app/jobs/search">Jobs</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Profile</li>
                </ol>
            </nav>
            This is the profile page
            <Link to="/app/student/edit-profile">Edit Profile</Link>
        </div>
    );
}

export default Profile