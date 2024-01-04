import React from "react";
import Image from "next/image";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="love-rectangle">
      <div className="container">
        <div className="row text-white">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mt-5">
            <h3>BE THE FIRST TO KNOW</h3>
            <p>Sign up for updates from mettā muse.</p>
            <input type="text" placeholder="Enter your e-mail..." />
            <button className="btn btn-outline-secondary mx-3">Submit</button>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mt-5 mb-3">
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
              <li style={{ display: "flex", alignItems: "center", gap: "2px" }}>
                <div className="d-flex align-items-center justify-content-start gap-1">
                  <Image
                    src="/usa.png"
                    width={24}
                    height={24}
                    alt="Google"
                    layout="responsive"
                  />
                  <p style={{ margin: "0" }}> * USD</p>
                </div>
              </li>

              <li>
                <p>
                  Transactions will be completed in Euros and a currency
                  reference is available on hover.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="row border-top">
          <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 mt-5">
            <ul className="list-group">
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
          <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 mt-5">
            <ul className="list-group">
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
          <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 mt-5">
            <h3>FOLLOW US</h3>
            <Image src="/followus.png" width={76} height={32} alt="Follow Us" />
            <h6 className="text-white">metta muse ACCEPTS</h6>
            <div className="d-flex align-items-start gap-2">
              <Image
                src="/google.png"
                width={56}
                height={35}
                alt="Google"
                layout="responsive"
              />
              <Image
                src="/mc.png"
                width={56}
                height={35}
                alt="Mastercard"
                layout="responsive"
              />
              <Image
                src="/pay.png"
                width={56}
                height={35}
                alt="PayPal"
                layout="responsive"
              />
              <Image
                src="/amex.png"
                width={56}
                height={35}
                alt="American Express"
                layout="responsive"
              />
              <Image
                src="/apple.png"
                width={56}
                height={35}
                alt="Apple Pay"
                layout="responsive"
              />
              <Image
                src="/payu.png"
                width={56}
                height={35}
                alt="PayU"
                layout="responsive"
              />
            </div>
          </div>
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
  );
};

export default Footer;
