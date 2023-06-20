import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <>
    <div className='text-center'>
    <h1>React Router</h1>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/services'>Services</Link>
      <Link to='/contacts'>Contacts</Link>
    </nav>
    </div>
    </>
  )
}
