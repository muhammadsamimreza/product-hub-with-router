import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='mb-5'>
        <NavLink className="btn mr-3" to={`/home`}>Home</NavLink>
        <NavLink className="btn mr-3" to={`/products`}>Products</NavLink>
        <NavLink className="btn mr-3" to={`/contact`}>Contact</NavLink>    
    </div>
  )
}

export default Navbar