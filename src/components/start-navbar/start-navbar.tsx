import React, { useEffect, useState } from "react";
import Button from "../button";
import { ButtonVariants } from "../../button-variants/buttons-variants-enum";
import { IoMenuOutline } from "react-icons/io5";
import useWindowScroll from "@/hooks/use-window-scroll";
import useDictionary from "../../hooks/use-dictionary";
import classNames from "classnames";
import SideMenu from "../side-menu";
import { PageType } from "@/enums/page-type";
import PageTypeButtons from "./page-type-buttons";
import classes from "./start-navbar.module.css";
interface StartNavbarProps {
  logo?: string;
  selectedLanguage: "en" | "ro";
  selectedPageType: PageType;
  isChanging?: boolean | null;
  selectLanguage: (value: "en" | "ro") => void;
  selectPageType?: (selectedPage: PageType) => void;
  isChangingPageType?: (value: boolean) => void;
}

const StartNavbar = ({
  logo,
  selectedLanguage,
  selectedPageType,
  isChanging = null,
  selectLanguage,
  selectPageType,
  isChangingPageType,
}: StartNavbarProps) => {
  const {scrollPosition} = useWindowScroll();
  const { dictionary, setLanguage } = useDictionary();

  const [openSideMenu, setOpenSideMenu] = useState(false);
  

  useEffect(() => {
    setLanguage(selectedLanguage);
  }, [selectedLanguage]);

  const handleChangePageType = (page: PageType) => {
    if (isChanging !== null) {
      if (!isChanging) {
        setTimeout(() => {
          selectPageType && selectPageType(page);
        }, 750);
        isChangingPageType && isChangingPageType(true);
      }
    }
  };
  return (
    <>
      <nav
        className={classes.navbar}
        style={
          scrollPosition == 0
            ? ({
                "--heightNavbar": "calc(100vh / 3)",
                "--logoWidth": "min(390px, 90%)",
                "--heightButtonsContainer": "70px",
              } as React.CSSProperties)
            : ({
                "--heightNavbar": "calc(100vh / 10)",
                "--logoWidth": "min(290px, 98%)",
                "--heightButtonsContainer": "0",
              } as React.CSSProperties)
        }
      >
        <button
          className={classNames(
            classes.menuButton,
            scrollPosition == 0 && classes.menuButtonClose
          )}
          onClick={() => setOpenSideMenu(true)}
        >
          {" "}
          <IoMenuOutline />
        </button>
        <div className={classes.navbarLeanguage}>
          <Button
            variant={ButtonVariants.SimpleUnderline}
            onClick={() => selectLanguage("ro")}
          >
            {dictionary.romana}
          </Button>
          &nbsp;/&nbsp;
          <Button
            variant={ButtonVariants.SimpleUnderline}
            onClick={() => selectLanguage("en")}
          >
            {dictionary.english}
          </Button>
        </div>
        <div></div>
        <div className={classes.navbarLogo}>
          <img src={logo} alt="logo" onClick={() => window.location.reload()} />
        </div>
        <div
          className={classNames(
            classes.pageType,
            scrollPosition > 0 && classes.pageTypeClose
          )}
        >
          <PageTypeButtons
            buttonActive={selectedPageType}
            selectedLanguage={selectedLanguage}
            setButtonActive={(page: PageType) => handleChangePageType(page)}
          />
        </div>
      </nav>
      <SideMenu
        open={openSideMenu}
        onClose={() => {
          setOpenSideMenu(false);
          document.body.style.overflowY = "auto";
        }}
        selectedLanguage={selectedLanguage}
        title={dictionary.menu}
      >
      </SideMenu>
    </>
  );
};

export default StartNavbar;
