import axios from "axios"
import { useState,useContext,useEffect } from "react"
import { baseUrl } from "../baseUrl"
import { UserContext } from "../Contexts/UserContext"

function MessOutHistory() {

  const {user}=useContext(UserContext)
  useEffect(() => {
    axios.get(`${baseUrl}/inmate/messouthistory`,{params:{user_id:user.user_id}})
    .then(res=>{
      console.log(res.data)
      setMessOutHistory(res.data.rows)
    })
  }, [])
  

     const [messouthistory, setMessOutHistory] = useState([])
   
       return (
         <>
           <div className='w-12/12'>
             <h1 className="font-semibold text-black text-lg mb-3 mt-3">Mess Out History</h1>
             <table className='w-full relative table-auto'>
                 <tr className='rounded-xl p-3 bg-primary text-center'>
                   <th className='p-3'>Sl.No</th>
                   <th className='p-3'>From Date</th>
                   <th className='p-3'>To Date</th>
                   <th className='p-3'>Number of Days</th>
                   <th className='p-3'></th>
                 </tr>
                 {messouthistory.map((user, index)=>(
                   <tr 
                      key={index}
                     className={'border-b text-center border-slate-200 border-solid hover:bg-gray-300'}
                   >
                     <td className='p-3'>{index+1}</td>
                     <td className='p-3'>{user.fromdate.slice(0,10)}</td>
                     <td className='p-3'>{user.todate.slice(0,10)}</td>
                     <td className='p-3'>{user.days}</td>
                     <td className='p-3'><button className="submit-button-black">Cancel</button></td>
                   </tr>
                 ))}
             </table>
           </div>
         </>
       )
     }


export default MessOutHistory