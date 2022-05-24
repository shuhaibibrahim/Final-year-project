import ApplicationBox from "./ApplicationBox"
function ApplicationBoxes() {
    const applications=[
        {
            title:"Inmate Certificate",
            description:"",
            fields:`{
                "Purpose": {
                              "tag":"textarea",
                              "label":"Purpose",
                              "name":"purpose",
                              "type":"text"
                            },
                "Remarks": {
                              "tag":"textarea",
                              "label":"Remarks",
                              "name":"remarks",
                              "type":"text"
                            }
            }`   
        },
        {
            title:"Fee Structure Certificate",
            description:"",
            fields:`{
                "Purpose": {
                            "tag":"textarea",
                            "label":"Purpose",
                            "name":"purpose",
                            "type":"text"
                            },
                "Remarks": {
                            "tag":"textarea",
                            "label":"Purpose",
                            "name":"purpose",
                            "type":"text"
                            }
            }`   
        },
        {
            title:"No Due Certificate",
            description:"",
            fields:`{
                "Purpose": {
                                "tag":"textarea",
                                "label":"Purpose",
                                "name":"purpose",
                                "type":"text"
                            },
                "Remarks": {
                                "tag":"textarea",
                                "label":"Purpose",
                                "name":"purpose",
                                "type":"text"
                            }
            }`   
        }
    ]
    return (
        <div className="grid grid-cols-3 gap-3 w-11/12">
            {applications.map((item,index)=>{
                return(
                    <ApplicationBox key={index} applicationTitle={item.title} description={item.description} fields={item.fields}/>
                )
            })}
        </div>
    )
}

export default ApplicationBoxes