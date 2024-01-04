"use client";
import React from "react";
import Image from "next/image";

const MainHeader = () => {
  return (
    <div className="main-header m-2 m-2">
      <div className="container px-0">
        <div className="d-flex justify-content-between align-items-center px-md-4 px-lg-0 px-xl-0">
          <div className="col-lg-2 col-md-2 col-xl-3 d-flex justify-content-start homeIconLogo">
            <Image
              src="/mainicon.png"
              width={36}
              height={36}
              alt="American Express"
            />
          </div>
          <div className="col-lg-7 col-xl-6 d-flex justify-content-center homePage_logo pr-0">
            <h1 className="cursor-pointer logo">LOGO</h1>
          </div>
          <div className="col-lg-3 col-xl-3 d-flex justify-content-end p-0 homePage_icons">
            <nav className="navbar navbar-expand-lg">
              <div className="navbar-collapse gap-3" id="navbarNav">
                <a href="">
                  <Image
                    src="/search123.png"
                    width={24}
                    height={24}
                    alt="American Express"
                  />
                </a>
                <a href="">
                  <Image
                    src="/heart-1.png"
                    width={24}
                    height={24}
                    alt="American Express"
                  />
                </a>
                <a href="">
                  <Image
                    src="/bag1.png"
                    width={24}
                    height={24}
                    alt="American Express"
                  />
                </a>
                <a href="">
                  <Image
                    src="/profile1.png"
                    width={24}
                    height={24}
                    alt="American Express"
                  />
                </a>
                <a href="">
                  <Image
                    src="/eng1.png"
                    className="love-img"
                    width={31}
                    height={11}
                    alt="American Express"
                  />
                </a>
                <a href="">
                  <Image
                    src="/arrow1.png"
                    className="love-img"
                    width={16}
                    height={16}
                    alt="American Express"
                    style={{ cursor: "pointer" }}
                  />
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
