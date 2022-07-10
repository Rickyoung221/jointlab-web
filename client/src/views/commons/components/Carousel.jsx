import React from "react";
import { Link } from "react-router-dom";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
  MDBContainer,
} from "mdb-react-ui-kit";
import slide_1 from "@img/home/edtech-1.png";
import slide_2 from "@img/home/overview-1.png";
import slide_3 from "@img/home/textbooks.png";
import "./Carousel.css";

function Carousel() {
  return (
    <MDBContainer breakpoint="md">
      <MDBCarousel showControls fade className="carouselSize">
        <MDBCarouselInner>
          <MDBCarouselItem className="active" itemID="1">
            <MDBCarouselElement
              src={slide_1}
              className="carouselImg"
              alt="First slide"
            />
          </MDBCarouselItem>

          <MDBCarouselItem itemID="2">
            <Link to="/research/finished-projects/education-development">
              <MDBCarouselElement
                src={slide_2}
                className="carouselImg"
                alt="Second Slide"
              />
            </Link>
          </MDBCarouselItem>

          <MDBCarouselItem itemID="3">
            <Link to="/research/ongoing-projects">
              <MDBCarouselElement
                src={slide_3}
                alt="Third Slide"
                className="carouselImg"
              />
            </Link>
            <MDBCarouselCaption></MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default Carousel;
