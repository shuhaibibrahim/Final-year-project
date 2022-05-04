import {motion} from "framer-motion" 
function NonInmateCertificate() {
    return (
      <div  className='flex flex-col w-full items-center'>
        <div className='flex flex-row justify-between w-10/12 pt-4 items-center'>
          <div className='text-xl font-bold'>Apply for Non Inmate Certificate</div>
          <div className='flex flex-row space-x-4 items-center'>
              <div className='bg-white border rounded-full w-10 aspect-square'/>
              <div>user Name</div>
          </div>
        </div>
  
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}} className='w-10/12 mt-12 bg-white rounded-xl p-5'>
          <form action="">
            <div className="grid grid-cols-2 gap-y-4 w-6/12">
                <label htmlFor="">Nature of Certificate:</label>
                <p className="ml-3">Non Inmate Certificate</p>
                <label htmlFor="">Purpose of Certificate:</label>
                <textarea placeholder="Enter the purpose for applying" className="border-solid border-2 rounded-lg ml-3 p-1"/>
                <label htmlFor="">Remarks (if any):</label>
                <textarea placeholder="Enter remarks" className="border-solid border-2 rounded-lg ml-3 p-1"/>
            </div>
            <div className="w-full flex items-end justify-end mt-5">
                <button className="ml-auto p-3 bg-stone-800 text-white rounded-xl">Apply for certificate</button>
            </div>
          </form>
        </motion.div>
      </div>
    )
  }
  
  export default NonInmateCertificate