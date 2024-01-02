import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="div love-reactangle">
        <div className="container ">
          <div className="row text-white ">
            <div className="col-6 mt-5">
              <h3>BE THE FIRST TO KNOW</h3>
              <p>Sign up for updates from mettā muse.</p>
              <input type="text" placeholder="Enter your e-mail..." />
              <button className="btn btn-outline-secondary mx-3">Submit</button>
            </div>
            <div className="col-6 mt-5 mb-3">
              <ul>
                <li>
                  <h3>CONTACT US</h3>
                </li>
                <li>
                  <p>+44 221 133 5360</p>
                </li>
                <li>
                  <p>customercare@mettamuse.com</p>
                </li>
                <li>
                  <h6>CURRENCY</h6>
                </li>
                <li>
                  <p>USD</p>
                </li>
                <li>
                  <p>
                    Transactions will be completed in Euros and a currency
                    reference is available on hover.
                  </p>
                </li>
              </ul>
            </div>
            <div className="row border-top">
              <div className="col-4 mt-5">
                <ul>
                  <li>
                    <h3>metta muse</h3>
                  </li>
                  <li>
                    <p>About Us</p>
                  </li>
                  <li>
                    <p>Stories</p>
                  </li>
                  <li>
                    <p>Artisans</p>
                  </li>
                  <li>
                    <p>Boutiques</p>
                  </li>
                  <li>
                    <p>Contact Us</p>
                  </li>
                  <li>
                    <p>EU Compliances Docs</p>
                  </li>
                </ul>
              </div>
              <div className="col-4 mt-5">
                <ul>
                  <li>
                    <h3>QUICK LINKS</h3>
                  </li>
                  <li>
                    <p>Orders & Shipping</p>
                  </li>
                  <li>
                    <p>Join/Login as a Seller</p>
                  </li>
                  <li>
                    <p>Payment & Pricing</p>
                  </li>
                  <li>
                    <p>Return & Refunds</p>
                  </li>
                  <li>
                    <p>FAQs</p>
                  </li>
                  <li>
                    <p>Privacy Policy</p>
                  </li>
                  <li>
                    <p>Terms & Conditions</p>
                  </li>
                </ul>
              </div>
              <div className="col-4 mt-5">
                <h3>FOLLOW US</h3>
                <p>ICONS</p>
                <h6>metta muse ACCEPTS</h6>
                <p>icons</p>
              </div>
              <div className="row mt-5">
                <div className="col">
                  <p className="text-center mt-5">
                    Copyright © 2023 mettamuse. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
