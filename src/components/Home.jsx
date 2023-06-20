import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {

  const navigate = useNavigate()
  return (
    <>
    <div className='text-center mt-4'>
      <button onClick={() => {
        navigate('/services')
      }}>Serviços</button>
    </div>
    </>
  )
}
