import {useState} from "react"
import {Link} from "react-router-dom"
import axios from 'axios'

function LoginForm({setUser, }) {
    
    const [admissionno,setAdmissionNo]=useState("")
    const [username, setUsername] = useState("")
    const [password,setPassword]=useState("")

    const login=()=>{
        console.log("here login")
        axios.post('http://localhost:8080/auth/login', {
                'username': username,
                'password': password
        },{
            withCredentials: true
        })
        .then(function (response) {
            console.log("success" , response.data);
            setUser(response.data)
        })
        .catch(function (error) {
            console.log("FAILED!!! ",error);
        });
    }

    return (
        <div className="flex flex-col bg-white w-5/12 text-left bg-white p-10 rounded-xl">
            <h2 className="font-bold text-2xl">Log In</h2>
            <p>Welcome Back!</p>
            <p>Please enter your details</p>
            <form action=""> 
                <div className="flex flex-col mt-2">
                    <label htmlFor="">Admission Number</label>
                    <input 
                        type="text" 
                        className="border-solid border-2 rounded-lg mt-2 px-2 py-1" 
                        placeholder="Enter your admission number"
                        value={username}
                        onChange={(e)=>{setUsername(e.target.value)}}
                    />
                </div>
                <div className="flex flex-col mt-2">
                    <label htmlFor="">Password</label>
                    <input 
                        type="password" 
                        className="border-solid border-2 rounded-lg mt-2 px-2 py-1" 
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                    />
                </div>
                <div className="flex items-center justify-between mt-2">
                    <p className="text-gray-500">Should contain atleast 8 characters</p>
                    <p className="text-blue-500 underline cursor-pointer">Forgot Password?</p>
                </div>
                <div className="flex items-center justify-center mt-4">
                    <Link to="/" className="rounded-xl text-white py-2 px-4 w-3/6 bg-stone-800">
                        <button 
                            className="w-full h-full"
                            onClick={()=>{
                                // setUser({
                                //     userName:"",
                                //     password:"",
                                //     roles:["hod","warden","staff advisor"]
                                // })
                                login()
                            }}
                        >
                                Login
                        </button>
                    </Link>
                </div>
                <div className="mt-4 flex">
                    <p className="mr-2">Create new account?</p><Link to="/signup">Sign Up</Link>
                </div>
            </form>
        </div>
    )
}

export default LoginForm