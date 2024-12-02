import React, { useEffect } from "react";
import classes from "./history.module.css";
import HistorySlider from "@/components/history-slider";
import Intro from "@/components/intro";
import Footer from "@/components/footer";

interface HistoryProps {
  selectedLanguage: "ro" | "en";
  selectLanguage: (value: "ro" | "en") => void;
}

const History = ({ selectedLanguage, selectLanguage }: HistoryProps) => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);
  return (
    <>
      <main className={classes.container}>
        <Intro
          image={"/images/bs11-artistic.png"}
          selectedLanguage={selectedLanguage}
          selectLanguage={(value) => selectLanguage(value)}
        />
        <div className={classes.sliderContainer}>
          <HistorySlider selectedLanguage={selectedLanguage}></HistorySlider>
        </div>
      </main>
      <Footer selectedLanguage={selectedLanguage} selectLanguage={(value)=>selectLanguage(value)}/>
    </>
  );
};

export default History;
