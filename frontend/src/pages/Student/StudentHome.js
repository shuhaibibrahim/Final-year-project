import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../../components/SideBar'

function StudentHome() {
  return (
    <div className='flex w-full flex-row bg-primary min-h-screen h-full'>
        <div className='w-3/12'>
            <SideBar/>
        </div>
        <Outlet/>
    </div>
  )
}

export default StudentHome