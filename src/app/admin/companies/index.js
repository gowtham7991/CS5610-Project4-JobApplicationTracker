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
        <div className="row">
            {companies.map(company => 
                <div className="col-lg-4 col-sm-12 p-2 col-md-6">
                    <CompanyCard data={company}/>
                </div>)
            }
        </div>
    );
}

export default CompanyList