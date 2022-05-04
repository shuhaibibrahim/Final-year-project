import MessOutForm from "./MessOutForm"
import MessOutHistory from "./MessOutHistory"
function MessOutPage() {
  return (
    <div className='w-11/12'>
        <MessOutForm/>
        <hr/>
        <MessOutHistory/>
    </div>
  )
}

export default MessOutPage