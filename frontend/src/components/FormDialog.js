import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';

export default function FormDialog({open,setOpen,modalText,modalHeading}) {
  
  const handleClose = () => {
    setOpen(false);
  };

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
            <div className="grid grid-cols-2 gap-y-4">
                <label htmlFor="">Purpose of Certificate:</label>
                <textarea placeholder="Enter the purpose for applying" className="border-solid border-2 rounded-lg ml-3 p-1" required/>
                <label htmlFor="">Remarks (if any):</label>
                <textarea placeholder="Enter remarks" className="border-solid border-2 rounded-lg ml-3 p-1"/>
            </div>
            <div className='w-full flex items-center justify-end mt-5'>
                <button className="submit-button-black ml-auto" type="submit" autoFocus>
                Submit
                </button>
            </div>
            
        </form>
        </DialogContent>
          
      </Dialog>
  );
}
