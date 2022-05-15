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
  
    const [links, setLinks] = useState([])
    const [role, setRole] = useState(-1) //index of the role selected in the user.roles array

    

    // const user.roles=["admin", "staff advisor", "warden", "hosteloffice", "hod"]

    useEffect(() => {
        if(localStorage.getItem('role')==null){
            setRole(0)
            localStorage.setItem('role','0')
        }
        else{
            var localRole=parseInt(localStorage.getItem('role'))
            setRole(localRole)
        }

        
    }, [])
    
    useEffect(() => {

        if(roles[role]==="admin")
        {
            // setRoleTo("admin")
            console.log("new links : ",adminLinks)
            setLinks(adminLinks.map(item=>({...item})))
        }
        else if(roles[role]==="staff advisor")
        {
            // setRoleTo("staffadvisor")
            console.log("new links : ",saLinks)
            setLinks(saLinks.map(item=>({...item})))
        }
        
        else if(roles[role]==="hod")
        {
            // setRoleTo("staffadvisor")
            console.log("new links : ",hodLinks)
            setLinks(hodLinks.map(item=>({...item})))
        }
        else if(roles[role]==="warden"){
            // setRoleTo("warden")
            console.log("new links : ",wardenLinks)
            setLinks(wardenLinks.map(item=>({...item})))
        }
        else if(roles[role]==="hosteloffice"){
            // setRoleTo("warden")
            console.log("new links : ",hostelOfficeLinks)
            setLinks(hostelOfficeLinks.map(item=>({...item})))
        }

    }, [role])
    
    return (
        <div className='flex w-full flex-row bg-primary h-screen'>
            <div className='w-3/12 '>
                {/* myActiveIndex is the index of the link that should be active*/}
                {/*myOpenedIndex is the index of the link(with sublinks) that is made open */}
                {/* roleIndex is the index of the role selected */}
                {/* roleTo is the route of the home page of the corresponding role */}
                <SideBar myLinks={links} roles={roles} setRole={setRole} roleIndex={role}/>
            </div>
            <Outlet/>
        </div>
    )
}

export default CommonHome