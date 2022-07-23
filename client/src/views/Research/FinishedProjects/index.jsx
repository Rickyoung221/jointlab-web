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
            <a href='http://observatory.alecso.org/Data/en/' rel="noreferrer" target="_blank" > <h3> {t("research.finished-projects.part1.name")}</h3> </a>
            <p>
            {t("research.finished-projects.part1.introduction")}
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
            <h3>             {t("research.finished-projects.part2.name")} </h3>
          </Link>
          <p>
          {t("research.finished-projects.part2.introduction")}
          </p>
        </MDBContainer>
      </div>
    </>
  );
}
export default withTranslation()(FinishedProjects);
