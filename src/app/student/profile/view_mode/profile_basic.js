import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import '../index.css';
import { findProfileThunk } from "../../../../services/profile/profile-thunks"

const ProfileComponent = ({email}) => {
    const profile = useSelector(state => state.profile)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findProfileThunk({email}))
    }, []);
    return (
        profile.map(profile =>
            <div className="container position-relative bg-light pb-2 border">
                <div className="container bg-white border rounded-2">
                    <div className="row">
                        <div className="col-12">
                            <img src={profile.bannerPicture} width="100%" height="250px" alt=""/>
                            <div className="wd-profile-basic">
                                <img src={profile.image} height="150px" width="150px"
                                     className="rounded-circle wd-profile-picture bg-white ms-2" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="wd-profile-basic">
                        <span><h2 className="m-0">{profile.name.firstName} {profile.name.lastName}</h2>
                        <Link to="/student/edit-profile">
                            <button className="btn btn-outline-primary rounded-pill float-end m-2">Edit Profile
                            </button>
                        </Link></span>
                        <div className="mb-3">{profile.headline}</div>
                        <div className="mb-3"><b>Website:</b> <a href={profile.linkedInURL}>{profile.linkedInURL}</a>
                        </div>
                        <div className="mb-3"><b>Location:</b> {profile.location}</div>
                        <div className="mb-3"><b>Contact info:</b>
                            <a href={profile.email}> {profile.email}</a>
                            <a href={profile.contactPhone}> {profile.contactPhone}</a>
                        </div>
                        <div className="mb-3">{profile.summary}</div>
                    </div>
                </div>
                <div className="container bg-white border rounded-2 mt-4">
                    <div className="mb-2 mt-2"><h4>About</h4></div>
                    {profile.about}
                </div>

                <div className="container bg-white border rounded-2 mt-4">
                    <div className="mb-2 mt-2"><h4>Education</h4></div>
                    <h5>{profile.university}</h5><br/>
                    {profile.department}<br/>
                    {profile.graduationDate}
                </div>

                <div className="container bg-white border rounded-2 mt-4">
                    <div className="mb-2 mt-2"><h4>Work Experience</h4></div>
                    <h5>{profile.companyName}</h5><br/>
                    {profile.position}<br/>
                    {profile.workExperience} years
                </div>
                <div className="container bg-white border rounded-2 mt-4">
                    <div className="mb-2 mt-2"><h4>Skills</h4></div>
                    <ul>
                        {profile.skills.map(skill => {
                            return (
                                <li>{skill}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    )
}

export default ProfileComponent;


