import React, { useEffect, useState } from "react";
import classes from "./intro.module.css";
import { IoMenuOutline } from "react-icons/io5";
import useDictionary from "@/hooks/use-dictionary";
import SideMenu from "../side-menu";
import Navbar from "@/components/navbar";
import { NavbarData } from "@/data/navbar";

interface IntroProps {
  image: string;
  selectedLanguage: "ro" | "en";
  selectLanguage: (value: "ro" | "en") => void;
}

const Intro = ({ image, selectedLanguage, selectLanguage }: IntroProps) => {
  const [openMenu, setOpenMenu] = useState(false);
  const { dictionary, setLanguage } = useDictionary();
  useEffect(() => {
    setLanguage(selectedLanguage);
  }, [selectedLanguage]);
  useEffect(() => {
    if (!openMenu) {
      document.body.style.overflowY = "auto";
    }
  }, [openMenu]);
  return (
    <>
      <div className={classes.introImage}>
        <img src={image} alt="intro" />
      </div>
      {/* <button className={classes.menuButton} onClick={() => setOpenMenu(true)}>
        <IoMenuOutline />
      </button> */}
      <Navbar
        navbarData={NavbarData}
        selectedLanguage={selectedLanguage}
        selectLanguage={selectLanguage}
      ></Navbar>
      {/* <SideMenu
    open={openMenu}
    selectedLanguage={selectedLanguage}
    title={dictionary.menu}
    selectLanguage={(value) => selectLanguage(value)}
    onClose={() => setOpenMenu(false)}
  ></SideMenu> */}
    </>
  );
};

export default Intro;
