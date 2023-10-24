import React from 'react'

const Navbar = ({setShowModal}) => {
  return (
    <div className=" flex bg-red-800 py-4 px-10 flex-row items-center justify-between  ">
        <div>
             <h1>name</h1>
        </div>
        <div className="flex gap-10">
          <a href="">about</a>
          <div className="flex gap-4">
           <button className="bg-yellow-200 px-2 py-[0.5] rounded text-center " onClick={()=>setShowModal(true)}>Create product</button>
            <button className="bg-yellow-200 px-2 py-[0.5] rounded text-center ">Login</button>
            <button className="bg-yellow-200 px-2 py-[0.5] rounded text-center ">Register</button>
          </div>
        </div>
    </div>
  )
}

export default Navbar