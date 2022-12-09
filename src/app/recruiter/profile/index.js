import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
    return(
        <section>
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
                <div className="col-lg-4">
                    <div className="card mb-4">
                    <div className="card-body text-center">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                        className="rounded-circle img-fluid"/>
                        <h5 className="my-3">John Smith</h5>
                        <p className="text-muted mb-1">Full Stack Developer</p>
                        <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                    </div>
                    </div>
                    
                </div>
                <div className="col-lg-8">
                    <div className="card mb-4">
                    <div className="card-body">
                        <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0">Full Name</p>
                        </div>
                        <div className="col-sm-9">
                            <p className="text-muted mb-0">Johnatan Smith</p>
                        </div>
                        </div>
                        <hr/>
                        <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0">Email</p>
                        </div>
                        <div className="col-sm-9">
                            <p className="text-muted mb-0">example@example.com</p>
                        </div>
                        </div>
                        <hr/>
                        <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0">Phone</p>
                        </div>
                        <div className="col-sm-9">
                            <p className="text-muted mb-0">(097) 234-5678</p>
                        </div>
                        </div>
                        <hr/>
                        <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0">Mobile</p>
                        </div>
                        <div className="col-sm-9">
                            <p className="text-muted mb-0">(098) 765-4321</p>
                        </div>
                        </div>
                        <hr/>
                        <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0">Address</p>
                        </div>
                        <div className="col-sm-9">
                            <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-body">
                            <p className="h5">Company Info</p>
                            <p className="h6 text-muted">Comapny Name</p>
                            <ul className="list-group list-group-flush rounded-3">
                                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                    <i className="fas fa-globe fa-lg text-warning"></i>
                                    <p className="mb-0">https://mdbootstrap.com</p>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                    <i className="fab fa-linkedin fa-lg" ></i>
                                    <p className="mb-0">mdbootstrap</p>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                    <i className="fab fa-twitter fa-lg" ></i>
                                    <p className="mb-0">@mdbootstrap</p>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                    <i className="fab fa-facebook-f fa-lg" ></i>
                                    <p className="mb-0">mdbootstrap</p>
                                </li>
                            </ul>
                        </div>
                        </div>
                </div>
                </div>
            </div>
        </section>
    );
}

export default Profile



