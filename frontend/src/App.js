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
            <Route path="faculty" element={<AdminFaculty/>} />
            <Route path="allotmentrule" element={<AllotmentRule/>} />
            <Route path="applicationpaths" element={<AdminPaths/>} />
            <Route path="hostelregistry" element={<HostelRegistry/>} />
            <Route path="createapplication" element={<CreateApplications/>} />
            <Route path="seatmatrix" element={<SeatMatrix/>} />
          </Route>
          {/* Student Routes */}
          <Route path="/student" element={<StudentHome/>}>
            <Route index element={<ViewDetails/>}/>
            <Route path="hostelapply" element={<HostelApplication/>}/>
            <Route path="noninmatecertificate" element={<NonInmateCertificate/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
