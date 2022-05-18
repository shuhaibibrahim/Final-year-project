import InfoIcon from '@mui/icons-material/Info';
import axios from 'axios';
import {useState} from 'react'
import AlertDialog from './AlertDialog';
import ConfirmDialog from './ConfirmDialog';
function MessOutForm({noofDays}) {
    const [fromDate,setFromDate]=useState("")
    const [toDate,setToDate]=useState("")
    const [modalText,setModalText]=useState("")
    const [modalHeading,setModalHeading]=useState("")
    const [days,setDays]=useState(0)
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);

    const submitForm = ()=>{
        axios.post('http://localhost:8080/inmate/messout',{
                    fromDate:fromDate,
                    toDate:toDate
                }).then((res)=>{
                    alert("Submitted Mess Out")
                    console.log(res)
                })
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        var fdate=new Date(fromDate)
        var tdate=new Date(toDate)
        if(fdate.getTime()>tdate.getTime()){
            setModalHeading("Invalid Date")
            setModalText("Check the dates entered.")
            setOpen1(true)
        }
        else{
            var days=(tdate.getTime()-fdate.getTime())/(1000 * 3600 * 24)
            setDays(days)
            if(days<noofDays){
                setModalHeading("Not Applicable")
                setModalText("Mess Out not allowed for "+days+" days")
                setOpen1(true)
            }
            else{
                setModalHeading("Confirmation")
                setModalText("You have filled Mess Out for "+days+" days from "+fromDate+" to "+toDate+". Do you want to confirm?")
                setOpen2(true)
            }

        }
        
    }
    return (
        <div className='mb-3'>
            <h2 className='font-semibold text-lg mb-2'>Apply for Mess Out</h2>
            <form onSubmit={submitHandler}>
                <div className='grid grid-cols-2 w-6/12 gap-4 mb-3'>
                    <label htmlFor="">Period of Leave From:</label>  <input type="date" value={fromDate} onChange={(e)=>{setFromDate(e.target.value)}} className="w-full py-2 px-3 rounded-xl ring-2 ring-slate-300 focus:outline-none" required/>
                    <label htmlFor="">To:</label> <input type="date" value={toDate} onChange={(e)=>{setToDate(e.target.value)}} className="w-full py-2 px-3 rounded-xl ring-2 ring-slate-300 focus:outline-none" required/>
                </div>
                <p className="flex items-center"><InfoIcon className="text-sm mr-1"/> Minimum {noofDays} days of leave is required for Mess Out</p>
                <div className="w-full flex items-end justify-end mt-5">
                    <button type="submit" className="ml-auto p-3 bg-stone-800 text-white rounded-xl">Submit</button>
                </div>
            </form>
            <AlertDialog open={open1} setOpen={setOpen1} modalHeading={modalHeading} modalText={modalText}/>
            <ConfirmDialog open={open2} setOpen={setOpen2} modalHeading={modalHeading} modalText={modalText} confirmFunction={submitForm}/>
            
        </div>

    )
}
export default MessOutForm