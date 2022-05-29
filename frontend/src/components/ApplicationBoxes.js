import { useState,useEffect } from 'react'
import axios from "axios"
import { baseUrl } from "../baseUrl"
import ApplicationBox from "./ApplicationBox"
import Loading from './Loading'
function ApplicationBoxes() {

    const [loading,setLoading]=useState(true)
    const [applications,setApplications]=useState([])

    useEffect(() => {
      axios.get(`${baseUrl}/inmate/formtemplate`)
      .then(res=>{
          console.log(res.data)
          setApplications(res.data)
          setLoading(false)
      })
    }, [])

    return (
        <div className='w-11/12 flex items-center justify-center h-full'>
            {loading?<Loading className="mt-5"/>:<div className="grid grid-cols-3 gap-3 w-full">
            {applications.map((item,index)=>{
                return(
                    <ApplicationBox key={index} applicationTitle={item.name} fields={item.application_template} certificateId={item.certificate_id}/>
                )
            })}
            </div>}
        </div>
        
    )
}

export default ApplicationBoxes