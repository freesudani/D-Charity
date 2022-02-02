import React from "react";
import reactDom from "react-dom";
import classes from "./CareerOpportunities.module.css";
import { CareerList } from "../data/Careers";
import CareerListItem from "./CareerListItem";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onHide}></div>;
};

const CareerOverlay = () => {
  return (
    <>
      <div className={classes.careerBox}>
        {CareerList.map((job, index) => {
          return <CareerListItem job={job} key={index} />;
        })}
      </div>
    </>
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
