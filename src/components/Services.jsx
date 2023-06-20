import React from 'react'
import { Route, Routes } from 'react-router-dom'

export const Services = () => {
  return (
    <div>
      <h1>Serviços</h1>
      <Routes>
       <Route path='services1' element={<h3>Serviço 1</h3>} />
       <Route path='services2' element={<h3>Serviço 2</h3>} />
       <Route path='services3' element={<h3>Serviço 3</h3>} />
      </Routes>
    </div>
  )
}
