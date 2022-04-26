import React, { useEffect, useState } from 'react'
import Spreadsheet from "react-spreadsheet";

function AllotmentRule() {
  
  const allColumns=[
    "Keam Rank",
    "Location",
    "Family Annual Income",
    "col 1",
    "col 2",
    "col 3",
    "col 4",
    "col 5",
    "col 6"
  ]

  const columns=[
    "Keam Rank",
    "Location",
    "Family Annual Income"
  ]

  const derivedColumns=[
    "derivedCol1",
    "derivedCol2",
    "derivedCol3"
  ]
  
  const tabs=["Current Rule", "Update Rule"]

  const [allColumnsData, setAllColumnsData] = useState(allColumns)

  //current rules states
  const [columnsData, setColumnsData] = useState(columns)
  const [derivedColumnsData, setDerivedColumnsData] = useState(derivedColumns)
  
  //udated rules states
  const [updatedColumnsData, setUpdatedColumnsData] = useState(columns)
  const [updatedDerivedColumnsData, setUpdatedDerivedColumnsData] = useState(derivedColumns)
  const [selectedColumnIndex, setSelectedColumnIndex] = useState(-1)

  const [rankRule, setRankRule] = useState("Keam Rank, Family Annual Income, Location, derivedCol1")
  const [rankSortOrder, setRankSortOrder] = useState("Ascending")
  
  
  const [tabSelected, setTabSelected] = useState(0) //selected tab index
  const [modal, setModal] = useState(null) //modal showing columns

  const [modalType, setModalType] = useState(0) //0 for existing attribute modal 1 for derived attribute modal
  const backdropClickHandler = (event) => {
    if (event.target === event.currentTarget) {
        // setModal(<div/>)
        setModal(null)
        setSelectedColumnIndex(-1)
    }
  }

  useEffect(() => {
    if(modal!=null)
      RenderModal()
  }, [selectedColumnIndex, modalType])
  

  const RenderModal=(item)=>{
    // 
    if(modalType===0)
      setModal(
          <div onClick={backdropClickHandler} className="bg-slate-500/[.8] z-20 fixed inset-0 flex justify-center items-center">
              <div className='flex flex-col bg-white rounded-2xl w-5/12 h-1/2 pt-3 relative overflow-hidden'>

                  <div
                      // className='absolute top-1 right-1 flex justify-center items-center bg-red-500 aspect-square w-7 h-7 cursor-pointer text-center text-xs font-bold text-white rounded-full hover:bg-red-700'
                      className='absolute top-1 right-1 cursor-pointer text-red-500 cursor-pointer rounded-full hover:text-red-700'
                      onClick={()=>{
                          setModal(null)
                          setSelectedColumnIndex(-1)
                      }}
                  >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                  </div>
                  
                  <div className='text-stone-800 border-b border-solid border-stone-800 text-lg p-2 font-semibold w-full'>All Column Fields</div>

                  <div className='overflow-y-auto w-full'>
                    {allColumnsData.map((item, index)=>(
                      <div 
                        key={index} 
                        className={'text-stone-800 text-base font-medium w-full p-3'+(index==selectedColumnIndex?' bg-blue-300 ':' hover:bg-gray-300')}
                        onClick={()=>{
                          if(selectedColumnIndex!=index)
                            setSelectedColumnIndex(index)
                          else
                            selectedColumnIndex(-1)
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* Add button */}
                  <div className='flex p-2 justify-end'>
                    <button 
                      className='button-blue self-end'
                      onClick={()=>{
                        if(selectedColumnIndex!=-1)
                        {
                          setUpdatedColumnsData([...updatedColumnsData,allColumnsData[selectedColumnIndex]])
                          setModal(null)
                        }
                      }}
                    >
                      Add column
                    </button>
                  </div>
              </div>
          </div>
      )
    else  if(modalType===1)
      setModal(
        <div onClick={backdropClickHandler} className="bg-slate-500/[.8] z-20 fixed inset-0 flex justify-center items-center">
            <div className='flex flex-col bg-white rounded-2xl w-5/12 h-1/2 pt-3 relative overflow-hidden'>

                <div
                    // className='absolute top-1 right-1 flex justify-center items-center bg-red-500 aspect-square w-7 h-7 cursor-pointer text-center text-xs font-bold text-white rounded-full hover:bg-red-700'
                    className='absolute top-1 right-1 cursor-pointer text-red-500 cursor-pointer rounded-full hover:text-red-700'
                    onClick={()=>{
                        setModal(null)
                        setSelectedColumnIndex(-1)
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                
                <div className='text-stone-800 border-b border-solid border-stone-800 text-lg p-2 font-semibold w-full'>
                  Functions Available : SUM(), AVG(), COUNT(), MAX(), MIN()
                </div>

                <div className='flex flex-col mt-2 bg-white rounded-lg text-sm px-2'>
                    <div className='text-stone-800'>Attribute Name</div>
                    <input 
                      placeholder='Search by name or by admission number'
                      className='p-2 w-80 outline-none ring-slate-200 ring-2 rounded-xl'
                    />

                    <div className='mt-2 text-stone-800'>Attribute Formula</div>
                    <input 
                      placeholder='Search by name or by admission number'
                      className='p-2 w-80 outline-none ring-slate-200 ring-2 rounded-xl'
                    />
                </div>

                {/* Add button */}
                <div className='flex p-2 justify-end'>
                  <button 
                    className='button-blue self-end'
                    onClick={()=>{
                      if(selectedColumnIndex!=-1)
                      {
                        setUpdatedColumnsData([...updatedColumnsData,allColumnsData[selectedColumnIndex]])
                        setModal(null)
                      }
                    }}
                  >
                    Add column
                  </button>
                </div>
            </div>
        </div>
      )

  }

  const currentRule=()=>{
    return(
      <div className='w-full flex flex-col overflow-y-auto'>
        <div
          className='text-left w-11/12 text-stone-800 mt-3 text-lg font-bold mt-2 mb-1'
        >
          Existing Columns
        </div>

        <div className='flex flex-wrap w-full mt-5'>  
        {/* sfasfsdfsd */}
          {columnsData.map((item, index)=>(
            <div key={index} className='text-center mr-2 py-2 px-3 bg-stone-800 text-white text-sm font-medium rounded-full'>
              {item}
            </div>
          ))}
        </div>
        <hr className='w-full mt-7 self-center h-px bg-stone-800' />

        <div
          className='text-left w-11/12 text-stone-800 mt-3 text-lg font-bold mt-2 mb-1'
        >
          Derived Columns
        </div>

        <div className='flex flex-wrap w-full mt-5'>  
        {/* sfasfsdfsd */}
          {derivedColumnsData.map((item, index)=>(
            <div key={index} className='text-center mr-2 mt-2 py-2 px-3 bg-stone-800 text-white text-sm font-medium rounded-full'>
              {item}
            </div>
          ))}
        </div>

        <hr className='w-full mt-7 self-center h-px bg-stone-800' />

        <div
          className='text-left w-11/12 text-stone-800 mt-3 text-lg font-bold mt-2 mb-1'
        >
          Rank Rule
        </div>
        
        <div className='mt-5 text-stone-800'>
          <span className='text-stone-800 font-semibold text-base'>( {rankRule} )</span> sort by <span className='text-stone-800 font-semibold text-base'>{rankSortOrder}</span> order
        </div>
        
      </div>
    )
  }

  const updateRule=()=>{
    return(
      <div className='w-full flex flex-col overflow-y-auto'>
        <div
          className='text-left w-11/12 text-stone-800 mt-3 text-lg font-bold mt-2 mb-1'
        >
          Existing Attributes
        </div>

        <div className='flex flex-wrap w-full mt-5'>  
          {updatedColumnsData.map((item, index)=>(
            <div key={index} className='flex flex-row justify-between items-center mr-2 py-2 px-3 bg-stone-800 text-white text-sm font-medium rounded-full'>
              <div>{item}</div>
              {/* remove button */}
              <div
                  className='ml-2 text-white cursor-pointer rounded-full hover:text-red-600'
                  onClick={()=>{
                      var newUpdatedColumnsData=[...updatedColumnsData]
                      newUpdatedColumnsData.splice(index,1)
                      setUpdatedColumnsData(newUpdatedColumnsData)
                  }}
              >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
              </div>
            </div>
          ))}
          <button 
            className='button-blue'
            onClick={()=>{
              setModalType(0)
              RenderModal()
            }}
          >
            Add Attribute
          </button>
        </div>
        <hr className='w-full mt-7 self-center h-px bg-stone-800' />

        <div
          className='text-left w-11/12 text-stone-800 mt-3 text-lg font-bold mt-2 mb-1'
        >
          Derived Attributes
        </div>

        <div className='flex flex-wrap w-full mt-5'>  
          {updatedDerivedColumnsData.map((item, index)=>(
            <div key={index} className='flex flex-row justify-between items-center mr-2 py-2 px-3 bg-stone-800 text-white text-sm font-medium rounded-full'>
              <div>{item}</div>
              {/* remove button */}
              <div
                  className='ml-2 text-white cursor-pointer rounded-full hover:text-red-600'
                  onClick={()=>{
                      var newUpdatedDerivedColumnsData=[...updatedDerivedColumnsData]
                      newUpdatedDerivedColumnsData.splice(index,1)
                      setUpdatedDerivedColumnsData(newUpdatedDerivedColumnsData)
                  }}
              >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
              </div>
            </div>
          ))}

          <button 
            className='button-blue'
            onClick={()=>{
              setModalType(1)
              RenderModal()
            }}
          >
            Add Derived Attribute
          </button>
        </div>

        <hr className='w-full mt-7 self-center h-px bg-stone-800' />

        <div
          className='text-left w-11/12 text-stone-800 mt-3 text-lg font-bold mt-2 mb-1'
        >
          Rank Rule
        </div>
        
        <div className='mt-5 text-stone-800'>
          <span className='text-stone-800 font-semibold text-base'>( {rankRule} )</span> sort by <span className='text-stone-800 font-semibold text-base'>{rankSortOrder}</span> order
        </div>
        
      </div>
    )
  }

  return (
    <div className='flex flex-col w-full items-center min-h-screen text-stone-800'>

      {/* modal for selecting column */}
      {modal&&modal}

      <div className='flex flex-row justify-between w-11/12 pt-4 items-center'>
        <div className='text-xl font-bold'>Allotment Rule</div>
        <div className='flex flex-row space-x-4 items-center'>
            <div className='bg-white border rounded-full w-10 aspect-square'/>
            <div>user Name</div>
        </div>
      </div>

      <div className='flex flex-col items-center py-8 space-y-4 w-11/12 mt-8 admin-dashbord-height bg-white rounded-xl'>
        <div className='flex flex-col w-11/12  overflow-hidden'>
          {/* white box nav bar */}
          <div className='flex flex-row tex-black text-sm font-bold relative'>
              {tabs.map((item, index)=>(
                <div
                  key={index}
                  className='mr-5 cursor-pointer'
                  onClick={()=>{
                    setTabSelected(index)
                  }}
                >
                    <div>{item}</div>
                    <div className={tabSelected==index?'h-1 self-center w-full bg-stone-800 rounded-full':''}/>
                </div>
              ))}
          </div>

          <hr className='w-full mt-2 self-center h-px bg-stone-800' />
          {/* navbar ends */}

          {tabSelected==0&&currentRule()}
          {tabSelected==1&&updateRule()}

        </div>

          
      </div>
    </div>
  )
}

export default AllotmentRule