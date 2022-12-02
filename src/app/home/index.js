import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const App = () => {
    return (
        <h1>
            This is the home page of the app
            <Link to="/login">Login</Link>
            <Link to="/student/register">Register as Student</Link>
            <Link to="/recruiter/register">Resgiter as Recruiter</Link>
        </h1>
    );
}

export default App