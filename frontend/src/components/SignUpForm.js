import {Link} from "react-router-dom"
import {useState} from 'react'
function SignUpForm({filledDetails}) {
    const [phoneNo,setphoneNo]=useState("")
    const [password,setPassword]=useState("")
    return (
      <div className="flex flex-col w-5/12 bg-white text-left p-10 rounded-xl">
          <h2 className="font-bold text-2xl">Sign Up</h2>
          <form action="" className="mt-2">
              <div className="flex flex-col mt-2">
                <label htmlFor="">Admission Number</label>
                <input type="text" className="border-solid border-2 rounded-lg mt-2 px-2 py-1" value={filledDetails[2]} placeholder="Enter your admission number" disabled/>
              </div>
              <div className="flex flex-col mt-2">
                <label htmlFor="">Name</label>
                <input type="text" className="border-solid border-2 rounded-lg mt-2 px-2 py-1" value={filledDetails[1]} placeholder="Enter your name" disabled/>
              </div>
              <div className="flex flex-col mt-2">
                <label htmlFor="">Email</label>
                <input type="email" className="border-solid border-2 rounded-lg mt-2 px-2 py-1" value={filledDetails[0]} placeholder="Enter your email" disabled/>
              </div>
              <div className="flex flex-col mt-2">
                <label htmlFor="">Phone Number</label>
                <input type="tel" className="border-solid border-2 rounded-lg mt-2 px-2 py-1" value={phoneNo} onChange={e=>{setphoneNo(e.target.value)}} placeholder="Enter your phone number"/>
              </div>
            <div className="flex flex-col mt-2">
              <label htmlFor="">Password</label>
              <input type="password" className="border-solid border-2 rounded-lg mt-2 px-2 py-1" value={password} onChange={e=>{setPassword(e.target.value)}}placeholder="Enter your password"/>
            </div>
            <div className="mt-2">
                <p className="text-gray-500">Should contain atleast 8 characters</p>
            </div>
            <div className="flex items-center justify-center mt-4">
                <button className="rounded-xl text-white py-2 px-4 w-3/6 bg-stone-800">Sign Up</button>
            </div>
            <div className="mt-4 flex">
                    <p className="mr-2">Already have an account?</p><Link to="/login">Log In</Link>
                </div>
          </form>
      </div>
    )
  }
  
  export default SignUpForm