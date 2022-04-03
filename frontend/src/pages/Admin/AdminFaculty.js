import React, { useState } from 'react'

function AdminFaculty() {
  const dummyData=[
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

  const [nonInmates, setNonInmates] = useState(dummyData)

  return (
    <div className='flex flex-col w-full items-center min-h-screen h-full'>
      <div className='flex flex-row justify-between w-11/12 pt-4 items-center'>
        <div className='text-xl font-bold'>Non Inmates</div>
        <div className='flex flex-row space-x-4 items-center'>
            <div className='bg-white border rounded-full w-10 aspect-square'/>
            <div>user Name</div>
        </div>
      </div>

      <div className='flex flex-col items-center py-8 space-y-4 w-11/12 mt-8 bg-white rounded-xl'>
        {/* white box nav bar */}
        <div className='flex flex-row justify-between w-11/12 items-center'>
          <div className='flex flex-row tex-black text-sm font-bold'>
              <div
                className='cursor-pointer '
              >
                  <div>Non Inmates<span className='ml-2 p-2 text-white bg-stone-800 rounded-lg cursor-default'>200</span></div>
                  <div className='mt-2 h-1 self-center w-7/12 bg-stone-800 rounded-full'/>
              </div>
          </div>

          <div className='text-sm mb-2'>Showing 1-8 out of 200 results</div>
        </div>

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
        <div className='w-11/12 h-80 overflow-y-scroll no-scrollbar'>
          <table className='w-full relative'>
            <thead className='bg-primary rounded-xl p-3'>
              <tr className='rounded-xl p-3'>
                <th>PEN number</th>
                <th>Name</th>
                <th>Department</th>
                <th>Batch</th>
                <th>Phone</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody className=''>
              {nonInmates.map(user=>(
                <tr className='border-b border-slate-200 border-solid'>
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
      </div>
    </div>
  )
}

export default AdminFaculty