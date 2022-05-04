import React, { useState } from 'react'
import ComplaintBox from '../../components/ComplaintBox';
import RoomChange from './RoomChange';
import HostelOut from '../../components/HostelOut'
import {motion} from 'framer-motion'
function HostelPage() {
  const [tabSelected, setTabSelected] = useState(1)
  return (
    <div className='flex flex-col w-full items-center min-h-screen h-full overflow-y-scroll'>
      <div className='flex flex-row justify-between w-11/12 pt-4 items-center'>
        <div className='text-xl font-bold'>Hostel</div>
        <div className='flex flex-row space-x-4 items-center'>
            <div className='bg-white border rounded-full w-10 aspect-square'/>
            <div>user Name</div>
        </div>
      </div>

      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.3}}  className='flex flex-col items-center py-8 space-y-4 w-11/12 mt-8 bg-white rounded-xl admin-dashbord-height'>
        {/* white box nav bar */}
        <div className='flex flex-row justify-between w-11/12 items-center'>
          <div className='flex flex-row text-black text-sm font-bold relative mb-3'>
              <div
                className='cursor-pointer '
                onClick={()=>{
                  setTabSelected(1)
                }}
              >
                  <div>Room Change </div>
                  <div className={tabSelected===1?'mt-2 h-1 self-center w-12/12 bg-stone-800 rounded-full':''}/>
              </div>

              <div
                className='ml-5 cursor-pointer '
                onClick={()=>{
                  setTabSelected(2)
                }}
              >
                  <div>Complaint Box </div>
                  <div className={tabSelected===2?'mt-2 h-1 self-center w-12/12 bg-stone-800 rounded-full':''}/>
              </div>

              <div
                className='ml-5 cursor-pointer '
                onClick={()=>{
                  setTabSelected(3)
                }}
              >
                  <div>Hostel Out </div>
                  <div className={tabSelected===3?'mt-2 h-1 self-center w-12/12 bg-stone-800 rounded-full':''}/>
              </div>
          </div>
        </div>
        {tabSelected===1&&<RoomChange/>}
        {tabSelected===2&&<ComplaintBox/>}
        {tabSelected===3&&<HostelOut/>}
      </motion.div>
    </div>
  )
}

export default HostelPage