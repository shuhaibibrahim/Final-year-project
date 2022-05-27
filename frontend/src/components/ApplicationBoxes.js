import { useState,useEffect } from 'react'
import axios from "axios"
import { baseUrl } from "../baseUrl"
import ApplicationBox from "./ApplicationBox"
function ApplicationBoxes() {

    useEffect(() => {
      axios.get(`${baseUrl}/inmate/formtemplate`)
      .then(res=>{
          console.log(res.data)
          setApplications(res.data)
      })
    }, [])
    
    // const applications=[
    //     {
    //         title:"Inmate Certificate",
    //         description:"",
    //         fields:`{
    //             "Purpose": {
    //                           "tag":"textarea",
    //                           "label":"Purpose",
    //                           "name":"purpose",
    //                           "type":"text"
    //                         },
    //             "Remarks": {
    //                           "tag":"textarea",
    //                           "label":"Remarks",
    //                           "name":"remarks",
    //                           "type":"text"
    //                         }
    //         }`   
    //     },
    //     {
    //         title:"Fee Structure Certificate",
    //         description:"",
    //         fields:`{
    //             "Purpose": {
    //                         "tag":"textarea",
    //                         "label":"Purpose",
    //                         "name":"purpose",
    //                         "type":"text"
    //                         },
    //             "Remarks": {
    //                         "tag":"textarea",
    //                         "label":"Purpose",
    //                         "name":"purpose",
    //                         "type":"text"
    //                         }
    //         }`   
    //     },
    //     {
    //         title:"No Due Certificate",
    //         description:"",
    //         fields:`{
    //             "Purpose": {
    //                             "tag":"textarea",
    //                             "label":"Purpose",
    //                             "name":"purpose",
    //                             "type":"text"
    //                         },
    //             "Remarks": {
    //                             "tag":"textarea",
    //                             "label":"Purpose",
    //                             "name":"purpose",
    //                             "type":"text"
    //                         }
    //         }`   
    //     }
    // ]
    const [applications,setApplications]=useState([])
    return (
        <div className="grid grid-cols-3 gap-3 w-11/12">
            {applications.map((item,index)=>{
                return(
                    <ApplicationBox key={index} applicationTitle={item.name} fields={item.application_template} certificateId={item.certificate_id}/>
                )
            })}
        </div>
    )
}

export default ApplicationBoxes