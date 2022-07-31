import Sidebar from "../components/Sidebar";
import ItemList from "../../commons/components/ItemList";
import completition from "@img/event/mediaCover/Picture3.png";
import { withTranslation } from "react-i18next";
import mdFilePath_en from "./content/mediacover1_en.md";
import mdFilePath_zh from "./content/mediacover1_zh.md";
import mdFilePath_ar from "./content/mediacover1_ar.md";
import i18n from "../../../i18n";

function MediaCover({t}) {
  return (
    <>
      <h1>{t("events.media-cover.title")} </h1>
      <Sidebar />
      <div className="main-content">
        <ItemList
          img={completition}
          title= {t("events.media-cover.m1.title")}
          txt={t("events.media-cover.m1.introduction")}
          url="1"
        />
      </div>
    </>
  );
}
export default withTranslation()(MediaCover);
