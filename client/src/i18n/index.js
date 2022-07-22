import LanguageDetector from "i18next-browser-languagedetector";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import zh from "./zh-cn.json";
import ar from "./arab.json";
import en from "./en-us.json";

const resources = {
  zh: {
    translation: zh
  },
  en: {
    translation: en
  },
  ar: {
    translation: ar
  },
};

i18n
  .use(LanguageDetector) //嗅探当前浏览器语言 zh-CN
  .use(initReactI18next) // 将 i18n 向下传递给 react-i18next
  .init({
    //初始化
    resources, //本地多语言数据
    fallbackLng: "en", //默认当前环境的语言
    detection: {
      caches: ["localStorage", "sessionStorage", "cookie"],
    },
  });

export default i18n;
