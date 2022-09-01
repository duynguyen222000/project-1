import React, { useEffect } from "react";
import "./Detail.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/actions/productAction";
export const Detail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAddCart = (item) => {
    if (!localStorage.getItem("access_token")) {
      alert("vui lòng login");
      navigate("/login");
    } else {
      dispatch(addToCart(item));
    }
  };
  let { productId } = useParams();
  let { listProduct } = useSelector((state) => state.ProductReducer);
  const renderProduct = () => {
    return listProduct
      .filter((item) => item.id === productId)
      .map((item, index) => {
        return (
          <div key={index} className="container">
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
                <button
                  onClick={() => {
                    handleAddCart(item);
                  }}
                  className="btn btn-success"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        );
      });
  };
  return <div>{renderProduct()}</div>;
};
