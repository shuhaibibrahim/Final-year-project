import {useState} from "react"
function MessOutHistory() {
   const messouts=[
       {
         SlNo:"1234",
         FromDate:"xyz",
         ToDate:"cse"
       },
       {
        SlNo:"1234",
        FromDate:"xyz",
        ToDate:"cse"
      },
      {
        SlNo:"1234",
        FromDate:"xyz",
        ToDate:"cse"
      },
      {
        SlNo:"1234",
        FromDate:"xyz",
        ToDate:"cse"
      }
       
       
     ]

     const [hostelDataSelected, setHostelDataSelected] = useState(messouts)
     const [tabSelected, setTabSelected] = useState(1)
     const [selectedRowIndex, setSelectedRowIndex] = useState(-1)
     const [selectedHostel, setSelectedHostel] = useState(null)
   
       return (
         <>
           {/* inmates list */}
           <div className='w-11/12'>
             <h1 className="font-semibold text-black text-lg mb-3 mt-3">Mess Out History</h1>
             <table className='w-full relative table-auto'>
                 <tr className='rounded-xl p-3 bg-primary text-center'>
                   <th className='p-3'>Sl.No</th>
                   <th className='p-3'>From Date</th>
                   <th className='p-3'>To Date</th>
                   <th className='p-3'>Number of Days</th>
                   <th className='p-3'></th>
                 </tr>
                 {hostelDataSelected.map((user, index)=>(
                   <tr 
                     className={'border-b text-center border-slate-200 border-solid hover:bg-gray-300'}
                   >
                     <td className='p-3'>{user.SlNo}</td>
                     <td className='p-3'>{user.FromDate}</td>
                     <td className='p-3'>{user.ToDate}</td>
                     <td className='p-3'>days</td>
                     <td className='p-3'><button className="submit-button-black">Cancel</button></td>
                   </tr>
                 ))}
             </table>
           </div>
         </>
       )
     }


export default MessOutHistory