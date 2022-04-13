import science_cover from '../../../assets/img/research/1-Science-textbook-comparison.png';
import arab_cover from '../../../assets/img/research/2-Arab-region-educatio-technology-industry-investigation.png';
import metaverse_cover from '../../../assets/img/research/3-Metaverse-education.png';
import data_screenshot from '../../../assets/img/research/4-Open-Interactive-Database.png';
import education_development from '../../../assets/img/research/5-Education-development-in-the-Arab-region.png';
import { MDBContainer } from 'mdb-react-ui-kit';
import {Link} from "react-router-dom";
import Sidebar from '../components/Sidebar';
import './OnGoingProjects.css';

function OnGoingProjects(){
  return(
    <>

    <h1> Ongoing Projects </h1>
    <Sidebar />
    <div className="main-content">
        <section id='onGoingProjects' >
          <MDBContainer fluid breakpoint="sm" >
              <img src={science_cover} className='textbook float-left' alt="science"/>
              <h3>  Science Textbook Comparison Project</h3>
              <p> The project aims to compare science education textbooks in China and the Arab region. The project mainly collected 13 ninth grade science textbooks from 4 countries. The project has established a validated framework for comparing textbooks with international experts. From Textbook structure, Cognitive expectations, Illustration efficiency, Gender representation, Technology use, Learning goals analysis dimensions to comparative analysis of science textbooks of China, Egypt, Oman and Tunisia.
              </p>
            </MDBContainer>
        </section>

        <hr className='new1' />

        <section id='finishedProjects' >
          <MDBContainer fluid breakpoint="sm" >
            <img src={arab_cover} className='Edtech float-right' alt='EDTECH' />
            <h3> Arab Region Education Technology Industry Investigation </h3>
            <p>
              The program aims to investigate educational technology industry in the Arab region with a focus of EdTech Startups.
              By collecting and analyzing the information of the scales, services and products, technology of the Ed-tech startups,
              the project aims to understanding the landscape of the EdTech industry in the Arab region, especially the market and major players.
            </p>
          </MDBContainer>
        </section>

        <hr className='new1' />

        <section>
          <MDBContainer fluid breakpoint="sm">
              <img src={metaverse_cover} className='metaverse_cover float-left' alt='metaverse' />
              <h3> Metaverse Education </h3>
              <p>
                The project aims to analyze the implementation and impact of the metaverse in education to provide richer interactions for students and teachers.
                In-depth sharing of insights into the metaverse and future directions in education by inviting international experts to hold a webinar.
                As an extension of this project, international experts will be invited to papers and publish books as co-authors.
              </p>
          </MDBContainer>
        </section>
        <br/>
    </div>
    </>
  )
}

export default OnGoingProjects;
