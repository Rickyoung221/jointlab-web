import { MDBContainer, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import './Avatar.css';
import Sidebar from '../components/Sidebar';
import AhmedImg from '../../../assets/img/vision/avatar/ahmed.jpg';
import YipingImg from '../../../assets/img/vision/avatar/yiping.jpg';
import Zhiminimg from '../../../assets/img/vision/avatar/zhimin.jpg';
import JialuImg from '../../../assets/img/vision/avatar/jialu.jpg';
import RickImg from '../../../assets/img/vision/avatar/rick.jpeg';

function avatarPage() {
  return (
    <>
      <h1> Meet Our Team </h1>
      <Sidebar />
      <div className="main-content">
        <MDBContainer fluid className="text-center">
          <br />
          <br />
          <MDBRow>
            <MDBCol md="4">
              <img
                src={AhmedImg}
                className="rounded-circle mb-3 avatar-custom"
                alt="Avatar-Ahmed"
              />
              <h5 className="mb-2">
                <strong>Ahmed Tlili</strong>
              </h5>
              <p className="text-muted">Lab Director</p>
            </MDBCol>
            <MDBCol md="4">
              <img
                src={YipingImg}
                className="rounded-circle mb-3 avatar-custom"
                alt="Avatar-Yiping"
              />
              <h5 className="mb-2">
                <strong>Yiping Wang</strong>
              </h5>
              <p className="text-muted">
                Senior Research Assistant & Project Manager
              </p>
            </MDBCol>
            <MDBCol md="4">
              <img
                src={Zhiminimg}
                className="rounded-circle mb-3 avatar-custom"
                alt="Avatar-Zhimin"
              />
              <h5 className="mb-2">
                <strong>Zhimin Li</strong>
              </h5>
              <p className="text-muted">Research Assistant</p>
            </MDBCol>
          </MDBRow>
          <br />
          <br />
          <MDBRow>
            <MDBCol md="4">
              <img
                src={JialuImg}
                className="rounded-circle mb-3 avatar-custom"
                alt="Avatar-Lulu"
              />
              <h5 className="mb-2">
                <strong>Jialu Zhao</strong>
              </h5>
              <p className="text-muted">Research Assistant</p>
            </MDBCol>
            <MDBCol md="4">
              <img
                src={RickImg}
                className="rounded-circle mb-3 avatar-custom"
                alt="Avatar-Rick"
              />
              <h5 className="mb-2">
                <strong>Rick Young</strong>
              </h5>
              <p className="text-muted">Full Stack Engineer & Web Designer</p>
            </MDBCol>
          </MDBRow>
          <br />
          <br />
        </MDBContainer>
      </div>
    </>
  );
}

export default avatarPage;
