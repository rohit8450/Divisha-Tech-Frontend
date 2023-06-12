import React, {useState, useEffect} from 'react';
import Swal from 'sweetalert2';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./Header.scss";


const Header = () => {

  const [authenticated, setauthenticated] = useState(null);
  
  const [sellerId, setSellerId] = useState("");


  useEffect(() => {
    setSellerId(localStorage.getItem("sellerId"));
    if (localStorage.getItem("token") !== null) {
      setauthenticated(true);
    }
  }, [authenticated]);


  const handleLogout = () => {

    setTimeout(() => {
      localStorage.removeItem("token");
      window.location = '/login';
    }, 1000); 
    
    Swal.fire({
      title: `Logged Out Sucessfully`,
      icon: 'success',
      showCloseButton: true
   });
  }  

  return (
    <>
     <div className='header'style={{backgroundColor:"skyblue"}}>
      <Navbar className='navbar'>
        <Container >
        {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link href="/home" style={{color:"darkblue", fontWeight:"bolder"}}>Home</Nav.Link>
            <Nav.Link href={`/getSpecificSeller/${sellerId}`} style={{color:"darkblue", fontWeight:"bolder"}}>Sellers</Nav.Link>
          </Nav>

          {
              localStorage.getItem("token") !== null &&      
              <button className='white_btn' onClick={handleLogout}>Logout</button> 
          }


          {
              localStorage.getItem("token") === null &&
              <div className='nav-btn-container'>
              <button className='nav-btn'><Link to="/login">Login</Link></button>
              <button className='nav-btn'><Link to="/register">SignUp</Link></button>
              </div>
          }
        </Container>
      </Navbar>
     </div>
    </>
  )
}


export default Header;