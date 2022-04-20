import React from 'react';
import  { render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './assets/index.css';
import './assets/scss/mdb.min.css';
import './assets/scss/custom_variables.scss';
import App from './App';
import Home from './screens/Home';

import Avatar from './screens/Vision/Avatar';
import AboutUs from './screens/Vision/AboutUs';
import Missions from './screens/Vision/Mission';
import Partners from './screens/Vision/Partners';
import Advisory from './screens/Vision/AdvisoryBoard';

import JoinUs from './screens/JoinUs';

import FinishedProjects from './screens/Research/FinishedProjects';
import OnGoingProjects from './screens/Research/OnGoingProjects';
import EducationDevelopment from './screens/Research/FinishedProjects/EducationDevelopment';

import Reports from './screens/Publication/Report';
import JournalArticles from './screens/Publication/JournalArticle';
import Conferences from './screens/Publication/Conference';

import Workshop from './screens/Event/Workshop';
import WorkshopContent from './screens/Event/Workshop/content/WorkshopContent';
import Seminar from './screens/Event/Seminar';
import MediaCover from './screens/Event/MediaCover';
import MediaCoverContent from './screens/Event/MediaCover/content/MarkdownDisplay';


import NotFound from './screens/NotFound';
const rootElement = document.getElementById("root");


render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} exact={true} >
        <Route index element={<Home />} />

        <Route path="/vision/mission" element={<Missions />}  />
        <Route path="/vision/aboutUs/avatar" element={<Avatar />}  />
        <Route path='/vision/aboutUs' element={<AboutUs />} />
        <Route path='/vision/aboutUs/advisory-board' element={<Advisory />} />
        <Route path='/vision/aboutUs/partners' element={<Partners />} />

        <Route path='/research/ongoing-projects' element={<OnGoingProjects />} />
        <Route path='/research/finished-projects' element={<FinishedProjects />} />
        <Route path='/research/ongoing-projects/education-development' element={<EducationDevelopment />} />

        <Route path='/publication/reports' element={<Reports />} />
        <Route path='/publication/journal-articles' element={<JournalArticles />} />
        <Route path='/publication/conferences' element={<Conferences />} />

        <Route path='/events/workshop' element={<Workshop />} />
                <Route path='/events/workshop/1' element={<WorkshopContent />} />
        <Route path='/events/seminar' element={<Seminar />} />
        <Route path='/events/media-cover' element={<MediaCover />} />
                <Route path='/events/media-cover/1' element={<MediaCoverContent />} />
        <Route path="/joinUs" element={<JoinUs />}  />

        <Route
          path="*"
          element={
            <NotFound />
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);