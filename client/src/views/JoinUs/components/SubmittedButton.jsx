import { MDBBtn } from 'mdb-react-ui-kit';
import { withTranslation } from 'react-i18next';

function SubmittedButton({t}, props) {
  return (
    <MDBBtn
      type="submit"
      className="mb-8 btn btn-primary btn-lg"
      block
      onClick={props.onClick}
      disabled
    >
      {t("common.submitted")}
    </MDBBtn>
  );
}

export default withTranslation()(SubmittedButton);
