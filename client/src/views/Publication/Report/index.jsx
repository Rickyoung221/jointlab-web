import './Report.css';
import Sidebar from '../components/Sidebar';
import hankbook from '@img/Publication/HankBook.png';
import providing_open_distance_learning from '@img/Publication/providing_open_distance_learning.png';
import educational_practces from '@img/Publication/educational_practces.png';
import ai_combat_pandemics from '@img/Publication/ai_combat_pandemics.png';
import active_learning_at_home from '@img/Publication/active_learning_at_home.png';
import education_development from '@img/Publication/education_development.png';
import { MDBContainer } from 'mdb-react-ui-kit';
import { withTranslation } from 'react-i18next';

function Report({t}){
  return(
    <>
    <h1> {t("publications.reports.title")} </h1>
    <Sidebar />
    <div className="main-content">
      <section id='onGoingProjects' >
        <MDBContainer fluid breakpoint="sm" className='pdf-link-position' >
            <img src={hankbook} className='publication' alt="handbook"/>
            <h4> Handbook on Facilitating FlHnaHankexible Learning in COVID 19 Outbreak </h4>
            <p>
              Inspired by the united solidarity and innovative experiences of millions of teachers and students,
              this handbook aims to define the term “flexible learning” with vivid examples and touching stories.
              It describes several implemented flexible online learning strategies during the COVID-19 outbreak.
              These strategies are presented based on six dimensions, namely
              (a) infrastructure, (b) learning tools, (c) learning resources, (d) teaching and learning methods,
              (e) services for teachers and students, and (f) cooperation between enterprise, government, and schools.
              Specifically, this handbook can help other educators, researchers and practitioners implement similar case studies in their context.
            </p>
            <a className='pdf' target='_blank' rel="noreferrer" href='http://sli.bnu.edu.cn/uploads/soft/200427/2_1004419561.pdf'> Chinese </a>
            <a className='pdf' target='_blank' rel="noreferrer" href='http://sli.bnu.edu.cn/uploads/soft/200611/2_2157063671.pdf'> Arabic </a>
            <a className='pdf' target='_blank' rel="noreferrer" href='http://sli.bnu.edu.cn/uploads/soft/200407/1_1833592181.pdf'> English</a>
          </MDBContainer>
      </section>
    <hr className='new1' />
    <section id='providing_open_distance_learning' >
      <MDBContainer fluid breakpoint="sm" className='pdf-link-position' >
          <img src={providing_open_distance_learning} className='publication' alt="handbook"/>
          <h4> Guidance on Providing Open and Distance Learning for Students with Disabilities during School Closures </h4>
          <p>
            This handbook discusses open and distance learning for students with disabilities during COVID-19,
            through vivid stories and experiences. Particularly, it describes, through illustrative stories,
            innovative approaches on how to design learning activities in open and distance learning environments
            for students with disabilities. Additionally, this handbook provides guidelines on designing accessible
            learning materials based on Universal Design (UD). Finally, it provides guidelines for different stakeholders,
            including parents, policy makers, teachers and designers on how to facilitate open and distance learning for students with disabilities.
          </p>
          <a className='pdf' target='_blank' rel="noreferrer" href='http://sli.bnu.edu.cn/uploads/soft/200916/2_1657431281.pdf'> Turkish </a>
          <a className='pdf' target='_blank' rel="noreferrer" href='http://sli.bnu.edu.cn/uploads/soft/201117/2_1757374231.pdf'> Arabic </a>
          <a className='pdf' target='_blank' rel="noreferrer" href='http://sli.bnu.edu.cn/uploads/soft/200902/2_1916206341.pdf'> English</a>
        </MDBContainer>
    </section>
    <hr className='new1' />
    <section id='educational_practces' >
      <MDBContainer fluid breakpoint="sm" className='pdf-link-position'>
          <img src={educational_practces} className='publication' alt="handbook"/>
          <h4> Guidance on Open Educational Practices during School Closure: Utilizing OER under COVID-19 Pandemic in line with UNESCO OER Recommendation </h4>
          <p>
          This handbook discusses the use of OEP and OER during COVID-19 outbreak through global vivid stories and experiences, and in line with the five UNESCO objectives.
          It also discusses OER competencies for OEP. Finally, this handbook provides guidelines to both teachers and learners to facilitate OEP and OER application.
          </p>
          <a className='pdf' target='_blank' rel="noreferrer" href='http://sli.bnu.edu.cn/uploads/soft/201225/2_1710415971.pdf'> Chinese </a>
          <a className='pdf' target='_blank' rel="noreferrer" href='http://sli.bnu.edu.cn/uploads/soft/200916/2_1657431281.pdf'> Arabic </a>
          <a className='pdf' target='_blank' rel="noreferrer" href='http://sli.bnu.edu.cn/uploads/soft/200518/2_1851146971.pdf'> English</a>
          <a className='pdf' target='_blank' rel="noreferrer" href='http://sli.bnu.edu.cn/uploads/soft/200617/2_1754326031.pdf'> Turkish</a>
        </MDBContainer>
    </section>
    <hr className='new1' />
    <section id='ai_combat_pandemics' >
      <MDBContainer fluid breakpoint="sm" className='pdf-link-position' >
          <img src={ai_combat_pandemics} className='publication' alt="handbook"/>
          <h4> Interactive Book on Artificial Intelligence to Combat Pandemics </h4>
          <p>
          This book introduces AI to children, between the age of 9 and 15, in an easy and fun way.
          It also presents vivid stories about some AI-based solutions that were developed to combat the pandemic.
          Furthermore, this book presents a hands-on learning experience about AI by showing simple programming code that
          children could use and implement on the JupyterLab environment.
          </p>
          <a className='pdf' target='_blank' rel="noreferrer" href='http://sli.bnu.edu.cn/uploads/soft/200918/2_1539092511.pdf'> Chinese </a>
          <a className='pdf' target='_blank' rel="noreferrer" href='http://sli.bnu.edu.cn/uploads/soft/200918/2_1546141161.pdf'> English</a>
        </MDBContainer>
    </section>
    <hr className='new1' />
    <section id='active_learning_at_home' >
      <MDBContainer fluid breakpoint="sm" >
        <img src={active_learning_at_home} className='publication' alt="handbook"/>
          <h4> Guidance on Active Learning at Home during Educational Disruption: Promoting </h4>
          <p>
          A SCIENCE model of learning actively at home during school closures is proposed for students.
          The SCIENCE model consists of seven elements: Scheduling learning and playing in balance ,
          Choosing learning resources on demand, Inspiring the study from playing ,
          Engaged in learning by self-monitoring, Nourishing learning ability with e-assessment,
          Carrying out reflection on learning methods , Exercising daily and moderately.
          Tips and stories on student’s learning associated with active learning are presented.
          In the end, suggestions on how to maintain physical and mental health are also discussed.
          </p>
            <a className='pdf' target='_blank' rel="noreferrer" href='http://sli.bnu.edu.cn/uploads/soft/200708/2_1348303601.pdf'> Chinese </a>
            <a className='pdf' target='_blank' rel="noreferrer" href='http://sli.bnu.edu.cn/uploads/soft/200430/1_1529396341.pdf'> Arabic </a>
            <a className='pdf' target='_blank' rel="noreferrer" href='http://sli.bnu.edu.cn/uploads/soft/210114/2_0953009451.pdf'> English</a>
        </MDBContainer>
    </section>
    <hr className='new1' />
    <section id='education_development' >
      <MDBContainer fluid breakpoint="sm" className='pdf-link-position'>
          <img src={education_development} className='publication' alt="handbook"/>
          <h4> An Overview of Education Development in the Arab Region: Insights and Recommendations Towards Sustainable Development Goals (SDG) </h4>
          <p>
          This book aims to provide a comprehensive understanding of educational development in the Arab region and reveals
          that many Arab countries, especially sub-Saharan African countries, have made significant efforts to improve educational
          opportunities over the past decade. This book could help to achieve the Sustainable Development Goals put forward by
          United Nation in the Arab region. It could also provide insights for policy makers, researchers,
          and educators who are interested in the education development in the Arab region.
          We hope that this book could promote further research and cooperation between China and the Arab region in the field of education.
          The current influence of the book includes
          1) the book has been published on SLIBNU, ALECSO and UNESCO IITE websites;
          2) the book has been acquired on ResearchGate read it more than 200 times;
          3) The book was sent to the Egyptian Ministry of Education.
          </p>
          <a className='pdf' target='_blank' rel="noreferrer" href='https://drive.google.com/drive/folders/1jGB92nFZY_-wyVsglZcBN1jU1XCsUeSf'> English</a>
        </MDBContainer>
    </section>
    <hr className='new1' />
    </div>
</>

  )
}

export default withTranslation()(Report);
