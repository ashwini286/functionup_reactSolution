import './App.css';
import NavBar from './Componante/Atoms/NavBar/NavBar'
import Home from './Componante/pages/Home';
import Login from './Componante/pages/Login';
import Register from './Componante/pages/Register';
import AboutUs from './Componante/pages/AboutUs';
import { Route, Routes } from "react-router-dom";

function App() {
  
  return (
   
     <>
  <NavBar />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='.AboutUs' element={<AboutUs />} />
    <Route path='/Login' element={<Login />} />
    <Route path='/Register' element={<Register />} />
  </Routes>
  
  </>
    
  );
}

export default App;