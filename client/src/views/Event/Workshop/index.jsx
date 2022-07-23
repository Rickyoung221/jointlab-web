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
          title={t("events.workshop.w1.title")}
          txt={t("events.workshop.w1.introduction")}
          url=""
        />
      </div>
    </>
  );
}
export default withTranslation()(Workshop);
