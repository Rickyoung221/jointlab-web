import Sidebar from "../components/Sidebar";
import "./Mission.css";
import { withTranslation } from "react-i18next";

function Mission({ t }) {
  return (
    <>
      <h1> {t("home.content.vision.title")} </h1>
      <Sidebar />
      <div className="mission">
        <div className="text-center">
          <strong> {t("home.content.vision.sub-title")} </strong>
        </div>
        <p>
          {t("home.content.vision.content.part1")}
          <br />
          {t("home.content.vision.content.part2")}
        </p>
      </div>

      <h1> {t("about.vision&mission.mission.title")} </h1>

      <div>
        <ul className="mission">
          <li>
          {t("about.vision&mission.mission.part1")}
          </li>
          <li>
          {t("about.vision&mission.mission.part2")}
          </li>
          <li>
          {t("about.vision&mission.mission.part3")}
          </li>
          <li>
          {t("about.vision&mission.mission.part4")}
          </li>
        </ul>
      </div>
    </>
  );
}

export default withTranslation()(Mission);
