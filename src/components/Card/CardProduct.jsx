import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import "./CardProduct.scss";
export const CardProduct = ({ item }) => {
  console.log(item);
  return (
    <MDBCard>
      <MDBRipple
        rippleColor="light"
        rippleTag="div"
        className="bg-image hover-overlay"
      >
        <MDBCardImage
          src={
            item?.img ||
            "https://mdbootstrap.com/img/new/standard/nature/111.webp"
          }
          fluid
          alt="..."
        />
        <a>
          <div
            className="mask"
            style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
          ></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{item?.name || "product's name is empty"}</MDBCardTitle>
        <MDBCardText>{item?.description || "here is description"}</MDBCardText>
        <MDBCardText>Price:{Number(item?.price).toLocaleString()}</MDBCardText>
        <div
          className="btn-group d-flex"
          role="group"
          aria-label="Basic example"
        >
          <Link
            to={`/product/${item?.id}`}
            className="btn btn-primary w-100"
            href="#"
          >
            View Detail
          </Link>
          <MDBBtn className="btn btn-info w-100" href="#">
            Add to cart
          </MDBBtn>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};
