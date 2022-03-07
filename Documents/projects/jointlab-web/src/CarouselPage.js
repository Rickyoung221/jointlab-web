import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
  MDBContainer,
} from 'mdb-react-ui-kit';

function CarouselPage() {
  return (
<MDBContainer breakpoint = 'md'>
    <MDBCarousel showControls fade>
      <MDBCarouselInner>
        <MDBCarouselItem className='active' itemId="1">
          <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).webp' alt='First slide' />
          <MDBCarouselCaption>
                <h5 className='text-capitalize'>title</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId="2">
          <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).webp' alt='...' />
          <MDBCarouselCaption>
            <h5 className='text-capitalize'>title2</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId="3">
          <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).webp' alt='...' />
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