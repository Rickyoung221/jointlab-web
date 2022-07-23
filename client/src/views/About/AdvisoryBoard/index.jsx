import StructureImg from '@img/vision/team_structure.jpg';
import Sidebar from '../components/Sidebar';
import { withTranslation } from 'react-i18next';

function AdvisoryBoard({t}) {
  return (
    <>
      <h1> {t("about.advisory-structure.title")} </h1>
      <Sidebar />
      <div className="main-content">
        <img src={StructureImg} className="img-fluid" alt="Team Structure" />
      </div>
      <br />
    </>
  );
}

export default withTranslation()(AdvisoryBoard)
