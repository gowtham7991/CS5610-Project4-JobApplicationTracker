import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import '../index.css';
import ProfileContact from "./contact_info";

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile)
    return (
        profile.map(profile =>
            <div>
                <div className="row">
                    <div className="col-12">
                        <img src={"../images/" + profile.bannerPicture} width="100%" height="250px" alt=""/>
                        <img src={"../images/" + profile.profilePicture} height="100px" width="100px"
                             className="rounded-circle wd-profile-picture bg-white ms-2" alt=""/>
                        <Link to="/student/edit-profile">
                            <button className="btn btn-outline-primary rounded-pill float-end m-2">Edit Profile</button>
                        </Link>
                    </div>
                </div>

                <h2 className="m-0">{profile.firstName} {profile.lastName}</h2>
                <div className="mb-3">{profile.summary}</div>
                <div className="mb-3">{profile.about}</div>
                <div className="mb-3">Website: {profile.website}</div>
                <div className="row mb-3">
                    <div className="col-3">{profile.location}</div>
                    <div className="col-3"><ProfileContact/></div>
                </div>
            </div>)
    )
}

export default ProfileComponent;


