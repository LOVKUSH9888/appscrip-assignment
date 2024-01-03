"use client";
import React, { useState } from "react";
import Image from "next/image";
import Menu from "../Menu/Menu";

const MainHeader = () => {
  return (
    <div className="main-header">
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
                <Image
                  src="/searchlol.png"
                  width={24}
                  height={24}
                  alt="American Express"
                />
                <Image
                  src="/heartlol.png"
                  width={24}
                  height={24}
                  alt="American Express"
                />
                <Image
                  src="/baglol.png"
                  width={24}
                  height={24}
                  alt="American Express"
                />
                <Image
                  src="/profilelol.png"
                  width={24}
                  height={24}
                  alt="American Express"
                />

                <Image
                  src="/englol.png"
                  width={31}
                  height={11}
                  alt="American Express"
                />
                <Image
                  src="/arrowlol.png"
                  width={16}
                  height={16}
                  alt="American Express"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
