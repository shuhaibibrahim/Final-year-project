import './App.css';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import StudentHome from './pages/Student/StudentHome';
import FacultyHome from './pages/StaffAdvisor/FacultyHome';
import StudentsDetails from './pages/StaffAdvisor/StudentsDetails';
import HostelAllotment from './pages/StaffAdvisor/SignupInvite';
import AdminHome from './pages/Admin/AdminHome';
import AdminInmates from './pages/Admin/AdminInmates';
import ViewDetails from './pages/Student/ViewDetails';
import HostelApplication from './pages/Student/HostelApplication';
import NonInmateCertificate from './pages/Student/NonInmateCertificate';
import SignupInvite from './pages/StaffAdvisor/SignupInvite';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/signup" element={<SignUpPage/>}/>

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminHome/>}>
            <Route index element={<AdminInmates/>} />
            <Route path="inmates" element={<AdminInmates/>} />
          </Route>
          {/* Student Routes */}
          <Route path="/student" element={<StudentHome/>}>
            <Route index element={<ViewDetails/>}/>
            <Route path="hostelapply" element={<HostelApplication/>}/>
            <Route path="noninmatecertificate" element={<NonInmateCertificate/>}/>
          </Route>
          {/* staffadvisor Routes */}
          <Route path="/staffadvisor" element={<FacultyHome/>}>
            <Route index element={<StudentsDetails/>}/>
            <Route path="studentsdetails" element={<StudentsDetails/>}/>
            <Route path="signupinvite" element={<SignupInvite/>}/>
            <Route path="noninmatecertificate" element={<NonInmateCertificate/>}/>
          </Route>
          {/* hod Routes */}
          <Route path="/hod" element={<FacultyHome/>}>
            <Route index element={<StudentsDetails/>}/>
            <Route path="signupinvite" element={<SignupInvite/>}/>
            <Route path="noninmatecertificate" element={<NonInmateCertificate/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
