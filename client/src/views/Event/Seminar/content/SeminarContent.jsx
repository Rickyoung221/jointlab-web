import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import mdFilePath from "./seminar1.md";

function SeminarContent() {
  const [markdown, setMdFile] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(mdFilePath)
      .then((response) => response.text())
      .then((txt) => setMdFile(txt));
  }, [markdown]);

  return (
    <div className="md-content">
      <ReactMarkdown children={markdown} />
    </div>
  );
}

export default SeminarContent;
