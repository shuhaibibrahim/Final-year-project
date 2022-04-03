import React, { useState } from 'react'

function AdminPaths() {

    const dummyData=[
        {
            path:"SA-HOD-WD",
            certificates:"1,2,3,4"
        },
        {
            path:"SA-HOD-WD",
            certificates:"1,2,3,4"
        },
        {
            path:"SA-HOD-WD",
            certificates:"1,2,3,4"
        }
    ]

    const [pathData, setPathData] = useState(dummyData)

    return (
    <div className='flex flex-col w-full items-center min-h-screen h-full'>
        <div className='flex flex-row justify-between w-11/12 pt-4 items-center'>
            <div className='text-xl font-bold'>Application Paths</div>
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
                    <div>Application Paths</div>
                    <div className='mt-2 h-1 self-center w-full bg-stone-800 rounded-full'/>
                </div>
            </div>

            {/* <div className='text-sm mb-2'>Showing 1-8 out of 200 results</div> */}
            </div>

            {/* Paths list */}
            <div className='w-11/12 h-80 overflow-y-scroll no-scrollbar'>
            <table className='w-full relative'>
                <thead className='bg-primary rounded-xl p-3'>
                <tr className='rounded-xl '>
                    <th>Path</th>
                    <th>Certificates</th>
                    <th>Add new Certificates</th>
                </tr>
                </thead>
                <tbody className=''>
                {pathData.map(pathItem=>(
                    <tr className='border-b border-slate-200 border-solid'>
                        <td>{pathItem.path}</td>
                        <td>{pathItem.certificates}</td>
                        <td>
                            <div className='flex flex-row space-x-3'>
                                <select className='ring-slate-200 ring-2 rounded-xl w-4/12 outline-none'>
                                    <option value={null}>NIL</option>
                                    <option value="inm">Inmate</option>
                                    <option value="noninm">Non Inmate</option>
                                    <option value="nodue">No Due</option>
                                    <option value="fee">Fee Structure</option>
                                </select>

                                <button className='rounded-xl p-2 bg-green-500 w-2/12 text-white font-bold hover:bg-green-700'>Add</button>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
        </div>
    )
}

export default AdminPaths