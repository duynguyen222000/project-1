import React from "react";
import { CarouselMDB } from "../../components/Carousel/CarouselMDB";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { CardProduct } from "../../components/Card/CardProduct";
export const Home = () => {
  return (
    <>
      <CarouselMDB />
      <MDBContainer className="mt-4">
        <MDBRow>
          <MDBCol className="mb-4" md="4">
            <CardProduct />
          </MDBCol>
          <MDBCol md="4">
            <CardProduct />
          </MDBCol>
          <MDBCol md="4">
            <CardProduct />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};
