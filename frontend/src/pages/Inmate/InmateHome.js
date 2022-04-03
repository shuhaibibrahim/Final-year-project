import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../../components/SideBar'
import editSvg from'../../icons/edit.svg'
import userSvg from'../../icons/user.svg'
import bookSvg from'../../icons/book.svg'
import fitnessSvg from'../../icons/fitness.svg'

function InmateHome() {
  const links=[
      {
          title:"Users",
          to:"/admin",
          icon:userSvg,
          subLinkOpen:true,
          subLinkActiveIndex:0,
          subLinks:[
              {
                  title:"Inmate",
                  to:"inmates",
                  icon:   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>,
              },
              {
                  title:"Non Inmate",
                  to:"",
                  icon:   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>,
              },
              {
                  title:"Faculty",
                  to:"",
                  icon:   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>,
              }
          ]
      },
      {
          title:"Hostel Registry",
          to:"",
          icon: editSvg,
      },
      {
          title:"Allotment Rules",
          to:"",
          icon: bookSvg,
      },
      {
          title:"Application Paths",
          to:"",
          icon: fitnessSvg,
      }
  ]
  return (
    <div className='flex w-full flex-row bg-primary min-h-screen h-full'>
        <div className='w-3/12'>
            <SideBar myLinks={links} myActiveIndex={0} myOpenedIndex={0}/>
        </div>
        <Outlet/>
    </div>
  )
}

export default InmateHome