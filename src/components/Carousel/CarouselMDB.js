import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from "mdb-react-ui-kit";
import slide from "../../assets/img/slide-1.png";
import pic1 from "../../assets/img/3.png";
import pic2 from "../../assets/img/2.png";
export const CarouselMDB = () => {
  return (
    <>
      <MDBCarousel showControls={false} interval={3000} pause={true} fade>
        <MDBCarouselInner>
          <MDBCarouselItem className="active">
            <MDBCarouselElement src={slide} alt="..." />
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBCarouselElement src={pic2} alt="..." />
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBCarouselElement src={pic1} alt="..." />
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </>
  );
};
