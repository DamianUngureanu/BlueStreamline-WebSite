import React, { useEffect, useRef, useState } from "react";
import classes from "./team.module.css";
import Intro from "@/components/intro";
import useDictionary from "@/hooks/use-dictionary";
import TeamManPose from "@/components//team-man-pose";
import Footer from "@/components/footer";
import Button from "@/components/button";
import { ButtonVariants } from "@/button-variants/buttons-variants-enum";
import TabButtons from "@/components/tab-buttons";
import GridLayout from "@/components/grid-layout";
import { SponsorsData } from "@/data/sponsors";
import { SponsorsType } from "@/types/sponsors";
import { CarsData } from "@/data/cars";
import { CarsType } from "@/types/cars";
import { TeamData } from "@/data/team";
import { TeamType } from "@/types/team";

interface TeamProps {
  selectedLanguage: "ro" | "en";
  selectLanguage: (value: "ro" | "en") => void;
}

const Team = ({ selectedLanguage, selectLanguage }: TeamProps) => {
  const { dictionary, setLanguage } = useDictionary();
  const currentCar=useRef(CarsData.find((element)=>element.latestCar==true));

  const [onTeam, setOnTeam] = useState(true);



  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const constructTeam = (
    element: TeamType,
    index: number,
    car: CarsType | undefined,
  ) => {
    return (
      <div
            className={classes.contentEffect}
          >
            <div className={classes.content}>
              <div className={classes.imgContainer}>
                <img src={element.image} alt={"pose" + index} />
              </div>
              <div className={classes.info}>
                <h2>{element.name}</h2>
                <h3>{selectedLanguage=="en" ?element.roleEN : element.roleRO}</h3>
              </div>
            </div>
          </div>
    );
  };
  const constructSponsors=(
    element:SponsorsType,
    index:number,
    car:CarsType|undefined,
  )=>{
    if(car?.name == element.car)
      return(
      <div className={classes.card}>
        <a href={element.link} title={element.name}>
          <img src={element.image} alt={"img" + index} />
        </a>
      </div>
    )
    else return <></>;
  }
  return (
    <>
      <main className={classes.container}>
        <Intro
          image={"/team-intro.jpg"}
          selectedLanguage={selectedLanguage}
          selectLanguage={(value) => selectLanguage(value)}
        />
        <TabButtons
          buttonSelected={dictionary.team}
          buttonsName={[dictionary.team, dictionary.partners]}
          buttonSelect={(buttonSelect) => {
            if (buttonSelect == dictionary.team) setOnTeam(true);
            else setOnTeam(false);
          }}
          className={classes.tabContainer}
        >
          {onTeam ? (
            <div className={classes.content}>
              <TeamManPose
                selectedLanguage={selectedLanguage}
              />
            </div>
          ) : (
            <div className={classes.content}>
              <GridLayout
              images={SponsorsData.map((element, index) => {
                  return constructSponsors(element, index, currentCar.current);
              })}
              width={"300px"}
            />
            </div>
          )}
        </TabButtons>
      </main>
      <Footer
        selectedLanguage={selectedLanguage}
        selectLanguage={(value) => selectLanguage(value)}
      />
    </>
  );
};

export default Team;
