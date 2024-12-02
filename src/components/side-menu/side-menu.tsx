import classNames from "classnames";
import React, { ReactElement, useEffect } from "react";
import classes from "./side-menu.module.css";
import { IoCloseOutline } from "react-icons/io5";
import useDictionary from "@/hooks/use-dictionary";

interface SideMenuProps {
  open: boolean;
  title?: string;
  selectedLanguage: "en" | "ro";
  selectLanguage?: (value: "en" | "ro") => void;
  onClose: () => void;
}

const SideMenu = ({
  open,
  selectedLanguage,
  title,
  selectLanguage,
  onClose,
}: SideMenuProps) => {
  const { dictionary, setLanguage } = useDictionary();
  useEffect(() => {
    setLanguage(selectedLanguage);
  }, [selectedLanguage]);
  useEffect(() => {
    if (open) document.body.style.overflowY = "auto";
  }, []);
  useEffect(() => {
    if (open) {
      document.body.style.overflowY = "hidden";
    }
  }, [open]);
  return (
    <>
      <div
        className={classNames(classes.overlay, !open && classes.overlayClose)}
        onClick={onClose}
      ></div>
      <aside
        className={classNames(classes.sideMenu, !open && classes.sideMenuClose)}
      >
        <div className={classes.container}>
          <div className={classes.header}>
            <h2>{title && title}</h2>
            <IoCloseOutline onClick={onClose} />
          </div>

          <dl className={classes.list}>
            <dt>
              <a href="/#/racing">{dictionary.racing}</a>
            </dt>
            <dt>
              <a href="/#/history">{dictionary.history}</a>
            </dt>
            <dt>
              <a href="/#/team">{dictionary.team}</a>
            </dt>
            <dt>
              <a href="/#/contact">{dictionary.contact}</a>
            </dt>
          </dl>
          {selectLanguage && (
            <div className={classes.language}>
              <button onClick={() => selectLanguage("ro")}>
                {dictionary.romana}
              </button>
              &nbsp;/&nbsp;
              <button onClick={() => selectLanguage("en")}>
                {dictionary.english}
              </button>
            </div>
          )}
        </div>
        <a href="/">
          <img src="/BlueStreamlineLOGO.png" alt="logo" />
        </a>
      </aside>
    </>
  );
};

export default SideMenu;
