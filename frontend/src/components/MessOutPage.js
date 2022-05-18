import {useState,useEffect} from 'react'
import MessOutForm from "./MessOutForm"
import MessOutHistory from "./MessOutHistory"
import axios from 'axios'
function MessOutPage({noofDays}) {
  return (
    <div className='w-11/12'>
        <MessOutForm noofDays={noofDays}/>
        <hr/>
        <MessOutHistory/>
    </div>
  )
}

export default MessOutPage