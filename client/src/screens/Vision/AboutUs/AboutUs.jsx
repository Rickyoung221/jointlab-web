import {
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBContainer,
} from 'mdb-react-ui-kit';
import {Link} from "react-router-dom";
import Sidebar from '../components/Sidebar';
import lab1 from '../../../assets/img/lab1.jpeg';
import lab2 from '../../../assets/img/lab2.jpeg';
import './AboutUs.css';

export default function AboutUs() {
  return (

      <>

    <h1> About Us </h1>
    <Sidebar />
    <div className = 'main-content'>
            <MDBContainer  breakpoint="sm">
              <p>
                The SLIBNU-ALECSO Smart Education Joint Lab is jointly established by the Smart Learning Institute of Beijing Normal University (SLIBNU) and the Arab League Education, Culture and Science Organization (ALECSO). The joint laboratory is dedicated to carrying out projects in the fields of education and ICT, and promoting collaborative research between China and the Arab region. The research projects carried out by the joint laboratory include the Arab Region Open Interactive Database (OID) Project, the Arab Region Education Development Research Project, and the Arab and Chinese Science Textbook Comparison Project. In addition, the joint laboratory has held several international forums and webinars, including the ITU-UNESCO Forum on Inclusive Education, to promote exchanges among scholars.
              </p>
              <img src={lab1} className='img-fluid'/>
            </MDBContainer>
        </div>
      </>

  );
}
