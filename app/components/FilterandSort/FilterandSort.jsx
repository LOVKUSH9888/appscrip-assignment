import React from "react";
import ProductSearch from "../ProductSearch/ProductSearch";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
const FilterandSort = () => {
  return (
    <>
      <div className="container border-top border-bottom pt-4 pb-2">
        <div className="row text-dark">
          <div className="col-1 text-dark">
            <ProductSearch />
          </div>
          <div className="col-2 d-flex">
            <a href="">
              <IoIosArrowForward style={{ width: "16px", height: "16px" }} />
            </a>
            <p className="text-dark">SHOW FILTER</p>
          </div>
          <div className="col-7"></div>
          <div className="col-2 d-flex justify-content-center ">
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
