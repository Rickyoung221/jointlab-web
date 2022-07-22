import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import "./Scrollspy.css";
import { withTranslation } from 'react-i18next';

function Scrollspy({t}) {
  return (
    <MDBContainer breakpoint="lg">
      <h1>  {t("home.content.about-us.title")} </h1>
      <p>
        {t("home.content.about-us.content")}
      </p>

      <h1> {t("home.content.vision.title")} </h1>
      <div className="text-center">
        <strong> {t("home.content.vision.sub-title")} </strong>
      </div>
      <p>
        {t("home.content.vision.content.part1")}
        <br />
        {t("home.content.vision.content.part2")}
      </p>
    </MDBContainer>
  );
}

export default withTranslation()(Scrollspy);
