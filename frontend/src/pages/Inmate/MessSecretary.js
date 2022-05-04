import React, { useState } from 'react'
import CurrentInmates from '../../components/CurrentInmates';
import MessOutReqs from '../../components/MessOutReqs';
import {motion} from 'framer-motion'
function MessSecretary() {
  const applications=[
    {
      SlNo:"1234",
      Certificate:"xyz",
      Date:"cse"
    },
    {
      SlNo:"1234",
      Certificate:"xyz",
      Date:"cse"
    },
    {
      SlNo:"1234",
      Certificate:"xyz",
      Date:"cse"
    },
    {
      SlNo:"1234",
      Certificate:"xyz",
      Date:"cse"
    },
    {
      SlNo:"1234",
      Certificate:"xyz",
      Date:"cse"
    },
    {
      SlNo:"1234",
      Certificate:"xyz",
      Date:"cse"
    },
    {
      SlNo:"1234",
      Certificate:"xyz",
      Date:"cse"
    },
    {
      SlNo:"1234",
      Certificate:"xyz",
      Date:"cse"
    }

    
  ]


  const [hostelDataSelected, setHostelDataSelected] = useState(applications)
  const [tabSelected, setTabSelected] = useState(1)
  const [selectedRowIndex, setSelectedRowIndex] = useState(-1)
  const [selectedHostel, setSelectedHostel] = useState(null)



  return (
    <div className='flex flex-col w-full items-center min-h-screen h-full overflow-y-scroll'>
      <div className='flex flex-row justify-between w-11/12 pt-4 items-center'>
        <div className='text-xl font-bold'>Mess Secretary</div>
        <div className='flex flex-row space-x-4 items-center'>
            <div className='bg-white border rounded-full w-10 aspect-square'/>
            <div>user Name</div>
        </div>
      </div>

      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.3}}  className='flex flex-col items-center py-8 space-y-4 w-11/12 mt-8 bg-white rounded-xl'>
        {/* white box nav bar */}
        <div className='flex flex-row justify-between w-11/12 items-center'>
          <div className='flex flex-row tex-black text-sm font-bold relative'>
              <div
                className='cursor-pointer '
                onClick={()=>{
                  setHostelDataSelected(applications)
                  setTabSelected(1)
                }}
              >
                  <div>Inmates <span className='ml-2 p-2 text-white bg-stone-800 rounded-lg cursor-default'>200</span></div>
                  <div className={tabSelected===1?'mt-2 h-1 self-center w-6/12 bg-stone-800 rounded-full':''}/>
              </div>

              <div 
                className='ml-5 cursor-pointer'
                onClick={()=>{
                  setHostelDataSelected(applications)
                  setTabSelected(2)
                }}
              >
                <div>Mess Out Requests</div>
                <div className={tabSelected===2?'mt-2 h-1 w-12/12 self-center bg-stone-800 rounded-full':''}/>
              </div>
          </div>

          {tabSelected===1&&<div className='text-sm mb-2'>Showing 1-8 out of 200 results</div>}
          <br />
        </div>
        {tabSelected===1?<CurrentInmates/>:<MessOutReqs/>}
      </motion.div>
    </div>
  )
}

export default MessSecretary