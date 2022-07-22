import React from "react";
import { Routes, Route } from "react-router-dom";
import "../../assets/index.css";
import "../../assets/scss/mdb.min.css";
import "../../assets/scss/custom_variables.scss";
import Home from "../Home";
import App from "../App";
import Avatar from "../About/Avatar";
import AboutUs from "../About/AboutUs";
import Missions from "../About/Mission";
import Partners from "../About/Partners";
import Advisory from "../About/AdvisoryBoard";

import FinishedProjects from "../Research/FinishedProjects";
import OnGoingProjects from "../Research/OnGoingProjects";
import EducationDevelopment from "../Research/FinishedProjects/EducationDevelopment";

import Reports from "../Publication/Report";
import JournalArticles from "../Publication/JournalArticle";
import Conferences from "../Publication/Conference";

import Workshop from "../Event/Workshop";
import WorkshopContent from "../Event/Workshop/content/WorkshopContent";
import Seminar from "../Event/Seminar";
import SeminarContent from "../Event/Seminar/content/SeminarContent";
import SeminarContent2 from "../Event/Seminar/content/SeminarContent2";
import MediaCover from "../Event/MediaCover";
import MediaCoverContent from "../Event/MediaCover/content/MarkdownDisplay";

import JoinUs from "../JoinUs";
import NotFound from "../NotFound";

//Todo: 试试优化代码改成只需要用一个sidebar组件, 使用outlet
function Router() {
  return (
      <Routes>
        {/* For backend mananger admin system, would not outlet in the App component */}
        <Route path="/" element={<App />} exact={true}>
          <Route index element={<Home />} />

          <Route path="aboutUs" >
              <Route path="aboutUs" element={<AboutUs />} />
              <Route path="avatar" element={<Avatar />} />
              <Route path="advisory-board" element={<Advisory />} />
              <Route path="partners" element={<Partners />} />
              <Route path="mission" element={<Missions />} />
          </Route>

          <Route path="research">
            <Route path="ongoing-projects/*" element={<OnGoingProjects />} />
            <Route path="finished-projects" element={<FinishedProjects />} />
            <Route path="finished-projects/education-development" element={<EducationDevelopment />} />

          </Route>

          <Route path="publication">
            <Route path="reports" element={<Reports />} />
            <Route path="journal-articles" element={<JournalArticles />} />
            <Route path="conferences" element={<Conferences />} />
          </Route>

          <Route path="events">
            <Route path="workshop" element={<Workshop />} />
            <Route path="workshop/:articleId" element={<WorkshopContent />} />
  
            <Route path="seminar" element={<Seminar />} />
            <Route path="seminar/1" element={<SeminarContent />} />
            <Route path="seminar/2" element={<SeminarContent2 />} />


            <Route path="media-cover" element={<MediaCover />} />
            <Route path="media-cover/:articleId" element={<MediaCoverContent />} />
          </Route>

          <Route path="joinUs" element={<JoinUs />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    
  );
}
export default Router;
