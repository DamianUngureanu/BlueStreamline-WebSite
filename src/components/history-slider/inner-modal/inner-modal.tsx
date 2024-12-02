import React, { useEffect, useState } from "react";
import classes from "./inner-modal.module.css";

import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoYoutube,
} from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import Button from "@/components/button";
import { ButtonVariants } from "@/button-variants/buttons-variants-enum";
import MansonryLayout from "@/components/masonry-layout";
import { carsPartners } from "@/data/cars-partners";
import { Cars } from "@/enums/cars";
import { Departament } from "@/enums/departament";
import useDictionary from "@/hooks/use-dictionary";
import GridLayout from "@/components/grid-layout";
import { TeamType } from "@/types/team";

interface InnerModalProps {
  car: String | null;
  image: string | undefined;
  description: string | undefined;
  selectedLanguage: "ro" | "en";
  team:TeamType[];
}

const InnerModal = ({
  image,
  description,
  car,
  selectedLanguage,
  team,
}: InnerModalProps) => {
  const { dictionary, setLanguage } = useDictionary();
  useEffect(() => {
    setLanguage(selectedLanguage);
  }, [selectedLanguage]);
  const [onTeam, setOnTeam] = useState(true);

  const constructLinks = (
    element: { pathPartner: string; linkPartner: string; car: Cars[] },
    index: number
  ) => {
    return (
      <a
        target="_blank"
        href={element.linkPartner}
        key={"link" + element.car[0] + index}
      >
        <img
          src={element.pathPartner}
          alt={"img" + index}
          key={"img" + index}
        />
      </a>
    );
  };

  

  const constructTeam = (
    element: TeamType,
    index: number,
    car: String | null,
  ) => {
    return (
      <div className={classes.teamContent}>
        <img src={element.image} alt={"img" + index} />
        <div className={classes.teamInfo}>
          <h3>{element.name}</h3>
          {
            <span>
              {element.roleEN}
            </span>
          }
        </div>
      </div>
    );
  };

  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <img src={image} alt="imagine" />
      </div>
      <div className={classes.descriptionContainer}>
        <p>{description}</p>
      </div>
      <div className={classes.mediaContainer}>
        <a target="_blank" href="https://www.instagram.com/bluestreamline/">
          <IoLogoInstagram />
        </a>
        <a target="_blank" href="#">
          <IoLogoFacebook />
        </a>
        <a target="_blank" href="#">
          <FaXTwitter />
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/user/BlueStreamline111"
        >
          <IoLogoYoutube />
        </a>
      </div>
      <div className={classes.tabsContainer}>
        <div className={classes.tabs}>
          <Button
            onClick={() => setOnTeam(true)}
            variant={ButtonVariants.Rectangle}
            direction={"top"}
            active={onTeam}
          >
            {dictionary.team}
          </Button>
          <Button
            onClick={() => setOnTeam(false)}
            variant={ButtonVariants.Rectangle}
            direction={"top"}
            active={!onTeam}
          >
            {dictionary.partners}
          </Button>
        </div>
        {onTeam ? (
          <div className={classes.tabContent}>
            <GridLayout
              images={team.map((element, index) => {
                  return constructTeam(element, index, car);
              })}
              width={"150px"}
            />
          </div>
        ) : (
          <div className={classes.tabContent}>
            <MansonryLayout
              images={carsPartners.map((element, index) => {
                if (element.car.find((item) => item == car))
                  return constructLinks(element, index);
              })}
              width={"100px"}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default InnerModal;
