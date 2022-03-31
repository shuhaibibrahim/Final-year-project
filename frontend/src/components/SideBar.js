import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function SideBar() {

    const [activeIndex, setActiveIndex] = useState(0)
    const [openedIndex, setOpenedIndex] = useState(0)//index of link opened that have sub indexes

    const [links, setLinks] = useState([
        {
            title:"Users",
            to:"/admin",
            icon:   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>,
            subLinkOpen:true,
            subLinkActiveIndex:0,
            subLinks:[
                {
                    title:"Inmate",
                    to:"inmates",
                    icon:   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>,
                },
                {
                    title:"Non Inmate",
                    to:"",
                    icon:   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>,
                },
                {
                    title:"Faculty",
                    to:"",
                    icon:   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>,
                }
            ]
        },
        {
            title:"Hostel Registry",
            to:"",
            icon:   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>,
        },
        {
            title:"Allotment Rules",
            to:"",
            icon:   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>,
        },
        {
            title:"Application Paths",
            to:"",
            icon:   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>,
        }
    ])

    const backdropClickHandler = (event) => {
        const linkElement=document.getElementById
        console.log(event.target ==linkElement)
        {
            if(activeIndex!=openedIndex && openedIndex>=0)
            {
                var newLinks=[...links]
                newLinks[openedIndex].subLinkActiveIndex=-1
                newLinks[openedIndex].subLinkOpen=false
                setLinks(newLinks)   
                setOpenedIndex(-1)
            }
        }
        // if (event.target == event.currentTarget) {
        //     setModal(null)
        // }
    }

    return (
        <div className='flex flex-row bg-primary min-h-screen h-full'>

            <div className='flex flex-col w-full bg-white' onClick={backdropClickHandler}>
                <div className='flex flex-row items-center px-2 py-4 space-x-3'>
                    {/* LOGO */}
                    <div className='bg-white border border-solid border-black rounded-full w-12 aspect-square'/>
                    <div>Logo Name</div>
                </div>

                <div className='flex flex-col items-start mt-24 w-full px-2' id="main-links">
                    {links.map((link, index)=>(
                        <div className='flex flex-col w-full'>
                            <Link to={link.subLinks==undefined?link.to:'.'} className="">
                                <div 
                                    onClick={()=>{
                                        if(links[activeIndex].subLinks!=undefined && activeIndex!=index)
                                        {
                                            var newLinks=[...links]
                                            newLinks[activeIndex].subLinkActiveIndex=-1
                                            newLinks[activeIndex].subLinkOpen=false
                                            setLinks(newLinks)
                                        }

                                        if(link.subLinks==undefined)
                                        {
                                            setActiveIndex(index)
                                        }
                                        if(index!=openedIndex)
                                        {
                                            if(openedIndex!=-1)
                                            {
                                                var newLinks=[...links]
                                                newLinks[openedIndex].subLinkActiveIndex=-1
                                                newLinks[openedIndex].subLinkOpen=false
                                                setLinks(newLinks)   
                                                setOpenedIndex(-1)
                                            }
                                        }

                                        if(link.subLinks!=undefined)
                                        {
                                        
                                            var newLinks=[...links]
                                            newLinks[index].subLinkOpen=!link.subLinkOpen
                                            setOpenedIndex(index)
                                            setLinks(newLinks)
                                        }
                                    }}
                                    key={index} 
                                    className={'flex flex-row justify-between py-2 px-2 '+(index==activeIndex&&link.subLinks==undefined?'text-blue-500':'text-black')}
                                >
                                    <div className='flex flex-row space-x-4 items-center'>
                                        <div className='text-black'>
                                            {link.icon}
                                        </div>
                                        <div>{link.title}</div>
                                    </div>
                                    {link.subLinks!=undefined&&(
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            </Link>
                            {link.subLinks!=undefined&&<div className={'flex flex-col bg-gray-100 ' + (link.subLinkOpen?'dropdown-visible':'dropdown-hidden')}>
                                {link.subLinks.map((subLink, subIndex)=>(
                                    <Link to={subLink.to} className="">
                                    <div 
                                        key={subIndex} 
                                        className={'ml-8 py-2 px-2 flex flex-row space-x-4 justify-self-start items-center '+(link.subLinkActiveIndex==subIndex?'text-blue-500':'text-black')}
                                        onClick={()=>{
                                            var newLinks=[...links]
                                            newLinks[index].subLinkActiveIndex=subIndex
                                            setActiveIndex(index)
                                            setLinks(newLinks)
                                        }}
                                        onBlur={()=>{
                                        
                                            var newLinks=[...links]
                                            newLinks[index].subLinkActiveIndex=-1
                                            newLinks[index].subLinkOpen=false
                                            setLinks(newLinks)
                                        }}
                                    >
                                        <div className='text-black'>
                                            {subLink.icon}
                                        </div>
                                        <div>{subLink.title}</div>
                                    </div>
                                    </Link>
                                ))}
                            </div>}
                        </div>
                    ))}
                    {/* <div className='flex flex-row space-x-4 justify-self-start items-center'>
                        <div className='text-black'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <div>Users</div>
                    </div>

                    <div className='flex flex-row space-x-4 justify-self-start items-center'>
                        <div className='text-black'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <div className='py-2'>Hostel Registry</div>
                    </div>

                    <div className='flex flex-row space-x-4 justify-self-start items-center'>
                        <div className='text-black'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <div className='py-2'>Allotment Rules</div>
                    </div>

                    <div className='flex flex-row space-x-4 justify-self-start items-center'>
                        <div className='text-black'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <div className='py-2'>Application Paths</div>
                    </div> */}
                </div>

                <div className='flex flex-col justify-end h-full w-full px-2'>
                    <div className='flex flex-row space-x-4 justify-self-start items-center'>
                        <div className='text-black'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <div className='py-2'>Change Password</div>
                    </div>

                    <div className='flex flex-row space-x-4 justify-self-start items-center'>
                        <div className='text-black'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <div className='py-2'>Logout</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SideBar