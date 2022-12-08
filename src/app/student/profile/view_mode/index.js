import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import '../index.css';
import { findProfileThunk } from "../../../../services/profile/profile-thunks"

const ProfileComponent = () => {
// const ProfileComponent = ({email}) => {
    const user = useSelector(state => state.user)
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(findProfileThunk({email}))
    // }, []);
    return (user.map(user =>
            <div className="container position-relative bg-light pb-2 border">
                <div className="container bg-white border rounded-2">
                    <div className="row">
                        <div className="col-12">
                            <img src={user.profile.banner} width="100%" height="250px" alt=""/>
                            <div className="wd-profile-basic">
                                <img src={user.profile.image} height="150px" width="150px"
                                     className="rounded-circle wd-profile-picture bg-white ms-2" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="wd-profile-basic">
                        <span><h2 className="m-0">{user.name.firstName} {user.name.lastName}</h2>
                        <Link to="/student/edit-profile">
                            <button className="btn btn-outline-primary rounded-pill float-end m-2">Edit Profile
                            </button>
                        </Link></span>
                        <div className="mb-3"><b>LinkedIn:</b> <a
                            href={user.profile.linkedInURL}>{user.profile.linkedInURL}</a>
                            <div className="mb-3"><b>GitHub:</b> <a
                                href={user.profile.githubURL}>{user.profile.githubURL}</a>
                                <div className="mb-3"><b>Website:</b> <a
                                    href={user.profile.website}>{user.profile.website}</a>
                                </div>
                                <div className="mb-3"><b>Location:</b> {user.profile.location}</div>
                                <div className="mb-3"><b>Contact info:</b>
                                    <a href={user.email}> {user.email}</a>
                                    <a href={user.profile.mobileNumber}> {user.profile.mobileNumber}</a>
                                    {user.profile.address}
                                </div>
                            </div>
                        </div>
                        <div className="container bg-white border rounded-2 mt-4">
                            <div className="mb-2 mt-2"><h4>About</h4></div>
                            {user.profile.aboutMe}
                        </div>

                        <div className="container bg-white border rounded-2 mt-4">
                            <div className="mb-2 mt-2"><h4>Education</h4></div>
                            <h5>{user.profile.university}</h5><br/>
                            {user.profile.educationLevel}<br/>
                            {user.profile.major}<br/>
                            {user.profile.department}<br/>
                            {user.profile.graduationDate}<br/>
                            {user.profile.GPA}
                        </div>

                        <div className="container bg-white border rounded-2 mt-4">
                            <div className="mb-2 mt-2"><h4>Work Experience</h4></div>
                            <h5>{user.profile.companyName}</h5><br/>
                            {user.profile.position}<br/>
                            {user.profile.workExperience} years
                        </div>
                        <div className="container bg-white border rounded-2 mt-4">
                            <div className="mb-2 mt-2"><h4>Skills</h4></div>
                            <ul>
                            {/*    user.profile.skills.map({skill => {*/}
                            {/*    return (*/}
                            {/*        <li>{skill}</li>*/}
                            {/*    )*/}
                            {/*}})*/}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}

export default ProfileComponent;


