import Sidebar from '../components/Sidebar';
import mdFilePath from './content/Journal.md';
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';
import remarkGfm from 'remark-gfm';


function JournalArticle(){
  const [markdown, setMdFile] = useState(null);
  useEffect(() => {
    window.scrollTo(0,0);
    fetch(mdFilePath)
      .then((response) => response.text())
      .then((txt) =>
        setMdFile(txt));
      }, [markdown]);

  return(
    <>
    <h1> Journal Articles </h1>
    <Sidebar />
        <div className="main-content">

            <ReactMarkdown children={markdown} />

        </div>

    </>
  )
}
export default JournalArticle;
