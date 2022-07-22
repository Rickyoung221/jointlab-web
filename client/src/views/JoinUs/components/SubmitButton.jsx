import { MDBBtn } from 'mdb-react-ui-kit';
import { withTranslation } from 'react-i18next';

function SubmitButton(props) {
  return (
    <MDBBtn
      type="submit"
      className="mb-8 btn btn-primary btn-lg"
      block
      onClick={props.onClick}
      disabled={props.validation}
    >
      Submit
    </MDBBtn>
  );
}
export default withTranslation()(SubmitButton);
