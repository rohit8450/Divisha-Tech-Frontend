import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Dropdown from "../DropDown/DropDown.jsx";



const SearchSeller = () => {

    const {sellerId} = useParams();
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);

    console.log("category","subCategory",category,subCategory)

    useEffect(() => {
        
        const getSpecificSeller = async () => {
            const {data: {
                sellerDetails: {
                    category, subCategory
                }
            }} = await axios.get(`https://divisha-tech-backend.onrender.com/api/seller/${sellerId}`);

            console.log(category,subCategory)
            setCategory(category);
            setSubCategory(subCategory);

        } 
    
        getSpecificSeller();
    }, []);

  return (
    <>
     <div className='search-seller-container'> 

     <Dropdown  items={category} title="category"  />
     <Dropdown  items={subCategory} title="SubCategory"  />
      
     </div>
    </>
  )
}

export default SearchSeller;