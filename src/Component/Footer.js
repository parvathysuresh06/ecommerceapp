import React from 'react'
import call from "./Assets/call.png";
import phone from "./Assets/phone.png";
import mail from "./Assets/mail.png";
import location from "./Assets/location.png";
import visa from "./Assets/visa.png";
import paypal from "./Assets/paypal.png";
import fb from "./Assets/fb2.png";
import utube from "./Assets/youtube2.png";
import twitter from "./Assets/twitter2.png";
import linkedin from "./Assets/linkedin2.png";
import ae from "./Assets/ae.png";
import rupay from "./Assets/rupay.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-3">
          <ul class="footer-links">
              <img src ={call} />  121-234-78<br></br>
              <img src ={mail} />  customer@company.com<br></br>
              <img src ={location} />  Address Address 1 Address<br></br>
              <br></br>
              <br></br>
              <br></br>
             <h5>Payment Methods</h5><br></br>
             <img src ={paypal} />
              <img src ={visa} />
              <img src ={ae} />
              <img src ={rupay} />
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Company</h6>
            <ul class="footer-links">
              <li>About Us</li>
              <li>Sell with us</li>
              <li>Our Sellers</li>

            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Informations</h6>
            <ul class="footer-links">
            <li>Privacy Policy</li>
              <li>Exchange and Returns Policy</li>
              <li>Terms and conditions</li>
              <li>Common Questions</li>
            </ul>
          </div>
          <div class="col-xs-6 col-md-3">
          <div className="box" id="box7">
              <strong className="title"> SUBSCRIBE NEWSLETTER</strong><br />
              <input type="text" placeholder="Enter your email address"></input>
              <button type="submit" className="sub" >Submit</button><br /><br /><br />
            </div>
          </div>
         
        </div>
      </div>
      <div class="container">
        <div class="row">

          <div class="justify-content-end">
            <ul class="social-icons">
              <li><img src={fb}></img></li>
              <li><img src={utube}></img></li>              
              <li><img src={linkedin}></img></li>
              <li><img src={twitter}></img></li>   
            </ul>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
        <div class="d-flex justify-content-center">
            <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
</footer>
  )
}
