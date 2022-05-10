import React, { useState } from 'react'
import {motion} from "framer-motion" 

function HostelAllotment() {
  const inmateDataMH=[
    {
      sino:"20",
      admNo:"1235",
      name:"shijin benny abraham",
      admissioncriteria:"Genral",
      yearofadmission:"2022",
      dept:"cse",
      batch:"batchId",
      phone:"9876857465",
      email:"xyz@gmail.com",
      qualifyingexam:"keam",
      qualifyingexamrank:"5",
      universitynumber:"TVE18CS001",
      dob:"01-01-2000",
      category:"",
      caste:"",
      bpl:"yes",
      feeconcession:"yes",
      religion:"",
      annualincome:"",
      Parentname:"",
      parentno:"",
      guardianname:"",
      guardianno:"",
      parentaddress:"",
      guardianaddress:"",


    },
    {
      sino:"20",
      admNo:"1235",
      name:"xyz",
      admissioncriteria:"Genral",
      yearofadmission:"2022",
      dept:"cse",
      batch:"batchId",
      phone:"9876857465",
      email:"xyz@gmail.com",
      qualifyingexam:"keam",
      qualifyingexamrank:"5",
      universitynumber:"TVE18CS001",
      dob:"01-01-2000",
      category:"",
      caste:"",
      bpl:"yes",
      feeconcession:"yes",
      religion:"",
      annualincome:"",
      Parentname:"",
      parentno:"",
      guardianname:"",
      guardianno:"",
      parentaddress:"",
      guardianaddress:"",


    },
    {
      sino:"20",
      admNo:"1235",
      name:"xyz",
      admissioncriteria:"Genral",
      yearofadmission:"2022",
      dept:"cse",
      batch:"batchId",
      phone:"9876857465",
      email:"xyz@gmail.com",
      qualifyingexam:"keam",
      qualifyingexamrank:"5",
      universitynumber:"TVE18CS001",
      dob:"01-01-2000",
      category:"",
      caste:"",
      bpl:"yes",
      feeconcession:"yes",
      religion:"",
      annualincome:"",
      Parentname:"",
      parentno:"",
      guardianname:"",
      guardianno:"",
      parentaddress:"",
      guardianaddress:"",


    },
    {
      sino:"20",
      admNo:"1235",
      name:"xyz",
      admissioncriteria:"Genral",
      yearofadmission:"2022",
      dept:"cse",
      batch:"batchId",
      phone:"9876857465",
      email:"xyz@gmail.com",
      qualifyingexam:"keam",
      qualifyingexamrank:"5",
      universitynumber:"TVE18CS001",
      dob:"01-01-2000",
      category:"",
      caste:"",
      bpl:"yes",
      feeconcession:"yes",
      religion:"",
      annualincome:"",
      Parentname:"",
      parentno:"",
      guardianname:"",
      guardianno:"",
      parentaddress:"",
      guardianaddress:"",


    },
    {
      sino:"20",
      admNo:"1235",
      name:"xyz",
      admissioncriteria:"Genral",
      yearofadmission:"2022",
      dept:"cse",
      batch:"batchId",
      phone:"9876857465",
      email:"xyz@gmail.com",
      qualifyingexam:"keam",
      qualifyingexamrank:"5",
      universitynumber:"TVE18CS001",
      dob:"01-01-2000",
      category:"",
      caste:"",
      bpl:"yes",
      feeconcession:"yes",
      religion:"",
      annualincome:"",
      Parentname:"",
      parentno:"",
      guardianname:"",
      guardianno:"",
      parentaddress:"",
      guardianaddress:"",


    },
    {
      sino:"20",
      admNo:"1235",
      name:"xyz",
      admissioncriteria:"Genral",
      yearofadmission:"2022",
      dept:"cse",
      batch:"batchId",
      phone:"9876857465",
      email:"xyz@gmail.com",
      qualifyingexam:"keam",
      qualifyingexamrank:"5",
      universitynumber:"TVE18CS001",
      dob:"01-01-2000",
      category:"",
      caste:"",
      bpl:"yes",
      feeconcession:"yes",
      religion:"",
      annualincome:"",
      Parentname:"",
      parentno:"",
      guardianname:"",
      guardianno:"",
      parentaddress:"",
      guardianaddress:"",


    },
    {
      sino:"20",
      admNo:"1235",
      name:"xyz",
      admissioncriteria:"Genral",
      yearofadmission:"2022",
      dept:"cse",
      batch:"batchId",
      phone:"9876857465",
      email:"xyz@gmail.com",
      qualifyingexam:"keam",
      qualifyingexamrank:"5",
      universitynumber:"TVE18CS001",
      dob:"01-01-2000",
      category:"",
      caste:"",
      bpl:"yes",
      feeconcession:"yes",
      religion:"",
      annualincome:"",
      Parentname:"",
      parentno:"",
      guardianname:"",
      guardianno:"",
      parentaddress:"",
      guardianaddress:"",


    },
    {
      sino:"20",
      admNo:"1235",
      name:"xyz",
      admissioncriteria:"Genral",
      yearofadmission:"2022",
      dept:"cse",
      batch:"batchId",
      phone:"9876857465",
      email:"xyz@gmail.com",
      qualifyingexam:"keam",
      qualifyingexamrank:"5",
      universitynumber:"TVE18CS001",
      dob:"01-01-2000",
      category:"",
      caste:"",
      bpl:"yes",
      feeconcession:"yes",
      religion:"",
      annualincome:"",
      Parentname:"",
      parentno:"",
      guardianname:"",
      guardianno:"",
      parentaddress:"",
      guardianaddress:"",


    }
  ]

  const inmateDataLH=[
    {
      sino:"21",
      admNo:"1235",
      name:"xyz",
      admissioncriteria:"Genral",
      yearofadmission:"2022",
      dept:"cse",
      batch:"batchId",
      phone:"9876857465",
      email:"xyz@gmail.com",
      qualifyingexam:"keam",
      qualifyingexamrank:"5",
      universitynumber:"TVE18CS001",
      dob:"01-01-2000",
      category:"",
      caste:"",
      bpl:"yes",
      feeconcession:"yes",
      religion:"",
      annualincome:"",
      Parentname:"",
      parentno:"",
      guardianname:"",
      guardianno:"",
      parentaddress:"",
      guardianaddress:"",


    },
    {
      sino:"21",
      admNo:"1235",
      name:"xyz",
      admissioncriteria:"Genral",
      yearofadmission:"2022",
      dept:"cse",
      batch:"batchId",
      phone:"9876857465",
      email:"xyz@gmail.com",
      qualifyingexam:"keam",
      qualifyingexamrank:"5",
      universitynumber:"TVE18CS001",
      dob:"01-01-2000",
      category:"",
      caste:"",
      bpl:"yes",
      feeconcession:"yes",
      religion:"",
      annualincome:"",
      Parentname:"",
      parentno:"",
      guardianname:"",
      guardianno:"",
      parentaddress:"",
      guardianaddress:"",
    },
    {
      sino:"21",
      admNo:"1235",
      name:"xyz",
      admissioncriteria:"Genral",
      yearofadmission:"2022",
      dept:"cse",
      batch:"batchId",
      phone:"9876857465",
      email:"xyz@gmail.com",
      qualifyingexam:"keam",
      qualifyingexamrank:"5",
      universitynumber:"TVE18CS001",
      dob:"01-01-2000",
      category:"",
      caste:"",
      bpl:"yes",
      feeconcession:"yes",
      religion:"",
      annualincome:"",
      Parentname:"",
      parentno:"",
      guardianname:"",
      guardianno:"",
      parentaddress:"",
      guardianaddress:"",
    },
    {
      sino:"21",
      admNo:"1235",
      name:"xyz",
      admissioncriteria:"Genral",
      yearofadmission:"2022",
      dept:"cse",
      batch:"batchId",
      phone:"9876857465",
      email:"xyz@gmail.com",
      qualifyingexam:"keam",
      qualifyingexamrank:"5",
      universitynumber:"TVE18CS001",
      dob:"01-01-2000",
      category:"",
      caste:"",
      bpl:"yes",
      feeconcession:"yes",
      religion:"",
      annualincome:"",
      Parentname:"",
      parentno:"",
      guardianname:"",
      guardianno:"",
      parentaddress:"",
      guardianaddress:"",
    },
    {
      sino:"21",
      admNo:"1235",
      name:"xyz",
      admissioncriteria:"Genral",
      yearofadmission:"2022",
      dept:"cse",
      batch:"batchId",
      phone:"9876857465",
      email:"xyz@gmail.com",
      qualifyingexam:"keam",
      qualifyingexamrank:"5",
      universitynumber:"TVE18CS001",
      dob:"01-01-2000",
      category:"",
      caste:"",
      bpl:"yes",
      feeconcession:"yes",
      religion:"",
      annualincome:"",
      Parentname:"",
      parentno:"",
      guardianname:"",
      guardianno:"",
      parentaddress:"",
      guardianaddress:"",
    },
    {
      sino:"21",
      admNo:"1235",
      name:"xyz",
      admissioncriteria:"Genral",
      yearofadmission:"2022",
      dept:"cse",
      batch:"batchId",
      phone:"9876857465",
      email:"xyz@gmail.com",
      qualifyingexam:"keam",
      qualifyingexamrank:"5",
      universitynumber:"TVE18CS001",
      dob:"01-01-2000",
      category:"",
      caste:"",
      bpl:"yes",
      feeconcession:"yes",
      religion:"",
      annualincome:"",
      Parentname:"",
      parentno:"",
      guardianname:"",
      guardianno:"",
      parentaddress:"",
      guardianaddress:"",
    },
    {
      sino:"21",
      admNo:"1235",
      name:"xyz",
      admissioncriteria:"Genral",
      yearofadmission:"2022",
      dept:"cse",
      batch:"batchId",
      phone:"9876857465",
      email:"xyz@gmail.com",
      qualifyingexam:"keam",
      qualifyingexamrank:"5",
      universitynumber:"TVE18CS001",
      dob:"01-01-2000",
      category:"",
      caste:"",
      bpl:"yes",
      feeconcession:"yes",
      religion:"",
      annualincome:"",
      Parentname:"",
      parentno:"",
      guardianname:"",
      guardianno:"",
      parentaddress:"",
      guardianaddress:"",
    },
    {
      sino:"21",
      admNo:"1235",
      name:"xyz",
      admissioncriteria:"Genral",
      yearofadmission:"2022",
      dept:"cse",
      batch:"batchId",
      phone:"9876857465",
      email:"xyz@gmail.com",
      qualifyingexam:"keam",
      qualifyingexamrank:"5",
      universitynumber:"TVE18CS001",
      dob:"01-01-2000",
      category:"",
      caste:"",
      bpl:"yes",
      feeconcession:"yes",
      religion:"",
      annualincome:"",
      Parentname:"",
      parentno:"",
      guardianname:"",
      guardianno:"",
      parentaddress:"",
      guardianaddress:"",
    }
  ]

  const [hostelDataSelected, setHostelDataSelected] = useState(inmateDataMH)
  const [tabSelected, setTabSelected] = useState("MH")
  const [selectedRowIndex, setSelectedRowIndex] = useState(-1)
  const [selectedHostel, setSelectedHostel] = useState(null)
  const [visible, setVisible] = useState(false);
  const [hidden, setHidden] = useState(false);


  const HostelList=()=>{
    return (
      // <div className='w-full'>
      <>
        {/* search and filter */}
        <div className='flex flex-row bg-primary rounded-lg w-11/12 items-center p-3 justify-between'>
          {/* search */}
          <div className='flex flex-row items-center bg-white rounded-lg text-sm px-2'>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input 
              placeholder='Search by name or by admission number'
              className='p-2 w-80 outline-none'
            />
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
          

          {/* filter and export*/}
          <div className='flex flex-row space-x-2 items-center'>
            <div className='py-2 cursor-pointer hover:bg-stone-600 px-3 bg-stone-800 text-white text-sm font-semibold rounded-2xl'>Filter</div>
            <div className='py-2 cursor-pointer hover:bg-stone-600 px-3 bg-stone-800 text-white text-sm font-semibold rounded-2xl'>Export</div>
          </div>
        </div>

        {/* inmates list */}
        <div className='w-11/12 overflow-auto'>
          <table className='w-full table-auto'>
              <tr className='bg-primary text-left sticky top-0'>
                <th >Si.No</th>
                <th className='py-3'>Admission Number</th>
                <th className='py-3'>Name</th>
                <th className='py-3'>Admission Criteria</th>
                 <th className='py-3'>Year of admission</th>
                {/* <th>Phone</th>
                <th>Email</th> */}
              </tr>
                {hostelDataSelected.map((user, index)=>(
                  <tr 
                    className={'border-b border-slate-200 border-solid '+(index==selectedRowIndex && selectedHostel==tabSelected ?' bg-blue-300 ':' hover:bg-gray-300')}
                    onClick={()=>{
                      if(selectedRowIndex==index && selectedHostel==tabSelected)
                      {
                        setSelectedRowIndex(-1)
                        setSelectedHostel(null)
                      }
                      else
                      {
                        setSelectedRowIndex(index)
                        setSelectedHostel(tabSelected) //"MH" or "LH"
                      }
                    }}
                  >
                    <td>{user.sino}</td>
                    <td className='py-3'>{user.admNo}</td>
                    <td>{user.name}</td>
                    <td>{user.admissioncriteria}</td>
                    <td>{user.yearofadmission}</td>
                    {/* <td>{user.phone}</td>
                    <td>{user.email}</td> */}
                  </tr>
                ))}
          </table>
        </div>
      </>
    )
  }

  const AssignRole=()=>{
    return (  
      <div className='flex flex-col w-11/12 overflow-y-scroll  '>
          {/* <div className='text-stone-800 font-bold text-lg'>Inmate - {selectedHostel}</div> */}
        
            <div className='text-stone-800 font-bold mb-5'>Details of the hostel applicant.</div>
          <div className='flex flex-row space-x-3 bg-primary p-8 rounded-xl'>
            <div className='grid grid-cols-2 gap-4 w-1/2'>
            <div className='text-stone-800 font-bold'>Name</div>
              <div> 
                <span className='text-stone-800 font-bold mr-3'>:</span>
                {selectedHostel=="MH"?
                              inmateDataMH[selectedRowIndex].name
                              :inmateDataLH[selectedRowIndex].name}
              </div>
              <div className='text-stone-800 font-bold'>Admission Number</div>
              <div> 
                <span className='text-stone-800 font-bold mr-3'>:</span>
                {selectedHostel=="MH"?
                              inmateDataMH[selectedRowIndex].admNo
                              :inmateDataLH[selectedRowIndex].admNo}
              </div>
              
              <div className='text-stone-800 font-bold'>Phone</div>
              <div> 
                <span className='text-stone-800 font-bold mr-3'>:</span>
                {selectedHostel=="MH"?
                              inmateDataMH[selectedRowIndex].phone
                              :inmateDataLH[selectedRowIndex].phone}
              </div>
              

              <div className='text-stone-800 font-bold'>admission Criteria</div>
              <div> 
                <span className='text-stone-800 font-bold mr-3'>:</span>
                {selectedHostel=="MH"?
                              inmateDataMH[selectedRowIndex].admissioncriteria
                              :inmateDataLH[selectedRowIndex].admissioncriteria}
              </div>

              <div className='text-stone-800 font-bold'>Qualifying Exam</div>
              <div> 
                <span className='text-stone-800 font-bold mr-3'>:</span>
                {selectedHostel=="MH"?
                              inmateDataMH[selectedRowIndex].qualifyingexam
                              :inmateDataLH[selectedRowIndex].qualifyingexam}
              </div>

              <div className='text-stone-800 font-bold'>UniversityNumber</div>
              <div> 
                <span className='text-stone-800 font-bold mr-3'>:</span>
                {selectedHostel=="MH"?
                              inmateDataMH[selectedRowIndex].universitynumber
                              :inmateDataLH[selectedRowIndex].universitynumber}
              </div>

              <div className='text-stone-800 font-bold'>Date of Birth</div>
              <div> 
                <span className='text-stone-800 font-bold mr-3'>:</span>
                {selectedHostel=="MH"?
                              inmateDataMH[selectedRowIndex].dob
                              :inmateDataLH[selectedRowIndex].dob}
              </div>
              <div className='text-stone-800 font-bold'>Caste</div>
              <div> 
                <span className='text-stone-800 font-bold mr-3'>:</span>
                {selectedHostel=="MH"?
                              inmateDataMH[selectedRowIndex].caste
                              :inmateDataLH[selectedRowIndex].caste}
              </div>
              <div className='text-stone-800 font-bold'>Eligible for Fee Concession</div>
              <div> 
                <span className='text-stone-800 font-bold mr-3'>:</span>
                {selectedHostel=="MH"?
                              inmateDataMH[selectedRowIndex].feeconcession
                              :inmateDataLH[selectedRowIndex].feeconcession}
              </div>
              <div className='text-stone-800 font-bold'>Parent Name</div>
              <div> 
                <span className='text-stone-800 font-bold mr-3'>:</span>
                {selectedHostel=="MH"?
                              inmateDataMH[selectedRowIndex].Parentname
                              :inmateDataLH[selectedRowIndex].Parentname}
              </div>
              <div className='text-stone-800 font-bold'>Local Guardian Name</div>
              <div> 
                <span className='text-stone-800 font-bold mr-3'>:</span>
                {selectedHostel=="MH"?
                              inmateDataMH[selectedRowIndex].guardianname
                              :inmateDataLH[selectedRowIndex].guardianname}
              </div>
              <div className='text-stone-800 font-bold'>Parent Address</div>
              <div> 
                <span className='text-stone-800 font-bold mr-3'>:</span>
                {selectedHostel=="MH"?
                              inmateDataMH[selectedRowIndex].parentaddress
                              :inmateDataLH[selectedRowIndex].parentaddress}
              </div>
              
            </div>
            <div className='grid grid-cols-2 gap-4 w-1/2'>
            <div className='text-stone-800 font-bold'>Department</div>
              <div> 
                <span className='text-stone-800 font-bold mr-3'>:</span>
                {selectedHostel=="MH"?
                              inmateDataMH[selectedRowIndex].dept
                              :inmateDataLH[selectedRowIndex].dept}
              </div>
              <div className='text-stone-800 font-bold'>Batch</div>
              <div> 
                <span className='text-stone-800 font-bold mr-3'>:</span>
                {selectedHostel=="MH"?
                              inmateDataMH[selectedRowIndex].batch
                              :inmateDataLH[selectedRowIndex].batch}
              </div>

              <div className='text-stone-800 font-bold'>Email</div>
              <div> 
                <span className='text-stone-800 font-bold mr-3'>:</span>
                {selectedHostel=="MH"?
                              inmateDataMH[selectedRowIndex].email
                              :inmateDataLH[selectedRowIndex].email}
              </div>
              <div className='text-stone-800 font-bold'>Year of Admission</div>
              <div> 
                <span className='text-stone-800 font-bold mr-3'>:</span>
                {selectedHostel=="MH"?
                              inmateDataMH[selectedRowIndex].yearofadmission
                              :inmateDataLH[selectedRowIndex].yearofadmission}
              </div>
              <div className='text-stone-800 font-bold'>Qualifying Exam Rank</div>
              <div> 
                <span className='text-stone-800 font-bold mr-3'>:</span>
                {selectedHostel=="MH"?
                              inmateDataMH[selectedRowIndex].qualifyingexamrank
                              :inmateDataLH[selectedRowIndex].qualifyingexamrank}
              </div>
              <div className='text-stone-800 font-bold'>Category</div>
              <div> 
                <span className='text-stone-800 font-bold mr-3'>:</span>
                {selectedHostel=="MH"?
                              inmateDataMH[selectedRowIndex].category
                              :inmateDataLH[selectedRowIndex].category}
              </div>
              <div className='text-stone-800 font-bold'>BPL</div>
              <div> 
                <span className='text-stone-800 font-bold mr-3'>:</span>
                {selectedHostel=="MH"?
                              inmateDataMH[selectedRowIndex].bpl
                              :inmateDataLH[selectedRowIndex].bpl}
              </div>
              <div className='text-stone-800 font-bold'>Religion</div>
              <div> 
                <span className='text-stone-800 font-bold mr-3'>:</span>
                {selectedHostel=="MH"?
                              inmateDataMH[selectedRowIndex].religion
                              :inmateDataLH[selectedRowIndex].religion}
              </div>
              <div className='text-stone-800 font-bold'>Annual Income</div>
              <div> 
                <span className='text-stone-800 font-bold mr-3'>:</span>
                {selectedHostel=="MH"?
                              inmateDataMH[selectedRowIndex].annualincome
                              :inmateDataLH[selectedRowIndex].annualincome}
              </div>
              <div className='text-stone-800 font-bold'>Parent Number</div>
              <div> 
                <span className='text-stone-800 font-bold mr-3'>:</span>
                {selectedHostel=="MH"?
                              inmateDataMH[selectedRowIndex].parentno
                              :inmateDataLH[selectedRowIndex].parentno}
              </div>
              <div className='text-stone-800 font-bold'>Local Guardian Number</div>
              <div> 
                <span className='text-stone-800 font-bold mr-3'>:</span>
                {selectedHostel=="MH"?
                              inmateDataMH[selectedRowIndex].guardianno
                              :inmateDataLH[selectedRowIndex].guardianno}
              </div>
              <div className='text-stone-800 font-bold'>Local Guardian Address</div>
              <div> 
                <span className='text-stone-800 font-bold mr-3'>:</span>
                {selectedHostel=="MH"?
                              inmateDataMH[selectedRowIndex].guardianaddress
                              :inmateDataLH[selectedRowIndex].guardianaddress}
              </div>


            
            </div>
            
        </div>
          
            <div className="w-full flex items-end justify-end mt-5">
            {!hidden && <div className='mr-3 mb-3 p-3 py-2 cursor-pointer hover:bg-stone-600 px-3 bg-stone-800 text-white text-sm font-semibold rounded-2xl' onClick={()=>{setVisible(!visible); setHidden(true)} }>Continue</div>}

        

        </div>

          {/* <div className='mt-5 mb-1 text-stone-800 text-md font-semibold'>Select Role</div>
          <select className='p-3 ring-slate-200 ring-2 rounded-xl w-1/4 outline-none'>
            <option value={null}>NIL</option>
            <option value="md">Mess Director</option>
            <option value="ms">Mess Secretory</option>
          </select>

          <button className='mt-5 rounded-xl p-2 bg-green-500 w-2/12 text-white font-bold hover:bg-green-700'>Update</button>
           */}
        {visible && <div><h2 className="font-bold">Enter semester marks</h2>
        <form action="">
            <div className="grid grid-cols-2 w-6/12">
              <label htmlFor="" className="mt-2">S1</label>
              {/* <input type="number" min="0" max="10" step="0.01" className="border-solid border-2 rounded-lg mt-2 px-1"/> */}
              <div>7.86</div>
              <label htmlFor="" className="mt-2">S2</label>
              {/* <input type="number" min="0" max="10" className="border-solid border-2 rounded-lg mt-2 px-1"/> */}
              <div>8.35</div>

              <label htmlFor="" className="mt-2">S3</label>
              {/* <input type="number" min="0" max="10" className="border-solid border-2 rounded-lg mt-2 px-1"/> */}
              <div>9.51</div>

              <label htmlFor="" className="mt-2">S4</label>
              {/* <input type="number" min="0" max="10" className="border-solid border-2 rounded-lg mt-2 px-1"/> */}
              <div>6.94</div>

              <label htmlFor="" className="mt-2">S5</label>
              {/* <input type="number" min="0" max="10" className="border-solid border-2 rounded-lg mt-2 px-1"/> */}
              <div>10.00</div>

              <label htmlFor="" className="mt-2">S6</label>
              {/* <input type="number" min="0" max="10" className="border-solid border-2 rounded-lg mt-2 px-1"/> */}
              <div>6.84</div>

              <label htmlFor="" className="mt-2">S7</label>
              {/* <input type="number" min="0" max="10" className="border-solid border-2 rounded-lg mt-2 px-1"/> */}
              <div>7.32</div>

              <label htmlFor="" className="mt-2">S8</label>
              {/* <input type="number" min="0" max="10" className="border-solid border-2 rounded-lg mt-2 px-1"/> */}
              <div>9.99</div>

            </div>
          <div className=" flex items-end justify-end mt-5">
              {/* <motion.button whileHover={{x:-10, backgroundColor:'red'}}  className="p-3 bg-stone-800 text-white rounded-xl ml-5" onClick={()=>setCurrPage(currpage-1)}>Back</motion.button> */}
              <motion.button whileHover={{x:10, backgroundColor:'green'}}  className="p-1.5 bg-stone-800 text-white font-semibold rounded-2xl mr-5" onClick={(e)=>{e.preventDefault()}}>Submit</motion.button>
          </div>
        </form></div>}  
        </div>

    )
  }

  return (
    <div className='flex flex-col w-full items-center min-h-screen h-full'>
        <div className='w-full flex justify-center pt-4'>
          <div className='flex flex-row justify-between w-11/12 items-center'>
            <div className='text-xl font-bold'>Hostel Application Dashboard</div>
            <div className='flex flex-row space-x-4 items-center'>
                <div className='bg-white border rounded-full w-10 aspect-square'/>
                <div>user Name</div>
            </div>
        </div>
      </div>

      <div className='flex flex-col items-center py-8 space-y-4 w-11/12 mt-8 bg-white rounded-xl admin-dashbord-height'>
        {/* white box nav bar */}
        <div className='flex flex-row justify-between w-11/12 items-center'>
          <div className='flex flex-row tex-black text-sm font-bold relative'>
              <div
                className='cursor-pointer '
                onClick={()=>{
                  setHostelDataSelected(inmateDataMH)
                  setTabSelected("MH")
                }}
              >
                  <div>Mens Hostel <span className='ml-2 p-2 text-white bg-stone-800 rounded-lg cursor-default'>200</span></div>
                  <div className={tabSelected=="MH"?'h-1 self-center w-8/12 bg-stone-800 rounded-full':''}/>
              </div>

              <div 
                className='ml-5 cursor-pointer'
                onClick={()=>{
                  setHostelDataSelected(inmateDataLH)
                  setTabSelected("LH")
                }}
              >
                <div>Ladies Hostel <span className='ml-2 p-2 text-white bg-stone-800 rounded-lg cursor-default'>200</span></div>
                <div className={tabSelected=="LH"?'h-1 w-8/12 self-center bg-stone-800 rounded-full':''}/>
              </div>

              {selectedRowIndex!=-1&& <motion.div initial={{scale:0.8}} animate={{scale:1}}  
                className={'ml-5 -mt-2 cursor-pointer text-green-600 bg-primary p-2 flex items-center rounded-xl '+(tabSelected=="roles"?' bg-green-600 text-white ':'')}
                onClick={()=>{
                   setTabSelected("roles")
                }}
              >
                <div>View Details</div>
                {/* <div className={tabSelected=="roles"?'mt-2 h-1 w-full self-center bg-stone-800 rounded-full':''}/> */}
              </motion.div>}
          </div>

          {tabSelected!="roles"&&<div className='text-sm mb-2'>Showing 1-8 out of 200 results</div>}
        </div>

        {tabSelected!="roles"&&<HostelList />}
        {tabSelected=="roles"&&<AssignRole />}
      </div>
    </div>
  )
}

export default HostelAllotment