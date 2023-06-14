import React, {useState} from 'react';
import  Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';


const AddInventory = () => {

      const {subCategoryId, categoryId} = useParams();
      const [product_name, setProductName] = useState("");
      const [mrp, setMrp] = useState("");
      const [selling_price, setSellingPrice] = useState("");
      const [quantity, setQuantity] = useState("");
      const [product_images, setProductImages] = useState("");
    
      const addNewInventory = async () => {
    
        try {
         const inventoryDetails = {
           "product_name": product_name,
           "MRP": mrp,
           "selling_price": selling_price,
           "quantity": quantity,
           "product_images": product_images
       }
    
       const response = await axios.post(`https://divisha-tech-backend.onrender.com/api/seller/store/add-inventory/${categoryId}/${subCategoryId}`, inventoryDetails);
     
    
       Swal.fire({
         title: `<strong>${response.data.message}</strong>`,
         icon: 'success',
         showCloseButton: true
         });
    
   
    
     }catch(error){
    
         Swal.fire({
           title: `<strong>${error.response.data.message}</strong>`,
           icon: 'error',
           showCloseButton: true
         });
       
     }
    
    }
  return (
    <div>
         <Container style={{padding: "7%", fontSize: "20px",fontWeight: "bolder",}}>
          <Form onSubmit={(e) => e.preventDefault()}>

          <Form.Group className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control type="text" placeholder="Enter" value={product_name} onChange={(e) => setProductName(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
              <Form.Label>MRP </Form.Label>
              <Form.Control type="text" placeholder="Enter" value={mrp} onChange={(e) => setMrp(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
              <Form.Label>Selling Price </Form.Label>
              <Form.Control type="text" placeholder="Enter" value={selling_price} onChange={(e) => setSellingPrice(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
              <Form.Label>Quantity </Form.Label>
              <Form.Control type="text" placeholder="Enter" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
              <Form.Label>Product Image </Form.Label>
              <Form.Control type="text" placeholder="Enter" value={product_images} onChange={(e) => setProductImages(e.target.value)} />
          </Form.Group>

            <Button variant="primary" type="submit" onClick={addNewInventory}>
              Add Inventory
            </Button>
          </Form>
        </Container>
    </div>
  )
}

export default AddInventory;