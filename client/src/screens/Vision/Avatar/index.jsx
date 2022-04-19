import { MDBContainer, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import './Avatar.css';
import Sidebar from '../components/Sidebar';
import AhmedImg from '../../../assets/img/vision/avatar/ahmed.jpg';
import YipingImg from '../../../assets/img/vision/avatar/yiping.jpg';
import Zhiminimg from '../../../assets/img/vision/avatar/zhimin.jpg';
import JialuImg from '../../../assets/img/vision/avatar/jialu.jpg';

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
                class="rounded-circle mb-3 avatar-custom"
                alt="Avatar-Ahmed"
              />
              <h5 class="mb-2">
                <strong>Ahmed Tlili</strong>
              </h5>
              <p class="text-muted">Lab Director</p>
            </MDBCol>
            <MDBCol md="4">
              <img
                src={YipingImg}
                class="rounded-circle mb-3 avatar-custom"
                alt="Avatar-Yiping"
              />
              <h5 class="mb-2">
                <strong>Yiping Wang</strong>
              </h5>
              <p class="text-muted">
                Senior Research Assistant & Project Manager
              </p>
            </MDBCol>
            <MDBCol md="4">
              <img
                src={Zhiminimg}
                class="rounded-circle mb-3 avatar-custom"
                alt="Avatar-Zhimin"
              />
              <h5 class="mb-2">
                <strong>Zhimin Li</strong>
              </h5>
              <p class="text-muted">Research Assistant</p>
            </MDBCol>
          </MDBRow>
          <br />
          <br />
          <MDBRow>
            <MDBCol md="4">
              <img
                src={JialuImg}
                class="rounded-circle mb-3 avatar-custom"
                alt="Avatar-Lulu"
              />
              <h5 class="mb-2">
                <strong>Jialu Zhao</strong>
              </h5>
              <p class="text-muted">Research Assistant</p>
            </MDBCol>
            <MDBCol md="4">
              <img
                src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.doubanio.com%2Fview%2Frichtext%2Flarge%2Fpublic%2Fp188626067.jpg&refer=http%3A%2F%2Fimg1.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649429490&t=aa8620321be31dfb6dcf79fcad94629a"
                class="rounded-circle mb-3 avatar-custom"
                alt="Avatar-Rick"
              />
              <h5 class="mb-2">
                <strong>Rick Young</strong>
              </h5>
              <p class="text-muted">Full Stack Engineer & Web Designer</p>
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
