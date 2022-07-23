import data_screenshot from "@img/research/4-Open-Interactive-Database.png";
import education_development from "@img/research/5-Education-development-in-the-Arab-region.png";
import Sidebar from "../components/Sidebar";
import { MDBContainer } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import "./FinishedProjects.css";
import { withTranslation } from 'react-i18next';

function FinishedProjects({t}) {
  return (
    <>
      <h1> {t("research.finished-projects.title")} </h1>
      <Sidebar />
      <div className="main-content">
        <section>
          <MDBContainer fluid breakpoint="sm">
            <img
              src={data_screenshot}
              className="data_screenshot float-left"
              alt="database"
            />
            <a href='http://observatory.alecso.org/Data/en/' rel="noreferrer" target="_blank" > <h3> Open Interactive Database </h3> </a>
            <p>
              In line with the Open Science wave, an Open Interactive Database
              which contains detailed statistics related to the Arab region——22
              countries was developed. Specifically, the indicators covered by
              the OID, such as in the field of economy, culture and education,
              can help to evaluate the Arab countries' achievement towards17
              SDGs. The purpose of the OID is to provide open-access to data
              about the Arab region, which researchers, practitioners and
              decision makers can use to understand, explore and enhance a given
              field. In addition, this data can promote cross-collaboration
              between countries to promote the growth of all countries in the
              Arab region.
            </p>
          </MDBContainer>
        </section>

        <hr className="new1" />

        <MDBContainer fluid breakpoint="sm">
          <img
            src={education_development}
            className="educaiton-development float-right"
            alt="Education_Dev"
          />
          <Link to="education-development">
            <h3> Education Development in the Arab Region </h3>
          </Link>
          <p>
            A book titled An Overview of Education Development in the Arab
            Region: Insights and Recommendations Towards Sustainable Development
            Goals (SDG) is released by SLIBNU-ALECSO ‘Smart Education’ Joint
            Lab. The book is an outcome of the Open Interactive Database
            Project, in collaboration between the Smart Learning Institute of
            Beijing Normal University and the Arab League Educational, Cultural
            and Scientific Organization. This book aims to provide a
            comprehensive understanding of the education development in the Arab
            region. The book reveals that major efforts have been made by many
            Arab countries, especially those in Sub-Saharan Africa, over the
            past decade to improve education access.
          </p>
        </MDBContainer>
      </div>
    </>
  );
}
export default withTranslation()(FinishedProjects);
