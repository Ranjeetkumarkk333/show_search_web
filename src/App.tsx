import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ShowDetailsPage from './ShowDetailsPage'
import ShowsList from './ShowsList'

function App() {


  return (
    <div className="p-2">
      <Routes>
        <Route index element={<ShowsList/>}/>
        <Route path ="/details/:id" element={<ShowDetailsPage/>}/>
      </Routes>
     
    </div>
  )
}

export default App
