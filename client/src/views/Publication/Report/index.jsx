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
            <h4> {t("publications.reports.part1.title")}  </h4>
            <p>
            {t("publications.reports.part1.content")} 
            </p>
            <a className='pdf' target='_blank' rel="noreferrer" href='http://sli.bnu.edu.cn/uploads/soft/200427/2_1004419561.pdf'>  {t("common.languages.chinese")} </a>
            <a className='pdf' target='_blank' rel="noreferrer" href='http://sli.bnu.edu.cn/uploads/soft/200611/2_2157063671.pdf'> {t("common.languages.arabic")} </a>
            <a className='pdf' target='_blank' rel="noreferrer" href='http://sli.bnu.edu.cn/uploads/soft/200407/1_1833592181.pdf'> {t("common.languages.english")} </a>
          </MDBContainer>
      </section>
    <hr className='new1' />
    <section id='providing_open_distance_learning' >
      <MDBContainer fluid breakpoint="sm" className='pdf-link-position' >
          <img src={providing_open_distance_learning} className='publication' alt="handbook"/>
          <h4> {t("publications.reports.part2.title")}  </h4>
          <p>
            {t("publications.reports.part2.content")} 
          </p>
          <a className='pdf' target='_blank' rel="noreferrer" href='http://sli.bnu.edu.cn/uploads/soft/200916/2_1657431281.pdf'>  {t("common.languages.turkish")} </a>
          <a className='pdf' target='_blank' rel="noreferrer" href='http://sli.bnu.edu.cn/uploads/soft/201117/2_1757374231.pdf'>  {t("common.languages.arabic")} </a>
          <a className='pdf' target='_blank' rel="noreferrer" href='http://sli.bnu.edu.cn/uploads/soft/200902/2_1916206341.pdf'> {t("common.languages.english")} </a>
        </MDBContainer>
    </section>
    <hr className='new1' />
    <section id='educational_practces' >
      <MDBContainer fluid breakpoint="sm" className='pdf-link-position'>
          <img src={educational_practces} className='publication' alt="handbook"/>
          <h4> {t("publications.reports.part3.title")} </h4>
          <p>
            {t("publications.reports.part3.content")}
          </p>
          <a className='pdf' target='_blank' rel="noreferrer" href='http://sli.bnu.edu.cn/uploads/soft/201225/2_1710415971.pdf'>  {t("common.languages.chinese")} </a>
          <a className='pdf' target='_blank' rel="noreferrer" href='http://sli.bnu.edu.cn/uploads/soft/200916/2_1657431281.pdf'> {t("common.languages.arabic")} </a>
          <a className='pdf' target='_blank' rel="noreferrer" href='http://sli.bnu.edu.cn/uploads/soft/200518/2_1851146971.pdf'>  {t("common.languages.english")} </a>
          <a className='pdf' target='_blank' rel="noreferrer" href='http://sli.bnu.edu.cn/uploads/soft/200617/2_1754326031.pdf'>  {t("common.languages.turkish")}</a>
        </MDBContainer>
    </section>
    <hr className='new1' />
    <section id='ai_combat_pandemics' >
      <MDBContainer fluid breakpoint="sm" className='pdf-link-position' >
          <img src={ai_combat_pandemics} className='publication' alt="handbook"/>
          <h4> {t("publications.reports.part4.title")} </h4>
          <p>
          {t("publications.reports.part4.content")}
          </p>
          <a className='pdf' target='_blank' rel="noreferrer" href='http://sli.bnu.edu.cn/uploads/soft/200918/2_1539092511.pdf'>  {t("common.languages.chinese")} </a>
          <a className='pdf' target='_blank' rel="noreferrer" href='http://sli.bnu.edu.cn/uploads/soft/200918/2_1546141161.pdf'>  {t("common.languages.english")} </a>
        </MDBContainer>
    </section>
    <hr className='new1' />
    <section id='active_learning_at_home' >
      <MDBContainer fluid breakpoint="sm" >
        <img src={active_learning_at_home} className='publication' alt="handbook"/>
          <h4> {t("publications.reports.part5.title")} </h4>
          <p>
          {t("publications.reports.part5.content")}
          </p>
            <a className='pdf' target='_blank' rel="noreferrer" href='http://sli.bnu.edu.cn/uploads/soft/200708/2_1348303601.pdf'>  {t("common.languages.chinese")} </a>
            <a className='pdf' target='_blank' rel="noreferrer" href='http://sli.bnu.edu.cn/uploads/soft/200430/1_1529396341.pdf'>  {t("common.languages.arabic")} </a>
            <a className='pdf' target='_blank' rel="noreferrer" href='http://sli.bnu.edu.cn/uploads/soft/210114/2_0953009451.pdf'>  {t("common.languages.english")} </a>
        </MDBContainer>
    </section>
    <hr className='new1' />
    <section id='education_development' >
      <MDBContainer fluid breakpoint="sm" className='pdf-link-position'>
          <img src={education_development} className='publication' alt="handbook"/>
          <h4> {t("publications.reports.part6.title")} </h4>
          <p>
          {t("publications.reports.part6.content")}
          </p>
          <a className='pdf' target='_blank' rel="noreferrer" href='https://drive.google.com/drive/folders/1jGB92nFZY_-wyVsglZcBN1jU1XCsUeSf'> {t("common.languages.english")}</a>
        </MDBContainer>
    </section>
    <hr className='new1' />
    </div>
</>

  )
}

export default withTranslation()(Report);
