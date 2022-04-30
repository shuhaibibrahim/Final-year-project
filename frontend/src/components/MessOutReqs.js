import {useState} from "react"
function MessOutReqs() {
   const messouts=[
       {
         SlNo:"1234",
         AdmNo:"18MH010",
         Name:"Shijin",
         FromDate:"xyz",
         ToDate:"cse"
       },
       {
        SlNo:"1234",
        AdmNo:"18MH010",
        Name:"Shijin",
        FromDate:"xyz",
        ToDate:"cse"
      },
      {
        SlNo:"1234",
        AdmNo:"18MH010",
        Name:"Shijin",
        FromDate:"xyz",
        ToDate:"cse"
      },
      {
        SlNo:"1234",
        AdmNo:"18MH010",
        Name:"Shijin",
        FromDate:"xyz",
        ToDate:"cse"
      },
      {
        SlNo:"1234",
        AdmNo:"18MH010",
        Name:"Shijin",
        FromDate:"xyz",
        ToDate:"cse"
      },
      {
        SlNo:"1234",
        AdmNo:"18MH010",
        Name:"Shijin",
        FromDate:"xyz",
        ToDate:"cse"
      },
      {
        SlNo:"1234",
        AdmNo:"18MH010",
        Name:"Shijin",
        FromDate:"xyz",
        ToDate:"cse"
      },
      {
        SlNo:"1234",
        AdmNo:"18MH010",
        Name:"Shijin",
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
             <table className='w-full relative table-auto'>
                 <tr className='rounded-xl p-3 bg-primary text-center'>
                   <th className='p-3'>Sl.No</th>
                   <th className='p-3'>Admission No.</th>
                   <th className='p-3'>Name</th>
                   <th className='p-3'>From Date</th>
                   <th className='p-3'>To Date</th>
                   <th className='p-3'>Number of Days</th>
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
                     <td className='p-3'>{user.AdmNo}</td>
                     <td className='p-3'>{user.Name}</td>
                     <td className='p-3'>{user.FromDate}</td>
                     <td className='p-3'>{user.ToDate}</td>
                     <td className='p-3'>days</td>
                   </tr>
                 ))}
             </table>
           </div>
         </>
       )
     }


export default MessOutReqs