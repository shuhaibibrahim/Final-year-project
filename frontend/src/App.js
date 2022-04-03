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
