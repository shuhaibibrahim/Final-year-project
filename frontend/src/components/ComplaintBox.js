import axios from 'axios';
import {useState} from 'react'
export default function ComplaintBox(){
    const [complaint,setComplaint]=useState("")
    const submitComplaint =(e)=>{
        e.preventDefault();
        axios.post('http://localhost:8080/inmate/complaintbox',{
            complaint:complaint
        })
    }
    return(
        <div className="w-11/12">
            <h2 className="font-bold text-black mb-3">Your Room No: B214</h2>
            <form action="" onSubmit={submitComplaint}>
                <div className="grid grid-cols-2 gap-y-4 w-6/12">
                <label htmlFor="complaint">Complaint:</label>
                <textarea name="complaint" id="complaint" rows="5" placeholder="Enter your complaint" className="border-solid border-2 rounded-lg ml-3 p-1" value={complaint} onChange={(e)=>{setComplaint(e.target.value)}} required></textarea>
                </div>
                <div className="w-full flex items-end justify-end mt-5">
                    <button type="submit" className="ml-auto p-3 bg-stone-800 text-white rounded-xl">Submit Complaint</button>
                </div>
            </form>
        </div>
    )
}