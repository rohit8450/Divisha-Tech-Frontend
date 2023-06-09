import React from 'react';
import {useEffect,useState} from 'react';

const Home = () => {

    const [sellerId, setSellerId] = useState("");
  const [storeId, setStoreId] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [subCategoryId, setSubcategorId] = useState("");

  useEffect(() => {
    setSellerId(localStorage.getItem("sellerId"));
    setStoreId(localStorage.getItem("storeId"));
    setCategoryId(localStorage.getItem("categoryId"));
    setSubcategorId(localStorage.getItem("subCategoryId"));
  }, []);

  console.log("subCategoryId", subCategoryId);
  return (
    <div>
        <button onClick={() => window.location.href="/createStore/" + sellerId}>Create Store</button>
        <button onClick={() => window.location.href="/createCategory/" + sellerId + "/" + storeId }>Create Category</button>
        <button onClick={() => window.location.href="/createSubCategory/" + sellerId + "/" + categoryId }>Create Sub Category</button>
        <button onClick={() => window.location.href="/createInventory/" + categoryId + "/" + subCategoryId }>Create Inventory</button>
    </div>
  )
}

export default Home