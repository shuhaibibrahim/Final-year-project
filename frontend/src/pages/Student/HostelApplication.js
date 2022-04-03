import {useState} from "react"
import {motion} from "framer-motion" 
import ArrowRight from "../../icons/arrowright.svg"
function HostelApplication() {
  const [currpage,setCurrPage]=useState(1)
  return (
    <div className='flex flex-col w-full items-center'>
      <div className='flex flex-row justify-between w-10/12 pt-4 items-center'>
        <div className='text-xl font-bold'>Apply for Hostel</div>
        <div className='flex flex-row space-x-4 items-center'>
            <div className='bg-white border rounded-full w-10 aspect-square'/>
            <div>user Name</div>
        </div>
      </div>

      <motion.div initial={{scale:0.8}} animate={{scale:1}} className='w-10/12 mt-12 bg-white rounded-xl text-left p-5'>
        {currpage===1 && <div><h2 className="font-bold">Rules</h2>
        <ol className="list-decimal pl-5 pt-2 ">
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, ab!</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, ab!</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, ab!</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, ab!</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, ab!</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, ab!</li>
        </ol>
        <div className="w-full flex items-end justify-end mt-5">
            <motion.button whileHover={{x:10, backgroundColor:'green'}}  className="ml-auto p-3 bg-stone-800 text-white rounded-xl" onClick={()=>setCurrPage(currpage+1)}>Proceed to Apply</motion.button>
        </div></div>}

        {currpage===2 && <div><h2 className="font-bold">Personal Details</h2>
        <form action="">
            <div className="grid grid-cols-2 w-6/12">
              <label htmlFor="" className="mt-2">Admission Criteria</label>
              <input type="text" className="border-solid border-2 rounded-lg mt-2 px-1"/>
              <label htmlFor="" className="mt-2">Year of Admission</label>
              <input type="text" className="border-solid border-2 rounded-lg mt-2 px-1"/>
              <label htmlFor="" className="mt-2">Qualifying Exam</label>
              <input type="text" className="border-solid border-2 rounded-lg mt-2 px-1"/>
              <label htmlFor="" className="mt-2">Qualifying Exam Rank</label>
              <input type="text" className="border-solid border-2 rounded-lg mt-2 px-1"/>
              <label htmlFor="" className="mt-2">Admission Number</label>
              <input type="text" className="border-solid border-2 rounded-lg mt-2 px-1"/>
              <label htmlFor="" className="mt-2">University Number</label>
              <input type="text" className="border-solid border-2 rounded-lg mt-2 px-1"/>
            </div>
          <div className="w-full flex items-center justify-between mt-5">
              <motion.button whileHover={{x:-10, backgroundColor:'red'}}  className="p-3 bg-stone-800 text-white rounded-xl" onClick={()=>setCurrPage(currpage-1)}>Back</motion.button>
              <motion.button whileHover={{x:10, backgroundColor:'green'}}  className="p-3 bg-stone-800 text-white rounded-xl" onClick={()=>setCurrPage(currpage+1)}>Next</motion.button>
          </div>
        </form></div>}  

        {currpage===3 && <div><h2 className="font-bold">Personal Details</h2>
        <form action="">
            <div className="grid grid-cols-2 w-6/12">
              <label htmlFor="" className="mt-2">Date of Birth</label>
              <input type="date" className="border-solid border-2 rounded-lg mt-2 px-1"/>
              <label htmlFor="" className="mt-2">Category</label>
              <input type="text" className="border-solid border-2 rounded-lg mt-2 px-1"/>
              <label htmlFor="" className="mt-2">Caste</label>
              <input type="text" className="border-solid border-2 rounded-lg mt-2 px-1"/>
              <label htmlFor="" className="mt-2">BPL ?</label>
              <div className="flex items-center">
                <input type="radio" name="isbpl" value="Yes" className="border-solid border-2 rounded-lg mt-2 px-1"/><label htmlFor="" className="ml-1 mr-4">Yes</label>
                <input type="radio" name="isbpl" value="No" className="border-solid border-2 rounded-lg mt-2 px-1"/><label htmlFor="" className="ml-1">No</label>
              </div>
              <label htmlFor="" className="mt-2">Eligible for Fee Concession?</label>
              <div className="flex items-center">
                <input type="radio" name="feeconcession" value="Yes" className="border-solid border-2 rounded-lg mt-2 px-1"/><label htmlFor="" className="ml-1 mr-4">Yes</label>
                <input type="radio" name="feeconcession" value="No" className="border-solid border-2 rounded-lg mt-2 px-1"/><label htmlFor="" className="ml-1">No</label>
              </div>
              <label htmlFor="" className="mt-2">Religion</label>
              <input type="text" className="border-solid border-2 rounded-lg mt-2 px-1"/>
              <label htmlFor="" className="mt-2">Annual Income</label>
              <input type="text" className="border-solid border-2 rounded-lg mt-2 px-1"/>
            </div>
            <div className="w-full flex items-center justify-between mt-5">
              <motion.button whileHover={{x:-10, backgroundColor:'red'}}  className="p-3 bg-stone-800 text-white rounded-xl" onClick={()=>setCurrPage(currpage-1)}>Back</motion.button>
              <motion.button whileHover={{x:10, backgroundColor:'green'}}  className="p-3 bg-stone-800 text-white rounded-xl" onClick={()=>setCurrPage(currpage+1)}>Next</motion.button>
          </div>
        </form></div>}  

        {currpage===4 && <div><h2 className="font-bold">Personal Details</h2>
        <form action="">
            <div className="grid grid-cols-2 w-6/12">
              <label htmlFor="" className="mt-2">Parent Name</label>
              <input type="text" className="border-solid border-2 rounded-lg mt-2 px-1"/>
              <label htmlFor="" className="mt-2">Parent Number</label>
              <input type="text" className="border-solid border-2 rounded-lg mt-2 px-1"/>
              <label htmlFor="" className="mt-2">Local Guardian Name</label>
              <input type="text" className="border-solid border-2 rounded-lg mt-2 px-1"/>
              <label htmlFor="" className="mt-2">Local Guardian Number</label>
              <input type="text" className="border-solid border-2 rounded-lg mt-2 px-1"/>
              <label htmlFor="" className="mt-2">Parent Address</label>
              <textarea type="text" className="border-solid border-2 rounded-lg mt-2 px-1"/>
              <label htmlFor="" className="mt-2">Local Guardian Address</label>
              <textarea type="text" className="border-solid border-2 rounded-lg mt-2 px-1"/>
            </div>
            <div className="w-full flex items-center justify-between mt-5">
              <motion.button whileHover={{x:-10, backgroundColor:'red'}}  className="p-3 bg-stone-800 text-white rounded-xl" onClick={()=>setCurrPage(currpage-1)}>Back</motion.button>
              <motion.button whileHover={{x:10, backgroundColor:'green'}}  className="p-3 bg-stone-800 text-white rounded-xl">Submit Application</motion.button>
          </div>
        </form></div>}  

        

      </motion.div>
    </div>

  )
}

export default HostelApplication