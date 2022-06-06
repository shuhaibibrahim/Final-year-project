import axios from "axios"
import { useState,useContext,useEffect } from "react"
import { baseUrl } from "../baseUrl"
import { UserContext } from "../Contexts/UserContext"

function MessOutHistory({messOutHistory,setMessOutHistory,isEmpty,setIsEmpty,setNoofDays}) {

  const {user,setLoading}=useContext(UserContext)
  useEffect(() => {
    setLoading(true)
    axios.get('http://localhost:8080/inmate/messoutdays')
    .then((res)=>{
      console.log(res.data)
      setNoofDays(res.data[0].value)
    })
    axios.get(`${baseUrl}/inmate/messouthistory`,{params:{user_id:user.user_id}})
    .then(res=>{
      console.log(res.data)
      setMessOutHistory(res.data.rows)
      if(res.data.rows.length>0){
        setIsEmpty(false)
      }
      setLoading(false)
    })
  }, [])
   
       return (
         <>
           <div className='w-12/12'>
             <h1 className="font-semibold text-black text-lg mb-3 mt-3">Mess Out History</h1>
             {isEmpty?<p>No MessOut History</p>:<table className='w-full relative table-auto'>
                 <tr className='rounded-xl p-3 bg-primary text-center'>
                   <th className='p-3'>Sl.No</th>
                   <th className='p-3'>From Date</th>
                   <th className='p-3'>To Date</th>
                   <th className='p-3'>Number of Days</th>
                   <th className='p-3'></th>
                 </tr>
                 {messOutHistory.map((user, index)=>{
                   var fdate=new Date(user.fromdate)
                   var tdate=new Date(user.todate)
                   return(
                    <tr 
                      key={index}
                      className={'border-b text-center border-slate-200 border-solid hover:bg-gray-300'}
                    >
                      <td className='p-3'>{index+1}</td>
                      <td className='p-3'>{fdate.getDate()+'/'+fdate.getMonth()+'/'+fdate.getFullYear()}</td>
                      <td className='p-3'>{tdate.getDate()+'/'+tdate.getMonth()+'/'+tdate.getFullYear()}</td>
                      <td className='p-3'>{((tdate.getTime()-fdate.getTime())/(1000 * 3600 * 24))+1}</td>
                      <td className='p-3'><button className="submit-button-black">Cancel</button></td>
                    </tr>
                 )})}
             </table>}
           </div>
         </>
       )
     }


export default MessOutHistory