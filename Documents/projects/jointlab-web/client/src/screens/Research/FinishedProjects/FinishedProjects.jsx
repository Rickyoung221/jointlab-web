import science_cover from '../../../assets/img/research/1-Science-textbook-comparison.png';
import arab_cover from '../../../assets/img/research/2-Arab-region-educatio-technology-industry-investigation.png';
import metaverse_cover from '../../../assets/img/research/3-Metaverse-education.png';
import data_screenshot from '../../../assets/img/research/4-Open-Interactive-Database.png';
import education_development from '../../../assets/img/research/5-Education-development-in-the-Arab-region.png';
import Sidebar from '../components/Sidebar';
import { MDBContainer } from 'mdb-react-ui-kit';
import {Link} from "react-router-dom";
import './FinishedProjects.css';

function FinishedProjects(){
  return(
    <>
    <h1> Finished Projects </h1>
    <Sidebar />
    <div className="main-content">
      <section>
        <MDBContainer fluid breakpoint="sm">
          <img src={data_screenshot} className='data_screenshot float-left' alt='database' />
          <h3> Open Interactive Database </h3>
          <p>
            In line with the Open Science wave, an Open Interactive Database which contains detailed statistics related to the Arab region——22 countries was developed. Specifically, the indicators covered by the OID, such as in the field of economy, culture and education, can help to evaluate the Arab countries' achievement towards17 SDGs. The purpose of the OID is to provide open-access to data about the Arab region, which researchers, practitioners and decision makers can use to understand, explore and enhance a given field. In addition, this data can promote cross-collaboration between countries to promote the growth of all countries in the Arab region.
          </p>
        </MDBContainer>
      </section>

      <hr className='new1' />

      <MDBContainer fluid breakpoint="sm">
        <img src={education_development} className='educaiton-development float-right'  />
        <Link to='/research/OnGoingProjects/EducationDevelopment'><h3> Education Development in the Arab Region </h3> </Link>
        <p>
          This book aims to provide a comprehensive understanding of educational development in the Arab region and reveals that many Arab countries, especially sub-Saharan African countries, have made significant efforts to improve educational opportunities over the past decade. This book could help to achieve the Sustainable Development Goals put forward by United Nation in the Arab region. It could also provide insights for policy makers, researchers, and educators who are interested in the education development in the Arab region. We hope that this book could promote further research and cooperation between China and the Arab region in the field of education. The current influence of the book includes
          <ul className='number'>
            <li> The book has been published on SLIBNU, ALECSO and UNESCO IITE websites; </li>
            <li> The book has been acquired on ResearchGate read it more than 200 times; </li>
            <li> The book was sent to the Egyptian Ministry of Education. </li>
          </ul>
        </p>
      </MDBContainer>
    </div>
    </>
  )
}
export default FinishedProjects;
