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
import AllotmentRule from './pages/Admin/AllotmentRule';
import HostelRegistry from './pages/Admin/HostelRegistry';
import CreateApplications from './pages/Admin/CreateApplication';
import SeatMatrix from './pages/Admin/SeatMatrix';
import AdminFaculty from './pages/Admin/AdminFaculty';
import InmateHome from './pages/Inmate/InmateHome';
import CertificatePage from './pages/Inmate/CertificatePage';
import MessPage from './pages/Inmate/MessPage';
import MessSecretary from './pages/Inmate/MessSecretary'
import MessDirector from './pages/Inmate/MessDirector'
import HostelPage from './pages/Inmate/HostelPage';
import { useState } from 'react';
import SignupInvite from './pages/StaffAdvisor/SignupInvite';
import CommonHome from './pages/CommonHome';
function App() {

  const [user, setUser] = useState(null)
  /*
    user={
      username:tve18cs061,
      password:"ppppp",
      ...,
      roles:[hod,warden] //roles can be separately returned as an array
    }

  */
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          {user===null&&(<Route path="/" element={<LandingPage/>}/>)}
          {user==null&&(<Route path="/login" element={<LoginPage setUser={setUser}/>}/>)}
          {user==null&&(<Route path="/signup" element={<SignUpPage/>}/>)}

          {user!=null&&(
          <Route path="/" element={<CommonHome user={user}/>}>
            {/* Admin Routes */}
            <Route path="admin" element={<AdminHome/>}>
              <Route index element={<AdminInmates/>} />
              <Route path="inmates" element={<AdminInmates/>} />
              <Route path="noninmates" element={<AdminNonInmates/>} />
              <Route path="faculty" element={<AdminFaculty/>} />
              <Route path="allotmentrule" element={<AllotmentRule/>} />
              <Route path="applicationpaths" element={<AdminPaths/>} />
              <Route path="hostelregistry" element={<HostelRegistry/>} />
              <Route path="createapplication" element={<CreateApplications/>} />
              <Route path="seatmatrix" element={<SeatMatrix/>} />
            </Route>

            {/* staffadvisor Routes */}
            <Route path="staffadvisor" element={<FacultyHome/>}>
              <Route index element={<StudentsDetails/>}/>
              <Route path="studentsdetails" element={<StudentsDetails/>}/>
              <Route path="signupinvite" element={<SignupInvite/>}/>
              <Route path="hostelallotment" element={<HostelAllotment/>}/>
            </Route>

            {/* hod Routes */}
            <Route path="/hod" element={<FacultyHome/>}>
              <Route index element={<StudentsDetails/>}/>
              <Route path="signupinvite" element={<SignupInvite/>}/>
              <Route path="noninmatecertificate" element={<NonInmateCertificate/>}/>
            </Route>
          </Route>
          )} 

          {/* Student Routes */}
          <Route path="/student" element={<StudentHome/>}>
            <Route index element={<ViewDetails/>}/>
            <Route path="hostelapply" element={<HostelApplication/>}/>
            <Route path="noninmatecertificate" element={<NonInmateCertificate/>}/>
          </Route>

          {/* Inmate Routes */}
          <Route path="/inmate" element={<InmateHome/>}>
            <Route index element={<MessPage/>}/>
            <Route path="mess" element={<MessPage/>}/>
            <Route path="certificates" element={<CertificatePage/>}/>
            <Route path="noninmatecertificate" element={<NonInmateCertificate/>}/>
            <Route path="messsec" element={<MessSecretary/>}/>
            <Route path="messdirector" element={<MessDirector/>}/>
            <Route path="hostel" element={<HostelPage/>}/>
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
