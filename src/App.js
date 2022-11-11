
import './App.css';
import React from 'react';
import {Route, Routes} from "react-router-dom"
import Home from './ui/pages/Home/Home';
import SelectBus from './ui/pages/SelectBus/SelectBus';
import Book from './ui/pages/Book/Book';
import Ticket from './ui/pages/Tickets/Ticket';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/selectbus/:tripId' element= {<SelectBus/>}/>
        <Route path='/Book' element={<Book />}/>
        <Route path='/Ticket' element={<Ticket />}/>
      </Routes>
    </div>
  );
}

export default App;
