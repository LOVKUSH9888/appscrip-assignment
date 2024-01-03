"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Spinner } from "react-bootstrap";
import Image from "next/image";
import "./FetchedData.css";

const FetchedData = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getFirstThreeWords = (title) => {
    const words = title.split(" ");
    return words.slice(0, 3).join(" ");
  };
  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center mt-5 mx-1">
          <Spinner animation="border" role="status">
            <span className="sr-only"></span>
          </Spinner>
        </div>
      ) : (
        <div className="container">
          <div className="row">
            {products.map((product) => (
              <div
                key={product.id}
                className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mt-3"
              >
                <div
                  className="card"
                  style={{ width: "300px", height: "auto    " }}
                >
                  <img
                    src={product.image}
                    width={300}
                    height={399}
                    className="card-img-top"
                    alt="Card image cap"
                  />
                  <div className="card-body text-dark">
                    <p className="card-text text-dark">
                      <b>{getFirstThreeWords(product.title)}</b>
                    </p>
                    <div className="d-flex gap-1">
                      <p>
                        <a href="http://localhost:3000/pages/auth">
                          Sign in Or create an account to see pricing
                        </a>
                      </p>
                      <Image
                        src="/heart.png"
                        width={24}
                        height={24}
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default FetchedData;
