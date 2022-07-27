import Sidebar from "../components/Sidebar";
import ItemList from "../../commons/components/ItemList";
import gse from "@img/event/seminar/GSE_2021_OEP_and_Teacher_Cap_city_Building_Forum.png";
import index from "@img/event/seminar/index.png";
import { withTranslation } from 'react-i18next';

function Seminar({t}) {
  return (
    <>
      <h1> {t("events.seminar.title")} </h1>

      <Sidebar />
      <div className="main-content">
        <ItemList
          img={gse}
          title={t("events.seminar.s1.title")}
          txt={t("events.seminar.s1.introduction")}
          url="1"
        />
      </div>

      <div className="main-content">
        <ItemList
          img={index}
          title={t("events.seminar.s2.title")}
          txt={t("events.seminar.s2.introduction")}
          url="2"
        />
      </div>
    </>
  );
}
export default withTranslation()(Seminar);
