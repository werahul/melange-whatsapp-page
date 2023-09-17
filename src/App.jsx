import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Home, ThankYou } from './components/Pages'

const App = () => {
  return (
    <BrowserRouter> 
  
    <Routes>
      <Route exact path='/' Component={Home}/>
      <Route path='/thankyou' Component={ThankYou}/>
    </Routes>
  

    </BrowserRouter>
  )
}

export default App