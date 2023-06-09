import React, { useState, useEffect } from 'react';
import  Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router";
import axios from "axios";
import Swal from 'sweetalert2';

const CreateStore = () => {

    const {sellerId} = useParams();
    console.log(sellerId);

    const [gst, setGst] = useState("");
    const [logo, setLogo] = useState("");
    const [storeTiming, setStoreTiming] = useState("");


    const addNewStore = async () => {

           try {
            const storeDetails = {
              "gst": gst,
              "logo": logo,
              "store_timing": storeTiming
          }

          const response = await axios.post(`http://localhost:8000/api/seller/store/create/${sellerId}`, storeDetails);
          console.log(response);
          console.log(response.data.storeAdded._id);


          Swal.fire({
            title: `<strong>${response.data.message}</strong>`,
            icon: 'success',
            showCloseButton: true
            });

            setTimeout(() => {
              localStorage.setItem("storeId", response.data.storeAdded._id);
            //   window.location = "/";  
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
     <div className='store-container'>

     <Container style={{padding: "7%"}}>
          <Form onSubmit={(e) => e.preventDefault()}>

          <Form.Group className="mb-3">
              <Form.Label>GSTIN Number</Form.Label>
              <Form.Control type="text" placeholder="Enter GSTIN" value={gst} onChange={(e) => setGst(e.target.value)} />
          </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Store Logo</Form.Label>
              <Form.Control type="text" placeholder="Enter Logo URL" value={logo} onChange={(e) => setLogo(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Store Timing</Form.Label>
              <Form.Control type="text" placeholder="Enter Store Timing" value={storeTiming} onChange={(e) => setStoreTiming(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={addNewStore}>
              Create Store
            </Button>
          </Form>
        </Container>

     </div>
    </>
  )
}

export default CreateStore;