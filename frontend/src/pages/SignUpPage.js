import SignUpForm from "../components/SignUpForm"
import {Link} from "react-router-dom"
function SignUpPage() {
  return (
    <div className="bg-slate-200 min-h-screen">
      <nav className="flex w-5/6 ml-auto mr-auto pt-5">
        <Link to="/">HostelCompanion</Link>   
      </nav>
      <div className="flex items-center justify-between m-auto w-5/6" style={{minHeight:"80vh"}}>
      <div>
        <h2 className="font-bold text-3xl">Perfect Solution for Hostel Activities</h2>
        <img src="https://cdn.britannica.com/30/182830-050-96F2ED76/Chris-Evans-title-character-Joe-Johnston-Captain.jpg" className="w-60" alt="" />
      </div>
      <SignUpForm/>
      </div>
    </div>
  )
}

export default SignUpPage