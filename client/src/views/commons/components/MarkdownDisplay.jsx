import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import remarkGfm from "remark-gfm";
import mdFilePath from "./EducationDevelopmentDoc.md";
import "./MarkdownDisplay.css";

function MarkdownDisplay() {
  const [markdown, setMdFile] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(mdFilePath)
      .then((response) => response.text())
      .then((txt) => setMdFile(txt));
  }, [markdown]);

  return (
    <div className="content">
      <ReactMarkdown children={markdown} />
    </div>
  );
}

export default MarkdownDisplay;
