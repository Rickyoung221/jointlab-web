import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import "./Avatar.css";
import Sidebar from "../components/Sidebar";
import AhmedImg from "@img/vision/avatar/ahmed.jpg";
import Zhiminimg from "@img/vision/avatar/zhimin.jpg";
import JialuImg from "@img/vision/avatar/jialu.jpg";
import RickImg from "@img/vision/avatar/rick.gif";
import { withTranslation } from "react-i18next";

function avatarPage({ t }) {
  return (
    <>
      <h1> {t("about.team-members.title")} </h1>
      <Sidebar />
      <div className="main-content">
        <MDBContainer fluid className="text-center">
          <br />
          <br />
          <MDBRow>
            <MDBCol md="4">
              <a
                href="https://scholar.google.com/citations?user=xmF8jxoAAAAJ&hl=en&oi=ao"
                target="__blank"
              >
                <img
                  src={AhmedImg}
                  className="rounded-circle mb-3 avatar-custom more-info"
                  alt="Avatar-Ahmed"
                />
              </a>
              <h5 className="mb-2">
                <strong>{t("about.team-members.ahmed.name")}</strong>
              </h5>
              <p className="text-muted">
                {t("about.team-members.ahmed.job-title")}
              </p>
            </MDBCol>

            <MDBCol md="4">
              <img
                src={Zhiminimg}
                className="rounded-circle mb-3 avatar-custom"
                alt="Avatar-Zhimin"
              />
              <h5 className="mb-2">
                <strong>{t("about.team-members.zhiminli.name")}</strong>
              </h5>
              <p className="text-muted">
                {t("about.team-members.zhiminli.job-title")}
              </p>
            </MDBCol>
            <MDBCol md="4">
              <img
                src={JialuImg}
                className="rounded-circle mb-3 avatar-custom"
                alt="Avatar-Lulu"
              />
              <h5 className="mb-2">
                <strong> {t("about.team-members.jialuzhao.name")} </strong>
              </h5>
              <p className="text-muted">
                {t("about.team-members.jialuzhao.job-title")}
              </p>
            </MDBCol>
          </MDBRow>
          <br />
          <br />
          <MDBRow>
            <MDBCol md="4">
              <img
                src={RickImg}
                className="rounded-circle mb-3 avatar-custom"
                alt="Avatar-Rick"
              />
              <h5 className="mb-2">
                <strong>{t("about.team-members.rickyoung.name")}</strong>
              </h5>
              <p className="text-muted">
                {t("about.team-members.rickyoung.job-title")}
              </p>
            </MDBCol>
          </MDBRow>
          <br />
          <br />
        </MDBContainer>
      </div>
    </>
  );
}

export default withTranslation()(avatarPage);
