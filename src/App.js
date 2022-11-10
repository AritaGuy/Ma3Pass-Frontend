
import './App.css';
import React from 'react';
import {Route, Routes} from "react-router-dom"
import Home from './ui/pages/Home/Home';
import SelectBus from './ui/pages/SelectBus/SelectBus';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/selectbus' element= {<SelectBus/>}/>
      </Routes>
    </div>
  );
}

export default App;
