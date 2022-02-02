import React, { useState } from "react";
import ButtonMedium from "../UI/ButtonMedium";
import classes from "./CareerListItem.module.css";
import JobDetails from "./JobDetails";

const CareerListItem = (props) => {
  const [showJobDetails, setShowJobDetails] = useState(false);

  const displayJobDetails = () => {
    setShowJobDetails(true);
  };

  return (
    <div className={classes.jobItem}>
      <h2>{props.job.title}</h2>
      <ButtonMedium onClick={displayJobDetails}>Job Detail</ButtonMedium>
      {showJobDetails && <JobDetails job={props.job} />}
    </div>
  );
};

export default CareerListItem;
