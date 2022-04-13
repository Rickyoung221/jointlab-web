import {MDBBtn} from 'mdb-react-ui-kit';

function SubmitButton(props){
  return(
    <MDBBtn
      type='submit'
      className="mb-8 btn btn-primary btn-lg" block
      onClick={props.onClick}
      disabled = {props.validation}>
      SUBMIT
    </MDBBtn>
  )
}
export default SubmitButton;
