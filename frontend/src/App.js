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
import HostelAllotment from './pages/StaffAdvisor/HostelAllotment';
import AdminHome from './pages/Admin/AdminHome';
import AdminInmates from './pages/Admin/AdminInmates';
import AdminNonInmates from './pages/Admin/AdminNonInmates';
import ViewDetails from './pages/Student/ViewDetails';
import HostelApplication from './pages/Student/HostelApplication';
import NonInmateCertificate from './pages/Student/NonInmateCertificate';
import AdminPaths from './pages/Admin/AdminPaths';
import HostelAllotmentHod from './pages/HOD/HostelAllotmentHod';
import StudentsDetailsHod from './pages/HOD/StudentsDetailsHod';
import HodHome from './pages/HOD/HODHome';
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
            <Route path="noninmates" element={<AdminNonInmates/>} />
            <Route path="paths" element={<AdminPaths/>} />
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
            <Route path="hostelallotment" element={<HostelAllotment/>}/>
            <Route path="noninmatecertificate" element={<NonInmateCertificate/>}/>
          </Route>
          {/* hod Routes */}
          <Route path="/hod" element={<HodHome/>}>
            <Route index element={<StudentsDetailsHod/>}/>
            <Route path="hostelallotment" element={<HostelAllotmentHod/>}/>
            <Route path="noninmatecertificate" element={<NonInmateCertificate/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
