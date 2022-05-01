import Uploader from "./Uploader"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
function UploadMessBill() {
  return (
    <div className="w-11/12">
        <h2 className="font-semibold mb-3">Upload Mess Bill</h2>
        <Uploader/>
        <div className="grid grid-cols-2 w-6/12 mt-5 gap-y-4">
          <label htmlFor="">Month: </label>
          <input type="text" className="border-solid border-2 rounded-lg ml-3 p-1"/>
          <label htmlFor="">Year: </label>
          <input type="text" className="border-solid border-2 rounded-lg ml-3 p-1"/>
        </div>
        
        <div className="w-full flex items-end justify-end mt-5">
          <button className="ml-auto p-3 bg-stone-800 text-white rounded-xl"><CloudUploadIcon/> Upload Mess Bill</button>
        </div>
    </div>
  )
}

export default UploadMessBill