import InfoIcon from '@mui/icons-material/Info';
function MessOutForm() {
  return (
    <div className='mb-3'>
        <h2 className='font-semibold text-lg mb-2'>Apply for Mess Out</h2>
        <div className='grid grid-cols-2 w-6/12 gap-4 mb-3'>
            <label htmlFor="">Period of Leave From:</label>  <input type="date" className="border-solid border-2 rounded-lg ml-3 p-1"/>
            <label htmlFor="">To:</label> <input type="date" className="border-solid border-2 rounded-lg ml-3 p-1"/>
        </div>
        <p className="flex items-center"><InfoIcon className="text-sm"/>Minimum 4 days of leave is required for Mess Out</p>
        <div className="w-full flex items-end justify-end mt-5">
                <button className="ml-auto p-3 bg-stone-800 text-white rounded-xl">Submit</button>
        </div>
    </div>

    )
}
export default MessOutForm