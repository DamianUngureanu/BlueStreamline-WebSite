import React, { useState } from "react";
import classes from "./admin.module.css";
import StartPageAdmin from "./start-page-admin";
import PasswordAdmin from "./password-admin";
import RacingPageAdmin from "./racing-page-admin";
import HistoryAdmin from "./history-admin";

interface AdminProps {
  selectedLanguage: "ro" | "en";
  selectLanguage: (value: "ro" | "en") => void;
}

const Admin = ({ selectedLanguage, selectLanguage }: AdminProps) => {
  const password = true;


  if (password)
    return (
      <form action="" className={classes.inputContainer}>
        <p>- If the input is empty, will remain preselected value</p>
        <label htmlFor="">BlueStreamline logo</label>
        <input type="file" />
        <StartPageAdmin/>
        <RacingPageAdmin/>
        <HistoryAdmin/>
      </form>
    );
  else
    return (
      <PasswordAdmin/>
    );
};

export default Admin;
