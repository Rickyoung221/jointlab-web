import {MDBBtn} from 'mdb-react-ui-kit';

function SubmittedButton(props){
  return(
    <MDBBtn
      type='submit'
      className="mb-8 btn btn-primary btn-lg" block
      onClick={props.onClick}
      disabled>
      SUBMITTED!
    </MDBBtn>
  )
}

export default SubmittedButton;
