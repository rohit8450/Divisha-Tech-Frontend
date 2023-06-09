import {Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
     
     <Header />
          <Routes>
       
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
          
          </Routes>  
          <Footer />
    </div>
  );
}

export default App;
