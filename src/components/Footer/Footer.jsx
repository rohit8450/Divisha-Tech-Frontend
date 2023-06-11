import React from 'react';
import "./Footer.scss";
import {FaFacebookSquare} from "react-icons/fa";
import {BsInstagram} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div className='footer-container'>
         <div className="container">
        {/* <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">Healthify <i>A Healthy Diet, A Better Life</i> <br/> Helps Senior Adults for Physically, Spiritually, Mentally Healthy. </p>
          </div>

        
        </div> */}
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