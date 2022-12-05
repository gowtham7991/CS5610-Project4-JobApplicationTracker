import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import '../index.css';

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile)
    return (
        profile.map(profile =>
            <div className="container position-relative">
                <div className="row">
                    <div className="col-12">
                        <img src={"../images/" + profile.bannerPicture} width="100%" height="250px" alt=""/>
                        <div className="wd-profile-basic">
                            <img src={"../images/" + profile.profilePicture} height="150px" width="150px"
                                 className="rounded-circle wd-profile-picture bg-white ms-2" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="wd-profile-basic">
                        <span><h2 className="m-0">{profile.firstName} {profile.lastName}</h2>
                        <Link to="/student/edit-profile">
                            <button className="btn btn-outline-primary rounded-pill float-end m-2">Edit Profile
                            </button>
                        </Link></span>
                        <div className="mb-3">{profile.summary}</div>
                        <div className="mb-3">{profile.about}</div>
                        <div className="mb-3">Website: {profile.website}</div>
                        <div className="row mb-3">
                            <div className="col-3">{profile.location}</div>
                            <div className="col-3">
                                <Link to="/student/contact">
                                    <b className="text-primary">contact info</b>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
    )
}

export default ProfileComponent;


