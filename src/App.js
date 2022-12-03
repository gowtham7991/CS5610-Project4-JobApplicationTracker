import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import StudentComponent from "./app/student"
import RecruiterComponent from "./app/recruiter"
import AdminComponent from "./app/admin"
import Home from "./app/home/index"
import LoginComponent from "./app/login"

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/student/*"
                element={<StudentComponent/>}/>
          <Route path="/recruiter/*"
                element={<RecruiterComponent/>}/>
          <Route path="/admin/*" element={<AdminComponent/>}/>
          <Route path="/login" element={<LoginComponent/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
