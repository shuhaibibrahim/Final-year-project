import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/SideBar'
import editSvg from'../icons/edit.svg'
import userSvg from'../icons/user.svg'
import bookSvg from'../icons/book.svg'
import fitnessSvg from'../icons/fitness.svg'
import { adminLinks } from './Admin/AdminLinks'
import { saLinks } from './StaffAdvisor/StaffAdvisorLinks'
import { createBrowserHistory } from 'history'
import { wardenLinks } from './Warden/WardenLinks'
import { hostelOfficeLinks } from './HostelOffice/HostelOfficeLinks'
import { hodLinks } from './HOD/HODLinks'
// import { studentLinks } from './Student/StudentLinks'

function CommonHome({user}) {
  
    const [links, setLinks] = useState(adminLinks)
    const [role, setRole] = useState(0) //index of the role selected in the user.roles array
    const [roleTo, setRoleTo] = useState(".")

    

    // const user.roles=["admin", "staff advisor", "warden", "hosteloffice", "hod"]


    useEffect(() => {
        
        if(user.roles[role]==="admin")
        {
            // setRoleTo("admin")
            setLinks(adminLinks)
        }
        else if(user.roles[role]==="staff advisor")
        {
            // setRoleTo("staffadvisor")
            setLinks(saLinks)
        }
        else if(user.roles[role]==="hod")
        {
            // setRoleTo("staffadvisor")
            setLinks(hodLinks)
        }
        else if(user.roles[role]==="warden"){
            // setRoleTo("warden")
            setLinks(wardenLinks)
        }
        else if(user.roles[role]==="hosteloffice"){
            // setRoleTo("warden")
            setLinks(hostelOfficeLinks)
        }

    }, [role])
    
    return (
        <div className='flex w-full flex-row bg-primary h-screen'>
            <div className='w-3/12 '>
                {/* myActiveIndex is the index of the link that should be active*/}
                {/*myOpenedIndex is the index of the link(with sublinks) that is made open */}
                {/* roleIndex is the index of the role selected */}
                {/* roleTo is the route of the home page of the corresponding role */}
                <SideBar myLinks={links} roles={user.roles} setRole={setRole} roleTo={roleTo} myActiveIndex={0} myOpenedIndex={0} roleIndex={role}/>
            </div>
            <Outlet/>
        </div>
    )
}

export default CommonHome