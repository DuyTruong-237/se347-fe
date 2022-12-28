import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LogIn from '../components/Screen/LogIn/LogIn'

export default function route() {
  
    return (
        <Routes>
            <Route path='/' exact component={LogIn}/>
            <Route path='/login' component={LogIn}/>
        </Routes>
        
     
    )
  
}
