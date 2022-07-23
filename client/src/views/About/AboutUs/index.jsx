import { MDBContainer } from 'mdb-react-ui-kit';
import Sidebar from '../components/Sidebar';
import lab1 from '@img/home/lab1.jpeg';
import './AboutUs.css';
import { withTranslation } from 'react-i18next';

function AboutUs({t}) {
  return (
    <>
      <h1> {t("home.content.about-us.title")}  </h1>
      <Sidebar />
      <div className="main-content">
        <MDBContainer breakpoint="sm">
          <p>
          {t("home.content.about-us.content")}
          </p>
          <img src={lab1} className="img-fluid" alt="lab" />
        </MDBContainer>
      </div>
    </>
  );
}

export default withTranslation()(AboutUs);