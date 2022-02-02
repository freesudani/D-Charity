import React from "react";
import classes from "./JobDetails.module.css";

const JobDetails = (props) => {
  return (
    <div className={classes.jobBox}>
      <h1>{props.job.title}</h1>
    </div>
  );
};

export default JobDetails;
