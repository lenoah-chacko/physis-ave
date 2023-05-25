import './App.css';

import Navbar from './components/navbar/Navbar';
import { Routes, Route } from "react-router-dom";

import AboutUs from './components/aboutUs/AboutUs';
import Home from './components/home/Home';
import Solutions from './components/solutions/Solutions';

function App() {
  
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/solutions' element={<Solutions/>}/>
          <Route path='/about' element={<AboutUs/>}/>
      </Routes>
    </div>
  );
}

export default App;
