import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
 <nav className='navbar'>
    <h1>The Dojo Blog</h1>
    <div className='NavLink'>
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/create">New Blog</NavLink>
      <NavLink to="/News">News</NavLink>
    </div>

 </nav>

  )
}

export default Navbar