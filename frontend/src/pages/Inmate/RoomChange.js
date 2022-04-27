import {useState} from 'react'
export default function RoomChange(){
    const [preferredRoom,setPreferredRoom]=useState("")
    const [changeReason,setChangeReason]=useState("")
    return(
        <div className="w-11/12">
            <h2 className="font-bold text-black mb-3">Your Room No: B214</h2>
            <form action="">
                <div className="grid grid-cols-2 gap-y-4 w-6/12">
                <label htmlFor="">New preferred room:</label>
                <input type="text" name="" id="" placeholder="Enter preferred room" className="border-solid border-2 rounded-lg ml-3 p-1" value={preferredRoom} onChange={(e)=>{setPreferredRoom(e.target.value)}} required/>
                <label htmlFor="">Reason for Room Change:</label>
                <textarea name="" id="" rows="5" placeholder="Type a valid reason.." className="border-solid border-2 rounded-lg ml-3 p-1" value={changeReason} onChange={(e)=>{setChangeReason(e.target.value)}} required></textarea>
                </div>
                <div className="w-full flex items-end justify-end mt-5">
                    <button className="ml-auto p-3 bg-stone-800 text-white rounded-xl">Submit Request</button>
                </div>
            </form>
        </div>
    )
}