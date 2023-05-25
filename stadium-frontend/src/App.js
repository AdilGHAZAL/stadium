import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import { Route, Routes } from 'react-router-dom';
import StadiumList from './components/StadiumList';
import StadiumCreation from './components/StadiumCreation';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';

function App() {
  return (
    
    <div className="App">
    	<React.Fragment>
		   	<Navbar/>
		  </React.Fragment>
      <Routes> 
        <Route path='/' element={<StadiumList />}/>
        <Route path='/create' element={<StadiumCreation/>}/>
      </Routes>
    </div>
  );
}

export default App;


