import React, { useEffect } from "react";
import classes from "./navbar.module.css";
import { NavbarType } from "@/types/navbarType";
import useDictionary from "@/hooks/use-dictionary";
import Button from "@/components/button";
import { ButtonVariants } from "@/button-variants/buttons-variants-enum";
import useWindowScroll from "@/hooks/use-window-scroll";
import classNames from "classnames";

interface NavbarProps {
  navbarData: NavbarType;
  selectedLanguage: "en" | "ro";
  selectLanguage: (value: "en" | "ro") => void;
}

const Navbar = ({
  navbarData,
  selectedLanguage,
  selectLanguage,
}: NavbarProps) => {
  const { dictionary, setLanguage } = useDictionary();
  useEffect(() => {
    selectLanguage(selectedLanguage);
  }, [selectedLanguage]);
  const {scrollPosition}=useWindowScroll();
  return (
    <nav className={classNames(classes.navbar,scrollPosition>400&&classes.navbarScrolled)}>
      <section>
        <a href="/#">
          <img src={navbarData.logoPath} alt="logo" />
        </a>
        <div className={classes.pages}>
          {navbarData.pages.map((element) => {
            return (
              <Button
                variant={ButtonVariants.Rectangle}
                direction="top"
                className={classes.buttons}
              >
                <a href={element.link}>
                  {selectedLanguage == "en"
                    ? element.pageTitleEN
                    : element.pageTitleRO}
                </a>
              </Button>
            );
          })}
        </div>
      </section>
      <div className={classes.language}>
        <button onClick={() => selectLanguage("ro")}>
          {dictionary.romana}
        </button>
        &nbsp;/&nbsp;
        <button onClick={() => selectLanguage("en")}>
          {dictionary.english}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
