import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
  MDBContainer,
} from "mdb-react-ui-kit";
import slide_1 from "@img/home/Arab_region_education_technology_industry_investigtion_project.png";
import slide_2 from "@img/home/GSE_2021_OEP_and_Teacher_Cap_city_Building_Forum.png";
import slide_3 from "@img/home/Science_textbook_comparison_project.png";
import "./Carousel.css";

function Carousel() {
  return (
    <MDBContainer breakpoint="md">
      <MDBCarousel showControls fade>
        <MDBCarouselInner>
          <MDBCarouselItem className="active" itemID="1">
            <div className="carouselImg">
              <MDBCarouselElement src={slide_1} alt="First slide" />
            </div>
            <MDBCarouselCaption>
              <h5 className="text-capitalize">Arab region education technology industry investigation project</h5>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem itemID="2">
            <MDBCarouselElement
              src={slide_2}
              className="carouselImg"
              alt="Second Slide"
            />
            <MDBCarouselCaption>
              <h5 className="text-capitalize">GSE 2021: OEP and Teacher Capacity Building Forum</h5>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem itemID="3">
            <MDBCarouselElement
              src={slide_3}
              alt="Third Slide"
              className="carouselImg"
            />
            <MDBCarouselCaption>
              <h5 className="text-capitalize">Science textbook comparison project</h5>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default Carousel;
