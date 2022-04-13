import React from 'react';
import ReactDOM, { render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './assets/index.css';
import reportWebVitals from './reportWebVitals';
import './assets/scss/mdb.min.css';
import './assets/scss/custom_variables.scss';
import App from './App';
import Home from './screens/Home';

import Avatar from './screens/Vision/Avatar/Avatar';
import AboutUs from './screens/Vision/AboutUs/AboutUs';
import Missions from './screens/Vision/Mission/Mission';
import Partners from './screens/Vision/Partners/Partners';
import Advisory from './screens/Vision/AdvisoryBoard/AdvisoryBoard';

import JoinUs from './screens/JoinUs/JoinUs';

import FinishedProjects from './screens/Research/FinishedProjects/FinishedProjects';
import OnGoingProjects from './screens/Research/OnGoingProjects/OnGoingProjects';
import EducationDevelopment from './screens/Research/FinishedProjects/EducationDevelopment/EducationDevelopment';

import Reports from './screens/Publication/Report/Report';
import JournalArticles from './screens/Publication/JournalArticle/JournalArticle';
import Conferences from './screens/Publication/Conference/Conference';

import Workshop from './screens/Event/Workshop/Workshop';
import WorkshopContent from './screens/Event/Workshop/content/WorkshopContent';
import Seminar from './screens/Event/Seminar/Seminar';
import MediaCover from './screens/Event/MediaCover/MediaCover';
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
