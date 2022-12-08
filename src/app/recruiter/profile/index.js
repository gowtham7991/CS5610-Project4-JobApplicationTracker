import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './index.css';
import { findProfileThunk } from "../../../services/profile/profile-thunks"

const RecruiterProfileComponent = () => {
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
                </div>
                <div className="wd-profile-basic">
                        <span><h2 className="m-0">{user.name.firstName} {user.name.lastName}</h2>
                        <Link to="/student/edit-profile">
                            <button className="btn btn-outline-primary rounded-pill float-end m-2">Edit Profile
                            </button>
                        </Link></span>
                    {user.profile.linkedInURL && <div><b>LinkedIn:</b> <a
                        href={user.profile.linkedInURL}>{user.profile.linkedInURL}</a></div>}
                    <div><b>Website:</b> <a
                        href={user.profile.website}>{user.profile.website}</a>
                    </div>
                    {user.profile.location && <div className="mb-3"><b>Location:</b> {user.profile.location}</div>}
                    <div className="container bg-white border rounded-2 mt-4"><b>Contact info:</b>
                        {user.email && <div>Email: <a href={user.email}> {user.email}</a></div>}
                        {user.profile.mobileNumber &&
                            <div>Phone: <a href={user.profile.mobileNumber}> {user.profile.mobileNumber}</a></div>}
                        {user.profile.address && <div>Address: {user.profile.address}</div>}
                    </div>
                </div>

                <div className="container bg-white border rounded-2 mt-4">
                    <div className="mb-2 mt-2"><h4>About</h4></div>
                    {user.profile.aboutMe}
                </div>
            </div>
        )
    )
}

export default RecruiterProfileComponent;

