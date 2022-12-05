import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'font-awesome/css/font-awesome.min.css';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import StudentComponent from "./app/student"
import RecruiterComponent from "./app/recruiter"
import AdminComponent from "./app/admin"
import Home from "./app/home/index"
import LoginComponent from "./app/login"
import JobsComponent from "./app/jobs"

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/student/*"
                element={<StudentComponent/>}/>
          <Route path="/recruiter/*"
                element={<RecruiterComponent/>}/>
          <Route path="/admin/*" element={<AdminComponent/>}/>
          <Route path="/login" element={<LoginComponent/>}/>
          <Route path="/jobs/*" element={<JobsComponent/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
