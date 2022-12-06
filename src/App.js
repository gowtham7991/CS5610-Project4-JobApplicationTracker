import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'font-awesome/css/font-awesome.min.css';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Home from "./home"
import LoginComponent from "./login"
import JobsComponent from "./app/jobs"
import StudentRegistration from "./studentRegistration"
import RecruiterRegistration from "./recruiterRegistration"
import JobApp from "./app/index"

function App() {
  return (
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
  );
}

export default App;
