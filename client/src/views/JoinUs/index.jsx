import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import {
  MDBInput,
  MDBContainer,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';
import './JoinUs.css';
import MailApi from '@api/mailApi';
import SubmitButton from './components/SubmitButton';
import SubmittedButton from './components/SubmittedButton';

/* if google is blocked */
window.recaptchaOptions = {
  useRecaptchaNet: true,
};

function JoinUs(props) {
  const [isVerified, setVerification] = useState(false);
  const [isSubmitted, setSubmit] = useState(false);
  const SITE_KEY_TEST = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';
  const handleOnChange = (value) => {
    console.log("Captcha value:", value);
    setVerification({isVerified:true})
  };
  const form = useRef();
  const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm(MailApi.SERVICE_ID, MailApi.TEMPLATE_ID, form.current, MailApi.USER_ID)
        .then((result) => {
          console.log(result.text);
          setSubmit({isSubmitted:true});
          alert('Sent Successfully！A copy of this message has been sent to you. ');
        }, (error) => {
          console.log(error.text);
          alert('Failed to sent！Please check your information or network. ' + JSON.stringify(error));
        });
  };
  let button;
  if (isSubmitted){
    /* Submitted, change button */
    button = <SubmittedButton />
  } else {
    button = <SubmitButton validation={!isVerified} />
  }
  
  return (
    <>
      <h1> Join Us </h1>
      <MDBContainer id='contact' className="joinus" fluid breakpoint="md">
        <p> As a diverse and dynamic laboratory, SLIBNU-ALECSO Smart Education
          Joint Lab is looking for researchers and practitioners in the field of
          education and technology to collaborate with us. We also welcome students
          with relevant backgrounds or interests to join our team. If you are interested
          in becoming a partner, collaborator, or team member please leave us your information 
          and message below. Let’s work together for a more innovative and inclusive education! 
        </p>
        <form ref={form} onSubmit={sendEmail} name="joinUs">
          <MDBRow>
            <MDBCol md='6'>
                  <MDBInput type='text' id='firstName' wrapperClass='mb-4' label='* First Name' name="firstName" required/>
            </MDBCol>
            <MDBCol md='6'>
                  <MDBInput type='text' id='lastName' wrapperClass='mb-4' label='* Last Name' name='lastName' required/>
            </MDBCol>
          </MDBRow>
          <MDBInput type='email' id='email' wrapperClass='mb-4' label='* Email Address' labelClass='ffl-label' name='to' placeholder='xxx@xx.com' required/>
          <MDBInput type='tel' id='phone' wrapperClass='mb-4' label='Phone Number' name='phone' />
          <MDBInput type='text' id='country' wrapperClass='mb-4' label='Country' name='country' />
          <MDBInput type='text' id='institution' wrapperClass='mb-4' label='* Institution' name='institution' required />
          <MDBInput type='text' id='jobTitle' wrapperClass='mb-4' label='* Job Title' name='jobTitle' required />
          <MDBInput type='text' id='researchField' wrapperClass='mb-4' label='Research Field' name='research' />
          <MDBInput textarea rows={4} id='message' wrapperClass='mb-4' label='* Message' name='message' required />
          <div className="recaptcha_position">
            <ReCAPTCHA
              sitekey= {SITE_KEY_TEST}
              onChange={handleOnChange}
            />
            <br/>
          </div>
            {button}
        </form>
      </MDBContainer>
  </>
  );
}

export default JoinUs;
