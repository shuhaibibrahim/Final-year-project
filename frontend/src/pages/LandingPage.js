import React from 'react'
import {Link} from "react-router-dom"
import HomeNavbar from '../components/HomeNavbar'
function LandingPage() {
  return (
    <div className="flex flex-col self-center">
      <div className="flex items-center justify-between w-5/6 m-auto">
        <div>
          <div>
            <h2 className="font-bold text-4xl">Perfect Solution for Hostel Activities</h2>
          </div>
          <div className="flex items-center justify-center pt-10">
            <Link to="/signup" className="bg-stone-800 text-white px-4 py-2 rounded-lg">Get Started</Link>
          </div>
        </div>
        <img src="https://cdn.britannica.com/30/182830-050-96F2ED76/Chris-Evans-title-character-Joe-Johnston-Captain.jpg" className="w-60" alt="" />
      </div>
    </div>
  )
}

export default LandingPage