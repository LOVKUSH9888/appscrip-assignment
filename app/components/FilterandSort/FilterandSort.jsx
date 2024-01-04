"use client"
import React, { useState } from "react";
import ProductSearch from "../ProductSearch/ProductSearch";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

const FilterandSort = () => {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const arrowStyle = {
    width: "16px",
    height: "16px",
    transform: showFilters ? "rotate(180deg)" : "rotate(0deg)",
  };

  return (
    <>
      <div className="container border-top border-bottom pt-4 pb-2">
        <div className="row text-dark">
          <div className="col-1 text-dark">
            <ProductSearch />
          </div>
          <div className="col-2 d-flex">
            <a href="#" onClick={toggleFilters}>
              <IoIosArrowForward style={arrowStyle} />
            </a>
            <p className="text-dark" onClick={toggleFilters}>
              {showFilters ? "HIDE FILTER" : "SHOW FILTER"}
            </p>
          </div>
          <div className="col-7"></div>
          <div className="col-2 d-flex justify-content-center">
            <p className="text-dark">RECOMMENDED</p>
            <a href="">
              <IoIosArrowDown style={{ width: "16px", height: "16px" }} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterandSort;
