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

export const CardProduct = () => {
  return (
    <MDBCard>
      <MDBRipple
        rippleColor="light"
        rippleTag="div"
        className="bg-image hover-overlay"
      >
        <MDBCardImage
          src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
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
        <MDBCardTitle>Name product</MDBCardTitle>
        <MDBCardText>Decription</MDBCardText>
        <MDBCardText>Price:</MDBCardText>
        <div
          className="btn-group d-flex"
          role="group"
          aria-label="Basic example"
        >
          <Link to="/" className="btn btn-primary w-100" href="#">
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
