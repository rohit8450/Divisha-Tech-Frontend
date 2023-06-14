import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const InventoryList = ({ inventory }) => {
  return (
    <>
      <div style={{display:"flex",gap:"20px",marginTop: "40px",marginLeft:"50px",flexWrap:"wrap",minWidth:"400px"}}>
        {inventory.map((item, index) => {
          return (
            <Card style={{ width: "18rem"}}>
              <Card.Img variant="top" src={item.product_images} />
              <Card.Body>
                <Card.Title>{item.productName}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  <strong>Selling Price</strong>
                  {item.SellingPrice}
                  </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Quantity</strong>
                  {item.quantity}
                  </ListGroup.Item>
                <ListGroup.Item>
                  <strong>MRP: </strong>
                  {" "} Rs {item.MRP}
                  </ListGroup.Item>
              </ListGroup>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default InventoryList;
