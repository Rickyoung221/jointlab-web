import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';
import mdFilePath from './mediacover1_en.md';
import mdFilePath_en from "./mediacover1_en.md";
import mdFilePath_zh from "./mediacover1_zh.md";
import mdFilePath_ar from "./mediacover1_ar.md";
import i18n from "../../../../i18n";


function MarkdownDisplay(){
  const [markdown, setMdFile] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(i18n.language)
    let mdFilePath;
    switch(i18n.language){
      case 'en':
        mdFilePath = mdFilePath_en;
        break;
      case 'zh':
        mdFilePath = mdFilePath_zh;
        break;
      case 'ar':
        mdFilePath = mdFilePath_ar;
        break;
    }
    console.log(mdFilePath)
    fetch(mdFilePath)
      .then((response) => response.text())
      .then((txt) => setMdFile(txt));
  }, [i18n.language]);


  return(
    <div className='md-content'>
      <ReactMarkdown children={markdown} />
    </div>
  )
}

export default MarkdownDisplay;
