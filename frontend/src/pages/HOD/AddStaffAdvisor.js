import React, { useState } from 'react'
import {motion} from "framer-motion" 

function AddStaffAdvisor() {
  const dummyData=[
    {
      penNo:"1234",
      name:"Jones Klein Lopez",
      phone:"9876857465",
      email:"xyz@gmail.com"
    },
    {
      penNo:"1234",
      name:"xyz",
      phone:"9876857465",
      email:"xyz@gmail.com"
    },
    {
      penNo:"1234",
      name:"xyz",
      phone:"9876857465",
      email:"xyz@gmail.com"
    },
    {
      penNo:"1234",
      name:"xyz",
      phone:"9876857465",
      email:"xyz@gmail.com"
    },
    {
      penNo:"1234",
      name:"xyz",
      phone:"9876857465",
      email:"xyz@gmail.com"
    },
    {
      penNo:"1234",
      name:"xyz",
      phone:"9876857465",
      email:"xyz@gmail.com"
    },
    {
      penNo:"1234",
      name:"xyz",
      phone:"9876857465",
      email:"xyz@gmail.com"
    },
    {
      penNo:"1234",
      name:"xyz",
      phone:"9876857465",
      email:"xyz@gmail.com"
    }
  ]

  const [faculty, setFaculty] = useState(dummyData)
  const [tabSelected, setTabSelected] = useState("MH")
  const [selectedRowIndex, setSelectedRowIndex] = useState(-1)

  const FacultyList=()=>{
    return (
      // <div className='w-full'>
      <>
        {/* search and filter */}
        <div className='flex flex-row bg-primary rounded-lg w-11/12 items-center p-3 justify-between'>
          {/* search */}
          <div className='flex flex-row items-center bg-white rounded-lg text-sm px-2'>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input 
              placeholder='Search by name or by PEN number'
              className='p-2 w-80 outline-none'
            />
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
          
          {/* <div className='text-stone-800 font-bold text-sm'>Click on a user row to assign role</div> */}

          {/* filter and export*/}
          {/* <div className='flex flex-row space-x-2 items-center'>
            <div className='py-2 cursor-pointer hover:bg-stone-600 px-3 bg-stone-800 text-white text-sm font-semibold rounded-2xl'>Filter</div>
            <div className='py-2 cursor-pointer hover:bg-stone-600 px-3 bg-stone-800 text-white text-sm font-semibold rounded-2xl'>Export</div>
          </div> */}
        </div>

        {/* inmates list */}
        <div className='w-11/12 overflow-y-auto no-scrollbar'>
          <table className='w-full table-auto'>
              <tr className='bg-primary text-left sticky top-0'>
                <th className='py-3'>PEN Number</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
              </tr>
                {faculty.map((user, index)=>(
                  <tr 
                    className={'border-b border-slate-200 border-solid '+(index==selectedRowIndex?' bg-blue-300 ':' hover:bg-gray-300')}
                    onClick={()=>{
                      if(selectedRowIndex==index)
                      {
                        setSelectedRowIndex(-1)
                      }
                      else
                      {
                        setSelectedRowIndex(index)
                      }
                    }}
                  >
                    <td className='py-3'>{user.penNo}</td>
                    <td>{user.name}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                  </tr>
                ))}
          </table>
        </div>
      </>
    )
  }

  const AssignRole=()=>{
    return (  
      <div className='flex flex-col w-11/12 '>
          <div className='text-stone-800 font-bold text-lg'>Faculty - {faculty[selectedRowIndex].name}</div>
          
          <div className='flex flex-row space-x-3 bg-primary p-8 rounded-xl'>
            <div className='grid grid-cols-2 gap-4 w-1/2'>
              <div className='text-stone-800 font-bold'>Name</div>
              <div> 
                <span className='text-stone-800 font-bold mr-3'>:</span>
                {faculty[selectedRowIndex].name}
              </div>

              <div className='text-stone-800 font-bold'>PEN No</div>
              <div> 
                <span className='text-stone-800 font-bold mr-3'>:</span>
                {faculty[selectedRowIndex].penNo}
              </div>
              
            </div>

            <div className='grid grid-cols-2 gap-4 bg-primary w-1/2'>
              
              <div className='text-stone-800 font-bold'>Phone</div>
              <div> 
                <span className='text-stone-800 font-bold mr-3'>:</span>
                {faculty[selectedRowIndex].phone}
              </div>
              
              <div className='text-stone-800 font-bold'>Email</div>
              <div> 
                <span className='text-stone-800 font-bold mr-3'>:</span>
                {faculty[selectedRowIndex].email}
              </div>
            </div>
          </div>

         <div className='flex flex-row'>
          <div className=''>
            <div className='mt-5 mb-1 text-stone-800 text-md font-semibold'>Select Programme</div>
              <select className='p-3 ring-slate-200 ring-2 rounded-xl outline-none'>
                <option value={null}>NIL</option>
                <option value="sa">B.Tech</option>
                <option value="sa">M.Tech</option>
                <option value="sa">PhD</option>
              </select>
          </div>
          <div className='ml-5'>
            <div className='mt-5 mb-1 text-stone-800 text-md font-semibold'>Select Year</div>
              <select className='p-3 ring-slate-200 ring-2 rounded-xl outline-none'>
                <option value={null}>NIL</option>
                <option value="sa">1</option>
                <option value="sa">2</option>
                <option value="sa">3</option>
                <option value="sa">4</option>
              </select>
          </div>
          <div className='ml-5'>
            <div className='mt-5 mb-1 text-stone-800 text-md font-semibold'>Select Batch</div>
              <select className='p-3 ring-slate-200 ring-2 rounded-xl outline-none'>
                <option value={null}>NIL</option>
                <option value="sa">A</option>
                <option value="sa">B</option>
                
              </select>
          </div>
          </div>
          
          
       
          

          <button className='mt-5 rounded-xl p-2 bg-green-500 w-2/12 text-white font-bold hover:bg-green-700'>Add as advisor</button>
          
        </div>
    )
  }

  return (
    <div className='flex flex-col w-full items-center min-h-screen'>
      <div className='flex flex-row justify-between w-11/12 pt-4 items-center'>
        <div className='text-xl font-bold'>Faculty</div>
        <div className='flex flex-row space-x-4 items-center'>
            <div className='bg-white border rounded-full w-10 aspect-square'/>
            <div>user Name</div>
        </div>
      </div>

      <div className='flex flex-col items-center py-8 space-y-4 w-11/12 mt-8 bg-white rounded-xl overflow-hidden admin-dashbord-height'>
        {/* white box nav bar */}
        <div className='flex flex-row justify-between w-11/12 items-center'>
          <div className='flex flex-row tex-black text-sm font-bold relative'>
              <div
                className='cursor-pointer '
                onClick={()=>{
                  setTabSelected("faculty")
                }}
              >
                  <div>Faculty <span className='ml-2 p-2 text-white bg-stone-800 rounded-lg cursor-default'>20</span></div>
                  <div className={tabSelected=="faculty"?'h-1 self-center w-6/12 bg-stone-800 rounded-full':''}/>
              </div>

              {selectedRowIndex!=-1&& <motion.div initial={{scale:0.8}} animate={{scale:1}}  
                className={'ml-5 -mt-2 cursor-pointer text-green-600 bg-primary p-2 flex items-center rounded-xl '+(tabSelected=="roles"?' bg-green-600 text-white ':'')}
                onClick={()=>{
                  setTabSelected("roles")
                }}
              >
                <div>Show Details</div>
                {/* <div className={tabSelected=="roles"?'mt-2 h-1 w-full self-center bg-stone-800 rounded-full':''}/> */}
              </motion.div>}
          </div>

          {/* <div className='text-sm mb-2'>Showing 1-8 out of 200 results</div> */}
        </div>

        {tabSelected!="roles"&&<FacultyList />}
        {tabSelected=="roles"&&<AssignRole />}
      </div>
    </div>
  )
}

export default AddStaffAdvisor