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
import AlecsoLogo from '@img/vision/partners/ALESCO-logo.jpg';

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
                    NetDragon Websoft Holdings Limited (Stock Code: 00777. HK),
                    established in 1999, is a prominent innovator in China’s
                    online gaming and education industries. <br />
                    As the first Chinese game maker that successfully expanded
                    outside of its home market, NetDragon has localized its
                    products in over 10 different langauges, including English,
                    French, Spanish and Arabic, and has reached over 65 million
                    users covering 180 markets.
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
                    ClassIn is a leading edtech company that provides a one-stop
                    solution for digital learning.
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
                  className="rounded img-size "
                  src={AlecsoLogo}
                  alt="ALECSO"
                  fluid
                />
              </MDBCol>
              <MDBCol md="8">
                <MDBCardBody>
                  <a
                    target="_blank"
                    href="http://www.alecso.org "
                    rel="noreferrer"
                    className="stretched-link"
                  >
                    <MDBCardTitle className="card-title text-primary">
                      ALECSO
                      <MDBIcon fas icon="link" size="xs" color="primary" />
                    </MDBCardTitle>
                  </a>
                  <MDBCardText className="intro-color">
                    ALECSO, established in July 1970, is a governmental
                    organization working under the umbrella of the Arab League
                    and it has the membership of 22 Arab countries. ALECSO is
                    endeavoring to conduct and coordinate Pan-Arab projects
                    related to Educational, Cultural, Scientific and ICT fields
                    and it is premised on the values of tolerance, moderation,
                    respect of others and cultural diversity.
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
