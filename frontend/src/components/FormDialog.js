import {useState} from 'react'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';

export default function FormDialog({open,setOpen,modalText,modalHeading,field}) {
  
  const handleClose = () => {
    setOpen(false);
  };

  

  const renderFields=()=>{
    const render=[]
    var index=0
    var fields=JSON.parse(field)
    for(var fieldKey in fields)
    {
      var radioFields=[]
      if(fields[fieldKey].type==="radio")
      {
        //pushing radio items to  radioFields array to render
        console.log("inside radio")
        for(var index in fields[fieldKey]["radioFields"])
        {
          radioFields.push(fields[fieldKey]["radioFields"][index])
        }

        console.log(radioFields)
      }

      render.push(fields[fieldKey].type==="radio"?
      (
        <div className='w-full space-x-4 py-2 flex flex-row items-center '>
          <label className='font-bold text-stone-800'>{fields[fieldKey].label}</label>
          {radioFields.map((item, key)=>(
            <div key={key} className='flex space-x-2 flex-row items-center'>
              <input 
                type="radio" 
                name={fields[fieldKey].name}  
                value={item} 
                className=""
              />
              <label >{item}</label>
            </div>
          ))}
        </div>
      )
      :
      (<div className='w-full space-y-2 py-2 flex flex-col'>
        <label className='font-bold text-stone-800'>{fields[fieldKey].label}</label>
        <div className='flex flex-row space-x-2 items-center'>
          <input 
            className='w-full py-2 px-3 rounded-xl ring-2 ring-slate-200 focus:outline-none' 
            name={fields[fieldKey].name} 
            type={fields[fieldKey].type}
          />
        </div>
      </div>))

      index+=1
    }
    return (<div className='w-full overflow-y-auto flex flex-col px-3'>
      {render.map(inputDiv=>inputDiv)}
    <button className='submit-button-black'>Submit</button>
    </div>)

  }

  return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className='text-black font-semibold flex items-center justify-between'>
          {modalHeading}
          <CloseIcon className="cursor-pointer" onClick={handleClose}/>
        </DialogTitle>
        <DialogContent className="w-full">
        <form action="" className="w-full">
            {renderFields()}
            {/* <div className="grid grid-cols-2 gap-y-4">
                <label htmlFor="">Purpose of Certificate:</label>
                <textarea placeholder="Enter the purpose for applying" className="border-solid border-2 rounded-lg ml-3 p-1" required/>
                <label htmlFor="">Remarks (if any):</label>
                <textarea placeholder="Enter remarks" className="border-solid border-2 rounded-lg ml-3 p-1"/>
            </div>
            <div className='w-full flex items-center justify-end mt-5'>
                <button className="submit-button-black ml-auto" type="submit" autoFocus>
                Submit
                </button>
            </div> */}
            
        </form>
        </DialogContent>
          
      </Dialog>
  );
}
