import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import '../../assets/index.css';
import '../../assets/scss/mdb.min.css';
import '../../assets/scss/custom_variables.scss';
import Home from '../Home';
import App from '../../App';
import Avatar from '../Vision/Avatar';
import AboutUs from '../Vision/AboutUs';
import Missions from '../Vision/Mission';
import Partners from '../Vision/Partners';
import Advisory from '../Vision/AdvisoryBoard';

import JoinUs from '../JoinUs';

import FinishedProjects from '../Research/FinishedProjects';
import OnGoingProjects from '../Research/OnGoingProjects';
import EducationDevelopment from '../Research/FinishedProjects/EducationDevelopment';

import Reports from '../Publication/Report';
import JournalArticles from '../Publication/JournalArticle';
import Conferences from '../Publication/Conference';

import Workshop from '../Event/Workshop';
import WorkshopContent from '../Event/Workshop/content/WorkshopContent';
import Seminar from '../Event/Seminar';
import MediaCover from '../Event/MediaCover';
import MediaCoverContent from '../Event/MediaCover/content/MarkdownDisplay';

import NotFound from '../NotFound';


function Router(){
  
    return(
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
      </BrowserRouter>
    )
}

export default Router;