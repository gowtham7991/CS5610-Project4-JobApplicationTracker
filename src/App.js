import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'font-awesome/css/font-awesome.min.css';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Home from "./home"
import LoginComponent from "./login"
import JobsComponent from "./anonymousJobs"
import StudentRegistration from "./studentRegistration"
import RecruiterRegistration from "./recruiterRegistration"
import JobApp from "./app/index"
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './reducers/login-reducer';
import profileReducer from './reducers/profile-reducer';
import jobsReducer from './reducers/jobs-reducer';
import applicationsReducer from './reducers/applications-reducer';
import postingReducer from "./reducers/postings-reducer"
import companyReducer from "./reducers/companies-reducer"

const store = configureStore(
  {
    reducer : {loginData: loginReducer, profileData: profileReducer, 
                jobsData: jobsReducer, applicationsData: applicationsReducer,
                postingData: postingReducer, companiesData: companyReducer
    }
  }
)

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<LoginComponent/>}/>
                <Route path="/register/student" element={<StudentRegistration/>}/>
                <Route path="/register/recruiter" element={<RecruiterRegistration/>}/>
                <Route path="/jobs/*" element={<JobsComponent/>}/>
                <Route path="/app/*" element={<JobApp />} />
              </Routes>
          </BrowserRouter>
        </div>
    </Provider>
    
  );
}

export default App;
