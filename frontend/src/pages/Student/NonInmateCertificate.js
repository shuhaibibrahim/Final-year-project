function NonInmateCertificate() {
    return (
      <div className='flex flex-col w-full items-center'>
        <div className='flex flex-row justify-between w-10/12 pt-4 items-center'>
          <div className='text-xl font-bold'>Apply for Inmate Certificate</div>
          <div className='flex flex-row space-x-4 items-center'>
              <div className='bg-white border rounded-full w-10 aspect-square'/>
              <div>user Name</div>
          </div>
        </div>
  
        <div className='w-10/12 mt-12 bg-white rounded-xl p-5'>
          <form action="">
            <div className="flex items-center">
                <label htmlFor="">Nature of Certificate:</label>
                <p className="ml-3">Non Inmate Certificate</p>
            </div>
            <div className="flex items-center">
                <label htmlFor="">Purpose of Certificate:</label>
                <textarea placeholder="Enter the purpose for applying" className="border-solid border-2 rounded-lg ml-3"/>
            </div>
            <div className="flex items-center">
                <label htmlFor="">Remarks (if any):</label>
                <textarea placeholder="Enter remarks" className="border-solid border-2 rounded-lg ml-3"/>
            </div>
            <div className="w-full flex items-end justify-end mt-5">
                <button className="ml-auto p-3 bg-stone-800 text-white rounded-xl">Apply for certificate</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
  
  export default NonInmateCertificate