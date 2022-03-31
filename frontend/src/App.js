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
            <Route index element={<AdminInmates/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
