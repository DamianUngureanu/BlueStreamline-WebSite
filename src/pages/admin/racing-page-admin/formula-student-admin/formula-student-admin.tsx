import React from "react";
import classes from "./formula-student-admin.module.css";
import { AboutFormulaStudentData } from "@/data/about-formula-student";
import { FormulaStudentTests } from "@/enums/formula-student-tests";

const FormulaStudentAdmin = () => {
  return (
    <>
      <div className={classes.formulaContainer}>
        <label htmlFor="">About Formula Student title in english</label>
        <input
          type="text"
          placeholder="title EN"
        />
      </div>
      <div className={classes.formulaContainer}>
        <label htmlFor="">About Formula Student title in romanian</label>
        <input
          type="text"
          placeholder="title RO"
        />
      </div>
      <div className={classes.formulaContainer}>
        <label htmlFor="">About Formula Student message in english</label>
        <textarea placeholder="message EN">
          {AboutFormulaStudentData.messageEN}
        </textarea>
      </div>
      <div className={classes.formulaContainer}>
        <label htmlFor="">About Formula Student message in romanian</label>
        <textarea placeholder="message RO">
          {AboutFormulaStudentData.messageRO}
        </textarea>
      </div>
      {AboutFormulaStudentData.tests.map((element, index) => {
        return (
          <div className={classes.formulaContainer}>
            <label htmlFor="">Title</label>
            <label htmlFor="">{element.titleEN}</label>
            <input
              type="text"
              placeholder="title EN"
            />
            <label htmlFor="">{element.titleRO}</label>
            <input
              type="text"
              placeholder="title RO"
            />

            <label htmlFor="">{element.titleEN} message</label>
            <textarea placeholder="message EN">
              {element.messageEN}
            </textarea>
            <textarea placeholder="message RO">
              {element.messageRO}
            </textarea>

            <label htmlFor="">{element.titleEN} value</label>
            <input
              type="number"
              placeholder="value"
              value={element.value}
            />
          </div>
        );
      })}

      
    </>
  );
};

export default FormulaStudentAdmin;
