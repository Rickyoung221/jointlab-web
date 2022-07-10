import Sidebar from '../components/Sidebar';
import {
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBContainer
} from 'mdb-react-ui-kit';
import './Partners.css';
import NetDragonLogo from '@img/vision/partners/NetDragon-logo.jpg';
import ElernityLogo from '@img/vision/partners/Elernity-logo.jpg';
import ClassinLogo from '@img/vision/partners/Classin-logo.jpg';

function partnersPage() {
  return (
    <>
      <h1> Our Partners </h1>
      <Sidebar />
      <div className="main-content">
        <MDBContainer fluid breakpoint="md" className="card-position">
          <MDBCard className="card-size">
            <MDBRow className="g-0">
              <MDBCol md="4">
                <MDBCardImage
                  className="rounded img-size "
                  src={NetDragonLogo}
                  alt="NetDragon"
                  fluid
                />
              </MDBCol>
              <MDBCol md="8">
                <MDBCardBody>
                  <a
                    target="_blank"
                    href="http://www.netdragon.com/"
                    rel="noreferrer"
                    className="stretched-link"
                  >
                    <MDBCardTitle className="card-title text-primary">
                      Net Dragon
                      <MDBIcon fas icon="link" size="xs" color="primary" />
                    </MDBCardTitle>
                  </a>
                  <MDBCardText className="intro-color">
                  NetDragon Websoft Holdings Limited, established in 1999, is a prominent innovator in China’s online gaming and education industries. As the first Chinese game maker that successfully expanded outside of its home market, NetDragon has localized its products in over 10 different languages, including English, French, Spanish and Arabic, and has reached over 65 million users covering 180 markets.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBContainer>

        <MDBContainer fluid breakpoint="md" className="card-position">
          <MDBCard className="card-size">
            <MDBRow className="g-0">
              <MDBCol md="4">
                <MDBCardImage
                  className="rounded img-size"
                  src={ElernityLogo}
                  alt="Elernity"
                  fluid
                />
              </MDBCol>
              <MDBCol md="8">
                <MDBCardBody>
                  <a
                    target="_blank"
                    href="https://www.101.com/"
                    rel="noreferrer"
                    className="stretched-link"
                  >
                    <MDBCardTitle className="card-title text-primary">
                      Elernity
                      <MDBIcon fas icon="link" size="xs" color="primary" />
                    </MDBCardTitle>
                  </a>
                  <MDBCardText className="intro-color">
                    Founded in 2010, Elernity is a subsidiary of NetDragon
                    Websoft Holdings Limited. Elernity’s mission is to leverage
                    the power of the Internet to improve education, by combining
                    superior educational resources with advanced information
                    technologies. The company employs over 1,500 personnel,
                    including over 1,000 research personnel.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBContainer>

        <MDBContainer fluid breakpoint="md" className="card-position">
          <MDBCard className="card-size">
            <MDBRow className="g-0">
              <MDBCol md="4">
                <MDBCardImage
                  className="rounded img-size"
                  src={ClassinLogo}
                  alt="Classin"
                  fluid
                />
              </MDBCol>
              <MDBCol md="8">
                <MDBCardBody>
                  <a
                    target="_blank"
                    href="https://www.classin.com/en/ "
                    rel="noreferrer"
                    className="stretched-link"
                  >
                    <MDBCardTitle className="card-title text-primary">
                      Classin
                      <MDBIcon fas icon="link" size="xs" color="primary" />
                    </MDBCardTitle>
                  </a>
                  <MDBCardText className="intro-color">
                  ClassIn is a groundbreaking online teaching platform that enables teachers and students from across the globe to come together, face-to-face, and learn in a collaborative online environment. ClassIn is built for teachers and schools and provides a one-stop solution for digital learning. It also functions as a learning management system, including the ability to create classes, track attendance and submit homework.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBContainer>

      </div>
    </>
  );
}

export default partnersPage;
