import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findAllCompaniesThunk } from "../../../services/companies/companies-thunk";
import CompanyCard from "./CompanyCard";
import "./index.css"

const CompanyList = () => {
    const companies = useSelector(state => state.companiesData).companies
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(findAllCompaniesThunk())
    }, [])

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