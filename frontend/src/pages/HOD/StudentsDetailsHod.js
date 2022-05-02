import React, { useState } from 'react'

function StudentsDetailsHod() {
  const inmateDataMH=[
    {
      admNo:"1234",
      name:"Evans Frank Ghosh",
      dept:"cse",
      batch:"batchId",
      phone:"9876857465",
      email:"xyz@gmail.com"
    },
    {
      admNo:"1234",
      name:"xyz",
      dept:"cse",
      batch:"batchId",
      phone:"9876857465",
      email:"xyz@gmail.com"
    },
    {
      admNo:"1234",
      name:"xyz",
      dept:"cse",
      batch:"batchId",
      phone:"9876857465",
      email:"xyz@gmail.com"
    },
    {
      admNo:"1234",
      name:"xyz",
      dept:"cse",
      batch:"batchId",
      phone:"9876857465",
      email:"xyz@gmail.com"
    },
    {
      admNo:"1234",
      name:"xyz",
      dept:"cse",
      batch:"batchId",
      phone:"9876857465",
      email:"xyz@gmail.com"
    },
    {
      admNo:"1234",
      name:"xyz",
      dept:"cse",
      batch:"batchId",
      phone:"9876857465",
      email:"xyz@gmail.com"
    },
    {
      admNo:"1234",
      name:"xyz",
      dept:"cse",
      batch:"batchId",
      phone:"9876857465",
      email:"xyz@gmail.com"
    },
    {
      admNo:"1234",
      name:"xyz",
      dept:"cse",
      batch:"batchId",
      phone:"9876857465",
      email:"xyz@gmail.com"
    }
  ]

  const inmateDataLH=[
    {
      admNo:"1289",
      name:"N Athul Kumar",
      dept:"cse",
      batch:"batchId",
      phone:"9876857465",
      email:"xyz@gmail.com"
    },
    {
      admNo:"1289",
      name:"pqr",
      dept:"cse",
      batch:"batchId",
      phone:"9876857465",
      email:"xyz@gmail.com"
    },
    {
      admNo:"1289",
      name:"pqr",
      dept:"cse",
      batch:"batchId",
      phone:"9876857465",
      email:"xyz@gmail.com"
    },
    {
      admNo:"1289",
      name:"pqr",
      dept:"cse",
      batch:"batchId",
      phone:"9876857465",
      email:"xyz@gmail.com"
    },
    {
      admNo:"1289",
      name:"pqr",
      dept:"cse",
      batch:"batchId",
      phone:"9876857465",
      email:"xyz@gmail.com"
    },
    {
      admNo:"1289",
      name:"pqr",
      dept:"cse",
      batch:"batchId",
      phone:"9876857465",
      email:"xyz@gmail.com"
    },
    {
      admNo:"1289",
      name:"pqr",
      dept:"cse",
      batch:"batchId",
      phone:"9876857465",
      email:"xyz@gmail.com"
    },
    {
      admNo:"1289",
      name:"pqr",
      dept:"cse",
      batch:"batchId",
      phone:"9876857465",
      email:"xyz@gmail.com"
    }
  ]

  const [hostelDataSelected, setHostelDataSelected] = useState(inmateDataMH)
  const [tabSelected, setTabSelected] = useState("MH")
  const [selectedRowIndex, setSelectedRowIndex] = useState(-1)
  const [selectedHostel, setSelectedHostel] = useState(null)

  const HostelList=()=>{
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
              placeholder='Search by name or by admission number'
              className='p-2 w-80 outline-none'
            />
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
          
          {/* filter and export*/}
          <div className='flex flex-row space-x-2 items-center'>
            <div className='py-2 cursor-pointer hover:bg-stone-600 px-3 bg-stone-800 text-white text-sm font-semibold rounded-2xl'>Filter</div>
            <div className='py-2 cursor-pointer hover:bg-stone-600 px-3 bg-stone-800 text-white text-sm font-semibold rounded-2xl'>Export</div>
          </div>
        </div>

        {/* inmates list */}
        <div className='w-11/12 overflow-y-scroll no-scrollbar'>
          <table className='w-full relative table-auto'>
            <thead className='bg-primary rounded-xl p-3'>
              <tr className='rounded-xl p-3'>
                <th>Admission Number</th>
                <th>Name</th>
                <th>Department</th>
                <th>Batch</th>
                <th>Phone</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody className=''>
              {hostelDataSelected.map((user, index)=>(
                <tr 
                  className={'border-b border-slate-200 border-solid '+(index==selectedRowIndex && selectedHostel==tabSelected ?' bg-blue-300 ':' hover:bg-gray-300')}
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
                  <td>{user.admNo}</td>
                  <td>{user.name}</td>
                  <td>{user.dept}</td>
                  <td>{user.batch}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    )
  }


  return (
    <div className='flex flex-col w-full items-center min-h-screen h-full'>
      <div className='flex flex-row justify-between w-11/12 pt-4 items-center'>
        <div className='text-xl font-bold'>Inmates</div>
        <div className='flex flex-row space-x-4 items-center'>
            <div className='bg-white border rounded-full w-10 aspect-square'/>
            <div>user Name</div>
        </div>
      </div>

      <div className='flex flex-col items-center py-8 space-y-4 w-11/12 mt-8 bg-white rounded-xl admin-dashbord-height'>
        {/* white box nav bar */}
        <div className='flex flex-row justify-between w-11/12 items-center'>
          <div className='flex flex-row tex-black text-sm font-bold relative'>
              <div
                className='cursor-pointer '
                onClick={()=>{
                  setHostelDataSelected(inmateDataMH)
                  setTabSelected("MH")
                }}
              >
                  <div>Mens Hostel <span className='ml-2 p-2 text-white bg-stone-800 rounded-lg cursor-default'>200</span></div>
                  <div className={tabSelected=="MH"?'mt-2 h-1 self-center w-7/12 bg-stone-800 rounded-full':''}/>
              </div>

              <div 
                className='ml-5 cursor-pointer'
                onClick={()=>{
                  setHostelDataSelected(inmateDataLH)
                  setTabSelected("LH")
                }}
              >
                <div>Ladies Hostel <span className='ml-2 p-2 text-white bg-stone-800 rounded-lg cursor-default'>200</span></div>
                <div className={tabSelected=="LH"?'mt-2 h-1 w-7/12 self-center bg-stone-800 rounded-full':''}/>
              </div>

              {/* {selectedRowIndex!=-1&&<div 
                className={'ml-5 -mt-2 cursor-pointer text-green-600 bg-primary p-3 flex items-center rounded-xl '+(tabSelected=="roles"?' bg-green-600 text-white ':'')}
                onClick={()=>{
                  setHostelDataSelected(inmateDataLH)
                  setTabSelected("roles")
                }}
              >
                {/* <div>Assign Role</div> */}
                {/* <div className={tabSelected=="roles"?'mt-2 h-1 w-full self-center bg-stone-800 rounded-full':''}/> */}
              {/* </div>} */}




          </div>

          {tabSelected!="roles"&&<div className='text-sm mb-2'>Showing 1-8 out of 200 results</div>}
        </div>

        {tabSelected!="roles"&&<HostelList />}
        {/* {tabSelected=="roles"&&<AssignRole />} */}
      </div>
    </div>
  )
}

export default StudentsDetailsHod