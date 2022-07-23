import Sidebar from "../components/Sidebar";
import mdFilePath from "./content/Conference.md";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import { withTranslation } from "react-i18next";

function Conference({ t }) {
  const [markdown, setMdFile] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(mdFilePath)
      .then((response) => response.text())
      .then((txt) => setMdFile(txt));
  }, [markdown]);

  return (
    <>
      <h1> {t("publications.conferences.title")} </h1>
      <Sidebar />
      <div className="main-content">
        {t("publications.conferences.content.introduction")}
        <br />
        <br />
        {t("publications.conferences.content.1")}
        <hr />
        {t("publications.conferences.content.2")}
        <hr />
        {t("publications.conferences.content.3")}
        <hr />
        {t("publications.conferences.content.4")}
        <hr />
        {t("publications.conferences.content.5")}
        <hr />
        {t("publications.conferences.content.6")}
        <hr />
        {t("publications.conferences.content.7")}
        <hr />
        {t("publications.conferences.content.8")}
        <hr />
        {t("publications.conferences.content.9")}
        <hr />
        {t("publications.conferences.content.10")}
        <hr />
        {t("publications.conferences.content.11")}
        <br />
        <br />
      </div>
    </>
  );
}

export default withTranslation()(Conference);
