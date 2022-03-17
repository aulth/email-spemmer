import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div className="w-full box-border p-3  bg-gray-800 text-white flex justify-between items-center">
        <Link to="/" className='text-xl flex items-center'><img src="https://i.ibb.co/fQJtrVC/logo512.png" className='w-8 align-middle' alt="" /> <h2 className="ml-2">Email Spemmer</h2></Link>
        <nav>
            <ul className="flex">
                <Link to="/disclaimer" className='mx-1 hover:bg-gray-700 cursor-pointer p-2'>Disclaimer</Link>
                <Link to="/contact" className='mx-1 hover:bg-gray-700 cursor-pointer p-2'>Contact</Link>
            </ul>
        </nav>
    </div>
    </>
  )
}

export default Navbar