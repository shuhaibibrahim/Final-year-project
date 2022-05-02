import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import {motion} from 'framer-motion'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Sheets from '../icons/sheets.png'

function Uploader(props) {
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: '.xlsx',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
      props.setUploaded(true);
    }
  });

  const thumbs = files.map(file => (
    <div key={file.name}>
      <div>
        <h1>{file.name}</h1>
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <>
      {props.uploaded?
        <motion.div className='flex items-center justify-center w-12/12 bg-gray-100 h-40'>
          <img src={Sheets} className="w-8"/>{thumbs}
          <DeleteForeverIcon onClick={()=>{props.setUploaded(false)}} className="ml-2"/>
        </motion.div>:
        <motion.div className="bg-gray-100 w-12/12 h-40 p-5 rounded-lg">
          <div {...getRootProps({className:'dropzone'})} className="border-dashed border-2 border-teal-500 rounded-lg w-full h-full flex items-center justify-center">
            <input {...getInputProps()} className="w-full h-full"/>
            <img src={Sheets} className="w-8" alt="" />
            <p>Drag and drop excel file</p>
          </div>
        </motion.div>
      }
    </>
  );
}
export default Uploader