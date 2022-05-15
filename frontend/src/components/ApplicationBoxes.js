import ApplicationBox from "./ApplicationBox"
function ApplicationBoxes() {
    const applications=[
        {
            title:"Inmate Certificate",
            description:""
        },
        {
            title:"Fee Structure Certificate",
            description:""
        },
        {
            title:"No Due Certificate",
            description:""
        }
    ]
    return (
        <div className="grid grid-cols-3 gap-3 w-11/12">
            {applications.map((item,index)=>{
                return(
                    <ApplicationBox key={index} applicationTitle={item.title} description={item.description}/>
                )
            })}
        </div>
    )
}

export default ApplicationBoxes