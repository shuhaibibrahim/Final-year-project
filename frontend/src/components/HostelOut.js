import {useState} from 'react'
export default function HostelOut(){
    const[fromDate,setFromDate]=useState("")
    const[toDate,setToDate]=useState("")
    const[reason,setReason]=useState("")
    return(
        <div className='w-11/12'>
        <div className='grid grid-cols-2 w-6/12 gap-4 mb-3'>
            <label htmlFor="">From Date:</label>  <input type="date" className="border-solid border-2 rounded-lg ml-3 p-1" value={fromDate} onChange={(e)=>{setFromDate(e.target.value)}} required/>
            <label htmlFor="">To Date:</label> <input type="date" className="border-solid border-2 rounded-lg ml-3 p-1" value={toDate} onChange={(e)=>{setToDate(e.target.value)}} required/>
            <label htmlFor="">Reason:</label> <textarea className="border-solid border-2 rounded-lg ml-3 p-1" placeholder="Type something..." value={reason} onChange={(e)=>{setReason(e.target.value)}}/>
        </div>
        <div className="w-full flex items-end justify-end mt-5">
                <button className="ml-auto p-3 bg-stone-800 text-white rounded-xl">Submit</button>
        </div>
    </div>
    )
}