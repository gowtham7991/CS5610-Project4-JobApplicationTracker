import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProfileByIdThunk } from "../../../services/profile/profile-thunks";
import profilePic from "../../../assets/profile.png"

const Profile = () => {
    const userDetails = useSelector(state => state.loginData).userDetails
    const data = useSelector(state => state.profileData).profileDetails
    const profileData = data.profile
    const isLoading = useSelector(state => state.profileData).isLoading
    const params = useParams();
    const dispatch = useDispatch()
    const uid = params.hasOwnProperty("uid") ? params.uid : userDetails._id
    useEffect(() => {dispatch(findProfileByIdThunk(uid))}, [])
    console.log(uid)
    
    return(
        <section>
            {
                !isLoading && 
                <div className="container py-5">
                <div className="row">
                <div className="col">
                    <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><Link to="../">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">User Profile</li>
                    </ol>
                    </nav>
                </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-sm-12">
                        <div className="card mb-4">
                        <div className="card-body text-center">
                            <img src={profilePic} alt="avatar"
                            className="rounded-circle img-fluid"/>
                            <h5 className="my-3">{`${data.name.firstName} ${data.name.lastName}`}</h5>
                            <p className="text-muted mb-1">Student</p>
                            <p className="text-muted mb-4">{profileData.address}</p>
                            <div className="d-flex justify-content-center mb-2">
                                <Link to="../edit-profile" className="btn btn-outline-primary">Edit Profile</Link>
                            
                            </div>
                        </div>
                        </div>
                        
                    </div>
                <div className="col-lg-8 col-sm-12">
                    <div className={`d-${uid === userDetails._id ? "" : "none"} card mb-4`}>
                    <div className="card-body">
                        <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0">Full Name</p>
                        </div>
                        <div className="col-sm-9">
                            <p className="text-muted mb-0">{`${data.name.firstName} ${data.name.lastName}`}</p>
                        </div>
                        </div>
                        <hr/>
                        <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0">Email</p>
                        </div>
                        <div className="col-sm-9">
                            <p className="text-muted mb-0">{data.email}</p>
                        </div>
                        </div>
                        <hr/>
                        <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0">Phone</p>
                        </div>
                        <div className="col-sm-9">
                            <p className="text-muted mb-0">{profileData.mobileNumber}</p>
                        </div>
                        </div>
                        <hr/>
                        <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0">Address</p>
                        </div>
                        <div className="col-sm-9">
                            <p className="text-muted mb-0">{profileData.address}</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-body">
                        <p className="h5">Education</p>
                        <p className="h6 text-muted">Northeastern University</p>
                        <p className="h6 text-muted">{profileData.educationLevel}</p>
                        <p className="h6 text-muted">{profileData.major}</p>
                        <p className="h6 text-muted">{`GPA: ${profileData.GPA}`}</p>
                        </div>
                        </div>
                    <div className="row">
                    <div className="col-md-6 col-sm-12">
                            <div className="card mb-4 mb-lg-0">
                                <div className="card-body p-0">
                                    <ul className="list-group list-group-flush rounded-3">
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <i className="fas fa-globe fa-lg text-warning"></i>
                                        <p className="mb-0">{`https://${data.name.firstName.toLowerCase()}${data.name.lastName.toLowerCase()}.com`}</p>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <i className="fab fa-github fa-lg"></i>
                                        <p className="mb-0">{profileData.githubURL}</p>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <i className="fab fa-linkedin fa-lg" ></i>
                                        <p className="mb-0">{profileData.linkedInURL}</p>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <i className="fab fa-twitter fa-lg" ></i>
                                        <p className="mb-0">{`@${data.name.firstName.toLowerCase()}${data.name.lastName.toLowerCase()}`}</p>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <i className="fab fa-facebook-f fa-lg" ></i>
                                        <p className="mb-0">{`${data.name.firstName} ${data.name.lastName}`}</p>
                                    </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="card mb-4 mb-md-0 p-2">
                            <div className="card-body">
                                
                                <p className="h5">Skills</p>
                                
                                <div className="row my-2">
                                    {
                                        profileData.skills.map(skill => 
                                            <span class="col-3 badge rounded-pill bg-light text-dark border m-2">{skill}</span>
                                        )
                                    }                                        

                                    </div>
                            </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                </div>
            </div>
            }
        </section>
    );
}

export default Profile



