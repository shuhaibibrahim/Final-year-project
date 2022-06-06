import axios from 'axios'
import {useEffect,useContext} from 'react'
import { UserContext } from '../Contexts/UserContext'
import { baseUrl } from '../baseUrl'
import DownloadIcon from '@mui/icons-material/Download';
import BlockIcon from '@mui/icons-material/Block';
const ApplicationList=({setCertificates,setAppsno,certificates})=>{
    const {user,setLoading} = useContext(UserContext)
    useEffect(() => {
        setLoading(true)
        axios.get(`${baseUrl}/inmate/viewcertificates`,{params:{user_id:user.user_id}})
        .then(res=>{
          console.log(res.data)
          setCertificates(res.data)
          setAppsno(res.data.length)
          setLoading(false)
        })
      }, [])
    return (
      // <div className='w-full'>
      <>
        {/* inmates list */}
        <div className='w-11/12 overflow-y-scroll no-scrollbar'>
          <table className='w-full relative table-auto'>
              <tr className='rounded-xl p-3 bg-primary text-center'>
                <th className='p-3'>Sl.No</th>
                <th className='p-3'>Certificate Type</th>
                <th className='p-3'>Applied Date</th>
                <th className='p-3'>Status</th>
                <th className='p-3'>Status</th>
                <th className='p-3'>Download</th>
              </tr>
              {certificates.map((user, index)=>(
                <tr 
                  className='border-b text-center border-slate-200 border-solid hover:bg-gray-300'
                  key={index}>
                  <td className='p-3'>{index+1}</td>
                  <td className='p-3'>{user.name}</td>
                  <td className='p-3'>{user.date.slice(0,10)}</td>
                  <td className='p-3'>{user.status}</td>
                  <td className='p-3'>{user.approved?"Approved":(user.rejected?"Rejected":"In Progress")}</td>
                  <td className='p-3'>{user.approved?<DownloadIcon className='cursor-pointer'/>:<BlockIcon/>}</td>
                </tr>
              ))}
          </table>
        </div>
      </>
    )
  }

export default ApplicationList