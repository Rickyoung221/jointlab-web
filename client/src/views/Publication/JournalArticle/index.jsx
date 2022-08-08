import Sidebar from "../components/Sidebar";
import mdFilePath from "./content/Journal.md";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import { withTranslation } from 'react-i18next';

function JournalArticle({t}) {
  const [markdown, setMdFile] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(mdFilePath)
      .then((response) => response.text())
      .then((txt) => setMdFile(txt));
  }, [markdown]);

  return (
    <>
      <h1> {t("publications.journal-articles.title")}  </h1>
      <Sidebar />
      <div className="main-content">
        <ReactMarkdown children={markdown} />
      </div>
    </>
  );
}

export default withTranslation()(JournalArticle);
