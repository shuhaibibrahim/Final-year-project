import {useState} from "react"
function MessBill() {
   const messouts=[
       {
         SlNo:"1234",
         Month:"xyz",
         Attendance:"cse",
         MessCharge:15426,
         Extras:125,
         Feast:1265,
         LF:123,
         AF:12,
         Total:122545,
         Dues:12354
       },
       {
        SlNo:"1234",
        Month:"xyz",
        Attendance:"cse",
        MessCharge:15426,
        Extras:125,
        Feast:1265,
        LF:123,
        AF:12,
        Total:122545,
        Dues:12354
       },
       {
        SlNo:"1234",
        Month:"xyz",
        Attendance:"cse",
        MessCharge:15426,
        Extras:125,
        Feast:1265,
        LF:123,
        AF:12,
        Total:122545,
        Dues:12354
      },
      {
        SlNo:"1234",
        Month:"xyz",
        Attendance:"cse",
        MessCharge:15426,
        Extras:125,
        Feast:1265,
        LF:123,
        AF:12,
        Total:122545,
        Dues:12354
      },
       
       
     ]

     const [hostelDataSelected, setHostelDataSelected] = useState(messouts)
     const [tabSelected, setTabSelected] = useState(1)
     const [selectedRowIndex, setSelectedRowIndex] = useState(-1)
     const [selectedHostel, setSelectedHostel] = useState(null)
   
       return (
         // <div className='w-full'>
         <>
           {/* inmates list */}
           <div className='w-11/12'>
             <h2 className='font-semibold text-lg mb-2'>Mess Bill</h2>
             <table className='w-full relative table-auto'>
                 <tr className='rounded-xl p-3 bg-primary text-center'>
                   <th className='p-3'>Sl.No</th>
                   <th className='p-3'>Month</th>
                   <th className='p-3'>Attendance</th>
                   <th className='p-3'>Mess Charge</th>
                   <th className='p-3'>Extras</th>
                   <th className='p-3'>Feast</th>
                   <th className='p-3'>L.F</th>
                   <th className='p-3'>A.F</th>
                   <th className='p-3'>Total</th>
                   <th className='p-3'>Dues</th>
                 </tr>
                 {hostelDataSelected.map((user, index)=>(
                   <tr 
                     className={'border-b text-center border-slate-200 border-solid '+(index==selectedRowIndex && selectedHostel==tabSelected ?' bg-blue-300 ':' hover:bg-gray-300')}
                     onClick={()=>{
                       if(selectedRowIndex==index && selectedHostel==tabSelected)
                       {
                         setSelectedRowIndex(-1)
                         setSelectedHostel(null)
                       }
                       else
                       {
                         setSelectedRowIndex(index)
                         setSelectedHostel(tabSelected) //"MH" or "LH"
                       }
                     }}
                   >
                     <td className='p-3'>{user.SlNo}</td>
                     <td className='p-3'>{user.Month}</td>
                     <td className='p-3'>{user.Attendance}</td>
                     <td className='p-3'>{user.MessCharge}</td>
                     <td className='p-3'>{user.Extras}</td>
                     <td className='p-3'>{user.Feast}</td>
                     <td className='p-3'>{user.LF}</td>
                     <td className='p-3'>{user.AF}</td>
                     <td className='p-3'>{user.Total}</td>
                   </tr>
                 ))}
             </table>
           </div>
         </>
       )
     }


export default MessBill