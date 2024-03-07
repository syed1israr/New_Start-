import React from 'react'

import Header from './Components/Header'
import Body from './Components/Body'
import { Route, Routes } from 'react-router-dom'
import About from './Components/Abouts'
import ContactUs from './Components/Contact'
import RestaurantDetails from './Components/RestaurantDetails'

function App() {
  return (
    <>
    <Header/>
    <Routes>
    <Route path='/' element={ <Body/>}/>
    <Route path='/about' element={<About/>}/>
    <Route  path='/contact' element={<ContactUs/>}/>
    <Route  path='/restaurant/:id' element={<RestaurantDetails/>}/>
    </Routes>
   
  
    </>
  )
}

export default App