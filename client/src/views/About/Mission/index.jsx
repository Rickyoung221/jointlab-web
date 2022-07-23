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

      <h1> Mission </h1>

      <div>
        <ul className="mission">
          <li>
            {" "}
            We are devoted to promote the cutting edge research in the field of
            education technology, with a focus in Open Education Resources,
            Metaverse and Education and Artificial intelligence in education.{" "}
          </li>
          <li>
            {" "}
            We are committed to improve the international collaboration between
            China and the Arab region through joint research projects,
            international conferences, webinars, and seminars to bridges the
            scholars in China and the Arab region and enhance the communication.{" "}
          </li>
          <li>
            {" "}
            We are passionate about integrating education technology into
            educational practices with the goal to benefit students and
            educators in the Arab region and beyond.{" "}
          </li>
          <li>
            We hope to promote smart education by organizing ICT related teacher
            training events and establishing education showroom in the Arab
            region.
          </li>
        </ul>
      </div>
    </>
  );
}

export default withTranslation()(Mission);
