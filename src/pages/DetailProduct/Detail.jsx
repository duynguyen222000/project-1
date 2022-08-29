import React, { useEffect } from "react";
import "./Detail.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export const Detail = () => {
  let { productId } = useParams();
  let { listProduct } = useSelector((state) => state.ProductReducer);
  const renderProduct = () => {
    return listProduct
      .filter((item) => item.id === productId)
      .map((item, index) => {
        return (
          <div className="container">
            <div className="row">
              <div className="col-md-6 ">
                <img src={item.img} alt="" />
              </div>
              <div className="col-md-6 ">
                <h2>{item.name}</h2>
                <p>Price:{Number(item.price).toLocaleString()}</p>
                <p>{item.description}</p>
                <Link to="/product" className="btn btn-primary">
                  back to product
                </Link>
              </div>
            </div>
          </div>
        );
      });
  };
  return <div>{renderProduct()}</div>;
};
