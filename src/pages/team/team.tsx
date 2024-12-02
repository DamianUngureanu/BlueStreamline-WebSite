import React, { useEffect } from "react";
import classes from "./team.module.css";
import Intro from "@/components/intro";
import useDictionary from "@/hooks/use-dictionary";
import TeamManPose from "@/components//team-man-pose";
import Footer from "@/components/footer";

interface TeamProps {
  selectedLanguage: "ro" | "en";
  selectLanguage: (value: "ro" | "en") => void;
}

const Team = ({ selectedLanguage, selectLanguage }: TeamProps) => {
  const { dictionary, setLanguage } = useDictionary();
  const teamPose = [
    "/test/mecanic01.png",
    "/test/mecanic02.png",
    "/test/mecanic02.png",
    "/test/mecanic02.png",
    "/test/mecanic02.png",
  ];
  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);
  return (
    <>
      <main className={classes.container}>
        <Intro
          image={"/team-intro.jpg"}
          selectedLanguage={selectedLanguage}
          selectLanguage={(value) => selectLanguage(value)}
        />
        <div className={classes.content}>
          <TeamManPose
            selectedLanguage={selectedLanguage}
            selectLanguage={(value) => selectLanguage(value)}
          />
        </div>
      </main>
      <Footer
        selectedLanguage={selectedLanguage}
        selectLanguage={(value) => selectLanguage(value)}
      />
    </>
  );
};

export default Team;
