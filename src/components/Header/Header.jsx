import React, {useState, useEffect} from 'react';
import Swal from 'sweetalert2';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./Header.scss";

const Header = () => {

  const [authenticated, setauthenticated] = useState(null);

  useEffect(() => {

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
     <div className='header'>
      <Navbar className='navbar'>
        <Container>
          <Navbar.Brand href="/">
           <img
              src="https://scontent-bom1-2.xx.fbcdn.net/v/t39.30808-6/310453017_429945762628004_1472829616267892212_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ToOtXYgd8vwAX_jAkR4&_nc_ht=scontent-bom1-2.xx&oh=00_AfDNm5cjjjQ3wKTiPBdrpX2bpC0JpNM60T6Ps4JN-t4ZnQ&oe=64765F5B"
              id="logo-img"
              alt="React Bootstrap logo"
            />
            {" "}
            <h1>Healthify</h1>
          </Navbar.Brand>
          <Nav className="nav-links">
            <Nav.Link href="/home">Home</Nav.Link>
            {

            }
            <Nav.Link href="/yoga-poses/standing">Fitness</Nav.Link>
            <Nav.Link href="/calorie-check">Diet</Nav.Link>
            <Nav.Link href="/mental-wellbeing">Spiritual</Nav.Link>
          </Nav>


          {
              localStorage.getItem("token") !== null &&      
              <button className='white_btn' onClick={handleLogout}>Logout</button> 
          }


          {
              localStorage.getItem("token") === null &&
              <div className='nav-btn-container'>
              <button className='nav-btn'><Link to="/login">Login</Link></button>
              <button className='nav-btn'><Link to="/register">Sign Up</Link></button>
              </div>
          }
        </Container>
      </Navbar>
     </div>
    </>
  )
}


export default Header;