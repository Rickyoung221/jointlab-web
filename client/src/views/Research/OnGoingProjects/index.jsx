import science_cover from '@img/research/1-Science-textbook-comparison.png';
import arab_cover from '@img/research/2-Arab-region-educatio-technology-industry-investigation.png';
import metaverse_cover from '@img/research/3-Metaverse-education.png';
import { MDBContainer } from 'mdb-react-ui-kit';
import Sidebar from '../components/Sidebar';
import './OnGoingProjects.css';
import { withTranslation } from 'react-i18next';

function OnGoingProjects({t}) {
  return (
    <>
      <h1> {t("research.ongoing-projects.title")} </h1>
      <Sidebar />
      <div className="main-content">
        <section id="onGoingProjects">
          <MDBContainer fluid breakpoint="sm">
            <img
              src={science_cover}
              className="textbook float-left"
              alt="science"
            />
            <h3> {t("research.ongoing-projects.part1.name")} </h3>
            <p>
            {t("research.ongoing-projects.part1.introduction")}
            </p>
          </MDBContainer>
        </section>

        <hr className="new1" />

        <section id="finishedProjects">
          <MDBContainer fluid breakpoint="sm">
            <img src={arab_cover} className="Edtech float-right" alt="EDTECH" />
            <h3> {t("research.ongoing-projects.part2.name")} </h3>
            <p>
            {t("research.ongoing-projects.part2.introduction")}
            </p>
          </MDBContainer>
        </section>

        <hr className="new1" />

        <section>
          <MDBContainer fluid breakpoint="sm">
            <img
              src={metaverse_cover}
              className="metaverse_cover float-left"
              alt="metaverse"
            />
            <h3>  {t("research.ongoing-projects.part3.name")} </h3>
            <p>
            {t("research.ongoing-projects.part3.introduction")}
            </p>
          </MDBContainer>
        </section>
        <br />
      </div>
    </>
  );
}

export default withTranslation()(OnGoingProjects);
