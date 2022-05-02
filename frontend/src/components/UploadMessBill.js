import Uploader from "./Uploader"
import {useState} from "react"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
function UploadMessBill() {
  const [uploaded,setUploaded]=useState(false);
  const SubmitHandler = (e) =>{
    e.preventDefault();
    if(!uploaded)
      alert("Upload a file")
  }
  return (
    <div className="w-11/12">
        <h2 className="font-semibold mb-3">Upload Mess Bill</h2>
        <Uploader uploaded={uploaded} setUploaded={setUploaded}/>
        <form>
          <div className="grid grid-cols-2 w-6/12 mt-5 gap-y-4 items-center justify-center">
            <label htmlFor="">Month and Year:</label>
            <input type="month" className="border-solid border-2 rounded-lg ml-3 p-1" required/>
          </div>
        
          <div className="w-full flex items-end justify-end mt-5">
            <button className="ml-auto p-3 bg-stone-800 text-white rounded-xl" onClick={SubmitHandler}><CloudUploadIcon/> Upload Mess Bill</button>
          </div>
        </form>
    </div>
  )
}

export default UploadMessBill