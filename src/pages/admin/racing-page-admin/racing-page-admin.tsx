import React from "react";
import EventsAdmin from "./events-admin";
import FormulaStudentAdmin from "./formula-student-admin";
import classes from './racing-page-admin.module.css'

const RacingPageAdmin = () => {
  return (
    <fieldset className={classes.container}>
      <legend>Racing team</legend>
      <h1>Events</h1>
      <EventsAdmin /> <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <h1>About Formula Student</h1>
      <FormulaStudentAdmin/>
    </fieldset>
  );
};

export default RacingPageAdmin;
