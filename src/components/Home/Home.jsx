import React from 'react';
import {useEffect,useState} from 'react';

const Home = () => {

    const [sellerId, setSellerId] = useState("");
  const [storeId, setStoreId] = useState("");
  const [categoryId, setCategoryId] = useState("");

  useEffect(() => {
    setSellerId(localStorage.getItem("sellerId"));
    setStoreId(localStorage.getItem("storeId"));
    setCategoryId(localStorage.getItem("categoryId"));
  }, []);
  return (
    <div>
        <button onClick={() => window.location.href="/createStore/" + sellerId}>Create Store</button>
        <button onClick={() => window.location.href="/createCategory/" + sellerId + "/" + storeId }>Create Category</button>
        <button onClick={() => window.location.href="/createSubCategory/" + sellerId + "/" + categoryId }>Create Sub Category</button>
    </div>
  )
}

export default Home