import Sidebar from "../components/Sidebar";
import workshop1 from "@img/event/workshop/Picture1.png";
import ItemList from "../../commons/components/ItemList";
import { withTranslation } from "react-i18next";

function Workshop({t}) {
  return (
    <>
      <h1> {t("events.workshop.title")} </h1>
      <Sidebar />
      <div className="main-content">
        <ItemList
          img={workshop1}
          title="International Workshop, Tunisia 2019"
          txt="Hosted the international OER workshop at International conference on ICT & Accessibility
            (ICTA19 conference, in 2019 Tunisia with participants from over 20 countries."
          url="1"
        />
      </div>
    </>
  );
}
export default withTranslation()(Workshop);
