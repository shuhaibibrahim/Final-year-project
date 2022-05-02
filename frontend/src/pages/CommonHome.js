import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/SideBar'
import editSvg from'../icons/edit.svg'
import userSvg from'../icons/user.svg'
import bookSvg from'../icons/book.svg'
import fitnessSvg from'../icons/fitness.svg'
import { adminLinks } from './Admin/AdminLinks'
import { saLinks } from './StaffAdvisor/StaffAdvisorLinks'
import { wardenLinks } from './Warden/WardenLinks'
import { hostelOfficeLinks } from './HostelOffice/HostelOfficeLinks'

function CommonHome({user}) {
  
    const [links, setLinks] = useState(adminLinks)
    const [role, setRole] = useState(0) //index of the role selected in the user.roles array
    const [roleTo, setRoleTo] = useState(".")

    const roles=["admin", "staff advisor", "student", "inmate", "warden", "hosteloffice"]

    useEffect(() => {
        if(roles[role]==="admin")
        {
            // setRoleTo("admin")
            setLinks(adminLinks)
        }
        else if(roles[role]==="staff advisor")
        {
            // setRoleTo("staffadvisor")
            setLinks(saLinks)
        }
        else if(roles[role]==="warden"){
            // setRoleTo("warden")
            setLinks(wardenLinks)
        }
        else if(roles[role]==="hosteloffice"){
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
                <SideBar myLinks={links} roles={roles} setRole={setRole} roleTo={roleTo} myActiveIndex={0} myOpenedIndex={0} roleIndex={role}/>
            </div>
            <Outlet/>
        </div>
    )
}

export default CommonHome