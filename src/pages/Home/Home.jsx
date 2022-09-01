import React from "react";
import { CarouselMDB } from "../../components/Carousel/CarouselMDB";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { CardProduct } from "../../components/Card/CardProduct";
import { useSelector } from "react-redux/es/exports";
export const Home = () => {
  const { listProduct } = useSelector((state) => state.ProductReducer);
  const renderList = () => {
    return listProduct
      .filter((item) => item.id !== "")
      .map((item, index) => {
        return (
          <MDBCol key={index} className="mb-4" md="4">
            <CardProduct item={item} />
          </MDBCol>
        );
      });
  };
  return (
    <>
      <CarouselMDB />
      <MDBContainer className="mt-4">
        <MDBRow>{renderList()}</MDBRow>
      </MDBContainer>
    </>
  );
};
