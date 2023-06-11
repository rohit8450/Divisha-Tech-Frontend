import React from 'react';
import {useEffect,useState} from 'react';
import { Navigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Home = () => {

  const [sellerId, setSellerId] = useState("");
  const [storeId, setStoreId] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [subCategoryId, setSubcategorId] = useState("");
  const [authenticated, setauthenticated] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
    setauthenticated(true);
    setSellerId(localStorage.getItem("sellerId"));
    setStoreId(localStorage.getItem("storeId"));
    setCategoryId(localStorage.getItem("categoryId"));
    setSubcategorId(localStorage.getItem("subCategoryId"));
    
    }
    
    
  }, [authenticated]);

  console.log("subCategoryId", subCategoryId);
  if (localStorage.getItem("token") === null) {
    return <Navigate replace to="/login" />;
  } else{

  return (
    <div>
       <Button variant="outline-info" onClick={() => window.location.href="/createStore/" + sellerId}>Create Store</Button>{' '}
       <Button variant="outline-info" onClick={() => window.location.href="/createCategory/" + sellerId + "/" + storeId }>Create Category</Button>{' '}
       <Button variant="outline-info" onClick={() => window.location.href="/createSubCategory/" + sellerId + "/" + categoryId }>Create Sub Category</Button>{' '}
       <Button variant="outline-info" onClick={() => window.location.href="/createInventory/" + categoryId + "/" + subCategoryId }>Create Inventory</Button>{' '}
    
    </div>
  )

  }
}

export default Home