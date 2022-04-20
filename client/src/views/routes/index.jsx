import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../../assets/index.css";
import "../../assets/scss/mdb.min.css";
import "../../assets/scss/custom_variables.scss";
import Home from "../Home";
import App from "../../App";
import Avatar from "../Vision/Avatar";
import AboutUs from "../Vision/AboutUs";
import Missions from "../Vision/Mission";
import Partners from "../Vision/Partners";
import Advisory from "../Vision/AdvisoryBoard";

import FinishedProjects from "../Research/FinishedProjects";
import OnGoingProjects from "../Research/OnGoingProjects";
import EducationDevelopment from "../Research/FinishedProjects/EducationDevelopment";

import Reports from "../Publication/Report";
import JournalArticles from "../Publication/JournalArticle";
import Conferences from "../Publication/Conference";

import Workshop from "../Event/Workshop";
import WorkshopContent from "../Event/Workshop/content/WorkshopContent";
import Seminar from "../Event/Seminar";
import MediaCover from "../Event/MediaCover";
import MediaCoverContent from "../Event/MediaCover/content/MarkdownDisplay";

import JoinUs from "../JoinUs";
import NotFound from "../NotFound";
//Todo: 试试优化代码改成只需要用一个sidebar组件, 使用outlet
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} exact={true}>
          <Route index element={<Home />} />

          <Route path="vision">
            <Route path="mission" element={<Missions />} />
            <Route path="aboutUs" element={<AboutUs />}>
              <Route path="avatar" element={<Avatar />} />
              <Route path="advisory-board" element={<Advisory />} />
              <Route path="partners" element={<Partners />} />
            </Route>
          </Route>

          <Route path="research">
            <Route path="ongoing-projects" element={<OnGoingProjects />}>
              <Route path="education-development" element={<EducationDevelopment />} />
            </Route>
            <Route path="finished-projects" element={<FinishedProjects />} />
          </Route>

          <Route path="publication">
            <Route path="reports" element={<Reports />} />
            <Route path="journal-articles" element={<JournalArticles />} />
            <Route path="conferences" element={<Conferences />} />
          </Route>

          <Route path="events">
            <Route path="workshop" element={<Workshop />}>
              <Route path="1" element={<WorkshopContent />} />
            </Route>
            <Route path="seminar" element={<Seminar />} />
            <Route path="media-cover" element={<MediaCover />}>
              <Route path="1" element={<MediaCoverContent />} />
            </Route>
          </Route>

          <Route path="joinUs" element={<JoinUs />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
