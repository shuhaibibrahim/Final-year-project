import {useState} from "react"
import {motion} from "framer-motion" 
import RankList from "../../components/RankList"

function HostelApplication() {
  const [currpage,setCurrPage]=useState(1)
  const [tabSelected, setTabSelected] = useState(1)
  const [admno,setAdmno]=useState(180287)
  return (
    <div className='flex flex-col w-full items-center'>
      <div className='flex flex-row justify-between w-10/12 pt-4 items-center'>
        <div className='text-xl font-bold'>Apply for Hostel</div>
        <div className='flex flex-row space-x-4 items-center'>
            <div className='bg-white border rounded-full w-10 aspect-square'/>
            <div>user Name</div>
        </div>
      </div>

      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}} className='w-10/12 mt-12 bg-white rounded-xl text-left p-5'>
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
              <select name="" id="" className="border-solid border-2 rounded-lg mt-2 px-1">
                <option value="">Select an option</option>
                <option value="KEAM">KEAM</option>
                <option value="NATA">NATA</option>
                <option value="GoI(CSAB)">GoI(CSAB)</option>
                <option value="PMJK">PMJK</option>
                <option value="Lateral">Lateral Entry</option>
                <option value="Gate">GATE</option>
              </select>
              <label htmlFor="" className="mt-2">Year of Admission</label>
              <input type="number" className="border-solid border-2 rounded-lg mt-2 px-1"/>
              <label htmlFor="" className="mt-2">Qualifying Exam</label>
              <select name="" id="" className="border-solid border-2 rounded-lg mt-2 px-1">
                <option value="">Select an option</option>
                <option value="KEAM">KEAM</option>
                <option value="NATA">NATA</option>
                <option value="GoI(CSAB)">GoI(CSAB)</option>
                <option value="PMJK">PMJK</option>
                <option value="Lateral">Lateral Entry</option>
                <option value="Gate">GATE</option>
              </select>
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
              <input type="text" className="border-solid border-2 rounded-lg outline-0 mt-2 px-1"/>
              <label htmlFor="" className="mt-2">Religion</label>
              <select name="" id="" className="border-solid border-2 rounded-lg mt-2 px-1">
                <option value="">Select an option</option>
                <option value="Hindu">Hindu</option>
                <option value="Christian">Christian</option>
                <option value="Islam">Islam</option>
              </select>
              <label htmlFor="" className="mt-2">Caste</label>
              <input type="text" className="border-solid border-2 outline-0 rounded-md mt-2 px-1"/>
              <label htmlFor="" className="mt-2">BPL ?</label>
              <div className="flex items-center">
                <input type="radio" name="isbpl" value="Yes" className="border-solid border-2 mt-2 px-1"/><label htmlFor="" className="ml-1 mr-4">Yes</label>
                <input type="radio" name="isbpl" value="No" className="border-solid border-2 mt-2 px-1"/><label htmlFor="" className="ml-1">No</label>
              </div>
              <label htmlFor="" className="mt-2">Eligible for Fee Concession?</label>
              <div className="flex items-center">
                <input type="radio" name="feeconcession" value="Yes" className="border-solid border-2 rounded-lg mt-2 px-1"/><label htmlFor="" className="ml-1 mr-4">Yes</label>
                <input type="radio" name="feeconcession" value="No" className="border-solid border-2 rounded-lg mt-2 px-1"/><label htmlFor="" className="ml-1">No</label>
              </div>
              
              <label htmlFor="" className="mt-2">Annual Income</label>
              <input type="text" className="border-solid border-2 rounded-lg mt-2 px-1"/>
              <label htmlFor="" className="mt-2">Residential Address</label>
              <textarea type="text" className="border-solid border-2 rounded-lg mt-2 px-1"/>
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
              <motion.button whileHover={{x:10, backgroundColor:'green'}}  className="p-3 bg-stone-800 text-white rounded-xl" onClick={()=>setCurrPage(currpage+1)}>Submit Application</motion.button>
          </div>
        </form></div>}  
        {currpage===5 && <div>
          <div className='flex flex-row tex-black text-sm font-bold relative mb-5'>
              <div
                className='cursor-pointer '
                onClick={()=>{
                  setTabSelected(1)
                }}
              >
                  <div>View Status</div>
                  <div className={tabSelected===1?'mt-2 h-1 self-center w-12/12 bg-stone-800 rounded-full':''}/>
              </div>

              <div 
                className='ml-5 cursor-pointer'
                onClick={()=>{
                  setTabSelected(2)
                }}
              >
                <div>View Detailed RankList</div>
                <div className={tabSelected===2?'mt-2 h-1 w-12/12 self-center bg-stone-800 rounded-full':''}/>
              </div>
              <div 
                className='ml-5 cursor-pointer'
                onClick={()=>{
                  setTabSelected(3)
                }}
              >
                <div>Raise Complaint</div>
                <div className={tabSelected===3?'mt-2 h-1 w-12/12 self-center bg-stone-800 rounded-full':''}/>
                </div>
          </div>
          {tabSelected===1&& <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.3}} className="flex flex-col items-center justify-center">
            <h2 className="font-semibold text-green-700 text-lg mt-5 mb-5">Congratulations!! You have been allotted to Men's Hostel</h2>
            <div className="flex items-center justify-center w-full mt-5 mb-5">
              <div className="flex flex-col items-center justify-center p-5 bg-purple-800 rounded-lg mr-5">
                <h2 className="text-lg font-semibold text-white">Your Rank</h2>
                <hr/>
                <h1 className="text-2xl font-bold text-white">2</h1>
              </div>

              <div className="flex flex-col items-center justify-center p-5 bg-teal-700 rounded-lg ml-5">
                <h2 className="text-lg font-semibold text-white">Allotted Room</h2>
                <hr/>
                <h1 className="text-2xl font-bold text-white">A109</h1>
              </div>
            </div>
          
          </motion.div>
          }
          {tabSelected===2&& <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.3}}>
            <h1 className="font-semibold text-lg mb-5 mt-3">RankList</h1>
            <RankList admno={admno}/>
          </motion.div>
            
          }
          {tabSelected===3&& <motion.div className="pt-5" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.3}}>
            <form action="">
                <div className="grid grid-cols-2 gap-y-4 w-6/12">
                <label htmlFor="">Complaint:</label>
                <textarea name="" id="" rows="5" placeholder="Enter your complaint" className="border-solid border-2 rounded-lg ml-3 p-1" required></textarea>
                </div>
                <div className="w-full flex items-end justify-end mt-5">
                    <button className="ml-auto p-3 bg-stone-800 text-white rounded-xl">Submit Complaint</button>
                </div>
            </form>
            </motion.div>}
          </div>
      
        }
      </motion.div>
    </div>

  )
}

export default HostelApplication