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
import { withTranslation } from 'react-i18next';

/* if google is blocked */
window.recaptchaOptions = {
  useRecaptchaNet: true,
};

function JoinUs({t},props) {
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
      <h1> {t("joinus.title")} </h1>
      <MDBContainer id='contact' className="joinus" fluid breakpoint="md">
        <p> {t("joinus.introduction")} </p>
        <form ref={form} onSubmit={sendEmail} name="joinUs">
          <MDBRow>
            <MDBCol md='6'>
                  <MDBInput type='text' id='firstName' wrapperClass='mb-4' label={t("joinus.form.first-name")} name="firstName" required/>
            </MDBCol>
            <MDBCol md='6'>
                  <MDBInput type='text' id='lastName' wrapperClass='mb-4' label={t("joinus.form.last-name")} name='lastName' required/>
            </MDBCol>
          </MDBRow>
          <MDBInput type='email' id='email' wrapperClass='mb-4' label={t("joinus.form.email")} labelClass='ffl-label' name='to' placeholder='xxx@xx.com' required/>
          <MDBInput type='tel' id='phone' wrapperClass='mb-4' label={t("joinus.form.phone")} name='phone' />
          <MDBInput type='text' id='country' wrapperClass='mb-4' label={t("joinus.form.country")} name='country' />
          <MDBInput type='text' id='institution' wrapperClass='mb-4' label={t("joinus.form.institution")} name='institution' required />
          <MDBInput type='text' id='jobTitle' wrapperClass='mb-4' label={t("joinus.form.job-title")} name='jobTitle' required />
          <MDBInput type='text' id='researchField' wrapperClass='mb-4' label={t("joinus.form.research-field")} name='research' />
          <MDBInput textarea rows={4} id='message' wrapperClass='mb-4' label={t("joinus.form.message")} name='message' required />
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

export default withTranslation()(JoinUs);
