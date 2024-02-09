import React from "react";
import NavBar from "./layout/Navbar";
import * as Pages from './pages'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"


function App() {
  

  return (
<>
<Router>
    <Routes>
      <Route path="/" element={<NavBar/>}>
          <Route index element={<Pages.Home/>}/>
          <Route path='/travelbot' element={<Pages.TravelBot/>}/>
          <Route path='/chatbot' element={<Pages.Chat/>}/>
          <Route path='/transcription' element={<Pages.Transcription/>}/>
          <Route path='/shop' element={<Pages.ShopPage/>}/>
          <Route path='/video' element={<Pages.VideoPage/>}/>
      </Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
