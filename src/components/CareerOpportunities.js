import React from "react";
import reactDom from "react-dom";
import classes from "./CareerOpportunities.module.css";
import { CareerList } from "../data/Careers";
import ButtonMedium from "../UI/ButtonMedium";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onHide}></div>;
};

const CareerOverlay = (props) => {
  return (
    <div className={classes.careerBox}>
      {CareerList.map((job, index) => {
        return (
          <div className={classes.jobItem} key={index}>
            <h2>{job.title}</h2>
            <ButtonMedium>Job Detail</ButtonMedium>
          </div>
        );
      })}
    </div>
  );
};

const CareerOpportunities = (props) => {
  return (
    <>
      {reactDom.createPortal(
        <Backdrop onHide={props.onHide} />,
        document.getElementById("backdrop")
      )}
      {reactDom.createPortal(
        <CareerOverlay onShow={props.onShow} />,
        document.getElementById("career")
      )}
    </>
  );
};

export default CareerOpportunities;
