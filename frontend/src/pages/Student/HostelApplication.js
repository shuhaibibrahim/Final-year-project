function HostelApplication() {
  return (
    <div className='flex flex-col w-full items-center'>
      <div className='flex flex-row justify-between w-10/12 pt-4 items-center'>
        <div className='text-xl font-bold'>Apply for Hostel</div>
        <div className='flex flex-row space-x-4 items-center'>
            <div className='bg-white border rounded-full w-10 aspect-square'/>
            <div>user Name</div>
        </div>
      </div>

      <div className='w-10/12 mt-12 bg-white rounded-xl text-left p-5'>
        <h2 className="font-bold">Rules</h2>
        <ol className="list-decimal pl-5 pt-2 ">
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, ab!</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, ab!</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, ab!</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, ab!</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, ab!</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, ab!</li>
        </ol>
        <div className="w-full flex items-end justify-end mt-5">
            <button className="ml-auto p-3 bg-stone-800 text-white rounded-xl">Proceed to apply</button>
        </div>
      </div>
    </div>
  )
}

export default HostelApplication