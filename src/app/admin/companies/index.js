import React from "react";
import CompanyCard from "./CompanyCard";
import "./index.css"

const CompanyList = () => {
    const companies = [1,2,3];
    
    return(
        <div className="grid-container">
            {companies.map(company => 
                <div className="grid-item">
                    <CompanyCard data={company}/>
                </div>)
            }
        </div>
    );
}

export default CompanyList