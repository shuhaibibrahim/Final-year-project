import {Link, Outlet} from 'react-router-dom'

function HomePage() {
  return (
    <div className="bg-slate-200 min-h-screen">
        <div className='flex w-full justify-center bg-slate-600 text-white'>
            <nav className='flex flex-row justify-between w-5/6 py-6'>
                <Link to="/"><h2>HostelCompanion</h2></Link>
                <div className="">
                    <Link to="login" className="py-3 px-2 mr-5">Login</Link>
                    <Link to="signup" className="py-2 px-4 text-white bg-stone-800 ml-5 rounded-lg">SignUp</Link>
                </div> 
            </nav>
        </div>
        <Outlet/>    
    </div>
  )
}

export default HomePage