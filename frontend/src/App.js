import './App.css';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import AdminHome from './pages/Admin/AdminHome';
import AdminInmates from './pages/Admin/AdminInmates';
import AdminNonInmates from './pages/Admin/AdminNonInmates';
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
