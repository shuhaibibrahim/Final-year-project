import LoginForm from "../components/LoginForm"
import {Link} from "react-router-dom"
import ImgCarousel from "../components/ImgCarousel"
function LoginPage({setUser}) {
  return (
    <div className="bg-slate-200 min-h-screen">
      <nav className="flex w-5/6 ml-auto mr-auto pt-5">
        <Link to="/">HostelCompanion</Link>   
      </nav>
      <div className="flex items-center justify-between m-auto w-5/6" style={{minHeight:"80vh"}}>
        <div>
          <h2 className="font-bold text-3xl">Perfect Solution for Hostel Activities</h2>
          <div className="w-full ml-auto mr-auto bg-green-200">
            <ImgCarousel/>
          </div>
        </div>
        <LoginForm setUser={setUser}/>
      </div>
    </div>
  )
}

export default LoginPage