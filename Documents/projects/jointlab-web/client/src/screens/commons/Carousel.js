import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
  MDBContainer,
} from 'mdb-react-ui-kit';
import lab1 from '../../assets/img/lab1.jpeg';
import lab2 from '../../assets/img/lab2.jpeg';
import './Carousel.css';

function CarouselPage() {
  return (
    <MDBContainer breakpoint = 'md'>
        <MDBCarousel showControls fade>
          <MDBCarouselInner>
            <MDBCarouselItem className='active' itemId="1">
              <div className="carouselImg">
                <MDBCarouselElement src={lab1} alt='First slide' />
              </div>
              <MDBCarouselCaption>
                    <h5 className='text-capitalize'>title</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>

            <MDBCarouselItem itemId="2">
              <MDBCarouselElement src={lab2} className='carouselImg' alt='Second Slide' />
              <MDBCarouselCaption>
                <h5 className='text-capitalize'>title2</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>

            <MDBCarouselItem itemId="3">
              <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).webp' alt='Third Slide' className='carouselImg' />
              <MDBCarouselCaption>
                <h5 className='text-capitalize'>title3</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
    </MDBContainer>


  );
}

export default CarouselPage;
