import React from 'react';
import "./Footer.scss";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div className='footer-container'>
         <div className="container">
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2023 All Rights Reserved by &nbsp; 
         <Link to="/">Divisha Solution Tech</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;