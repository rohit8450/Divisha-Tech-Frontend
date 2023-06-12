import React, {useState, useEffect} from 'react';
import  Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router";
import axios from "axios";
import Swal from 'sweetalert2';

const CreateCategory = () => {

    const {sellerId, storeId} = useParams();
    console.log(sellerId, " ", storeId);

  const [categoryName, setCategoryName] = useState("");

  const addNewCategory = async () => {

    try {
     const categoryDetails = {
       "category_name": categoryName,
   }

   const response = await axios.post(`https://divisha-tech-backend.onrender.com/api/seller/store/add-category/${sellerId}/${storeId}`, categoryDetails);
   console.log(response);
   console.log(response.data.categoryAdded._id);

   Swal.fire({
     title: `<strong>${response.data.message}</strong>`,
     icon: 'success',
     showCloseButton: true
     });

     setTimeout(() => {
      localStorage.setItem("categoryId", response.data.categoryAdded._id);
      window.location = "/";  
   }, 1000);

 }catch(error){

     Swal.fire({
       title: `<strong>${error.response.data.message}</strong>`,
       icon: 'error',
       showCloseButton: true
     });


   
 }

}

  return (
   <>
    <div className="category-container">
    <Container style={{padding: "7%", fontSize: "20px",fontWeight: "bolder",}}>
          <Form onSubmit={(e) => e.preventDefault()}>

          <Form.Group className="mb-3">
              <Form.Label>Category Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Category" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
          </Form.Group>

            <Button variant="primary" type="submit" onClick={addNewCategory}>
              Create Category
            </Button>
          </Form>
        </Container>
    </div>
   </>
  )
}

export default CreateCategory;
