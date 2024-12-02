import React, { useEffect, useRef, useState } from "react";
import classes from "./team-man-pose.module.css";
import { Cars } from "@/enums/cars";
import { Departament } from "@/enums/departament";
import useDictionary from "@/hooks/use-dictionary";
import classNames from "classnames";
import { useWindowDimensions } from "@/hooks/use-window-dimensions";
import { TeamData } from "@/data/team";
import { CarsData } from "@/data/cars";
import { TeamType } from "@/types/team";

interface TeamManPoseProps {
  selectedLanguage: "ro" | "en";
  selectLanguage: (value: "ro" | "en") => void;
}

const TeamManPose = ({
  selectedLanguage,
  selectLanguage,
}: TeamManPoseProps) => {
  const { dictionary, setLanguage } = useDictionary();
  const countColumn = useRef(0);
  const [countRowDinamic, setCountRowDinamic] = useState(0);
  const { width, height } = useWindowDimensions();
  const [columnNumber, setColumnNumber] = useState<number>(
    width / 300 > 4 ? 4 : width / 300 == 0 ? 1 : width / 300
  );
  useEffect(() => {
    setColumnNumber(width / 300 > 4 ? 4 : width / 300 == 0 ? 1 : width / 300);
  }, [width]);
  useEffect(() => {
    setLanguage(selectedLanguage);
  }, [selectedLanguage]);
  
  const actualTeam=()=>{
    const latestCar=CarsData.find((element)=> element.latestCar!=undefined && element.latestCar===true);
    if(latestCar)
      return TeamData.filter((element)=>element.car==latestCar.name);
    else return [];
  }
  return (
    <div
      className={classes.poseContainer}
      style={{ "--quantity": actualTeam.length } as React.CSSProperties}
    >
      {actualTeam() && actualTeam().map((element:TeamType, index:number) => {
        if (countColumn.current == 3) {
          countColumn.current = 1;
        } else countColumn.current++;
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
      })}
    </div>
  );
};

export default TeamManPose;
