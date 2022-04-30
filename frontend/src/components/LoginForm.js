import {useState} from "react"
import {Link} from "react-router-dom"
function LoginForm({setUser}) {
    
    const [admissionno,setAdmissionNo]=useState("")
    const [password,setPassword]=useState("")

    return (
        <div className="flex flex-col bg-white w-5/12 text-left bg-white p-10 rounded-xl">
            <h2 className="font-bold text-2xl">Log In</h2>
            <p>Welcome Back!</p>
            <p>Please enter your details</p>
            <form action=""> 
                <div className="flex flex-col mt-2">
                    <label htmlFor="">Admission Number</label>
                    <input type="text" className="border-solid border-2 rounded-lg mt-2 px-2 py-1" placeholder="Enter your admission number"/>
                </div>
                <div className="flex flex-col mt-2">
                    <label htmlFor="">Password</label>
                    <input type="password" className="border-solid border-2 rounded-lg mt-2 px-2 py-1" placeholder="Enter your password"/>
                </div>
                <div className="flex items-center justify-between mt-2">
                    <p className="text-gray-500">Should contain atleast 8 characters</p>
                    <p className="text-blue-500 underline cursor-pointer">Forgot Password?</p>
                </div>
                <div className="flex items-center justify-center mt-4">
                    <button 
                        className="rounded-xl text-white py-2 px-4 w-3/6 bg-stone-800"
                        onClick={()=>{
                            setUser({
                                userName:"tve18cs061",
                                password:"ppppp",
                                roles:["hod","warden","staff advisor"]
                            })
                        }}
                    >
                            Login
                    </button>
                </div>
                <div className="mt-4 flex">
                    <p className="mr-2">Create new account?</p><Link to="/signup">Sign Up</Link>
                </div>
            </form>
        </div>
    )
}

export default LoginForm