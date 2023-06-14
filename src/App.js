import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import CreateStore from './components/CreateStore/CreateStore';
import CreateCategory from './components/CreateCategory/CreateCategory';
import CreateSubCategory from './components/CreateSubCategory/CreateSubCategory';
import CreateInventory from './components/CreateInventory/CreateInventory.jsx';
import SearchSeller from './components/SearchSeller/SearchSeller';
import { Navigate } from 'react-router-dom';
import './App.css';


function App() {

  const [sellerId, setSellerId] = useState("");

  useEffect(() => {
    setSellerId(localStorage.getItem("sellerId"));
  }, []);

  console.log("seller ID", sellerId);

  return (
    <div className="App">
      <Header />
  
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path={`/createStore/:sellerId`} element={<CreateStore />} />
          <Route exact path={`/createCategory/:sellerId/:storeId`} element={<CreateCategory />} />
          <Route exact path={`/createSubCategory/:sellerId/:categoryId`} element={<CreateSubCategory />} />
          <Route exact path={`/createInventory/:categoryId/:subCategoryId`} element={<CreateInventory />} />
          <Route exact path={`/getSpecificSeller/:sellerId`} element={<SearchSeller />} />
        </Routes>
 
      <Footer />
    </div>
  );
}

export default App;