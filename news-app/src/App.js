import './App.css';
import React, { Component } from 'react'
import Nav from './components/Nav';
import Newscon from './components/Newscon';
import {BrowserRouter,Routes, Route} from "react-router-dom"

export default class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
        <Nav/>
          <Routes>
                <Route exact path='/'  element={<Newscon key="general" category="general"/>}/>
                <Route exact path='/business' element={<Newscon key="business" category="business"/>}/>
                <Route exact path='/entertainment' element={<Newscon key="entertainment" category="entertainment"/>}/>
                <Route exact path='/general' element={<Newscon key="general" category="general"/>}/>
                <Route exact path='/health' element={<Newscon key="health" category="health"/>}/>
                <Route exact path='/science' element={<Newscon key="science" category="science"/>}/>
                <Route exact path='/sports' element={<Newscon key="sports" category="sports"/>}/>
                <Route exact path='/technology' element={<Newscon key="technology" category="technology"/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
