import Sidebar from "../components/Sidebar";
import {
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBContainer,
} from "mdb-react-ui-kit";
import "./Partners.css";
import NetDragonLogo from "@img/vision/partners/NetDragon-logo.jpg";
import ElernityLogo from "@img/vision/partners/Elernity-logo.jpg";
import ClassinLogo from "@img/vision/partners/Classin-logo.jpg";
import { withTranslation } from "react-i18next";

function partnersPage({t}) {
  return (
    <>
      <h1> {t("about.our-partners.title")} </h1>
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
                    {t("about.our-partners.net-dragon.name")}
                      <MDBIcon fas icon="link" size="xs" color="primary" />
                    </MDBCardTitle>
                  </a>
                  <MDBCardText className="intro-color">
                  {t("about.our-partners.net-dragon.introduction")}
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
                    {t("about.our-partners.elernity.name")}
                      <MDBIcon fas icon="link" size="xs" color="primary" />
                    </MDBCardTitle>
                  </a>
                  <MDBCardText className="intro-color">
                  {t("about.our-partners.elernity.introduction")}
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
                    {t("about.our-partners.classin.name")}
                      <MDBIcon fas icon="link" size="xs" color="primary" />
                    </MDBCardTitle>
                  </a>
                  <MDBCardText className="intro-color">
                  {t("about.our-partners.classin.introduction")}
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

export default withTranslation()(partnersPage);
