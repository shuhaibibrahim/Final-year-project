import {useState,useEffect} from "react"
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import axios from "axios";
function MessOutReqs({noofDays,setNoofDays}) {

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
     const [isEdit,setIsEdit]=useState(false)

     const submitHandler =(e)=>{
       e.preventDefault();
       setIsEdit(!isEdit)
       axios.put('http://localhost:8080/inmate/messoutdays',{
         noofDays:noofDays
       })
       .then((res)=>{
         console.log(res)
       })
     }
       return (
         <>
           {/* inmates list */}
           <div className='w-11/12'>
             <div className="flex items-center mt-5 mb-5">
                <p className="font-semibold">Minimum Number of Days for Mess Out: 
                  {isEdit?<input type="number" min="1" max="100" className="border-solid border-2 rounded-lg ml-3 p-1 w-20" 
                    value={noofDays} onChange={(e)=>{setNoofDays(e.target.value)}}/>:<span className="ml-3">{noofDays}</span>}
                </p>
                {!isEdit?<button className="submit-button-black ml-5" onClick={()=>{setIsEdit(!isEdit)}}><EditIcon/> Edit</button>:
                <button className="submit-button-black text-sm ml-5" onClick={submitHandler}><CheckIcon className="text-sm"/> Confirm</button>}
             </div>
             <h2 className="text-black font-semibold text-lg mt-5 mb-3">Mess Out Requests</h2>
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