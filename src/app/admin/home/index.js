import React from "react";
import CompanyList from "../companies";

const Home = () => {
    return (
        <div className="container">
            <h3 className="text-secondary">Listed Companies</h3>
            <CompanyList />
        </div>
        
    );
}

export default Home