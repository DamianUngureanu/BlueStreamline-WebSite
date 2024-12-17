import React, { useState, useEffect, ReactElement } from "react";
import Button from "../button";
import classes from "./tab-buttons.module.css";
import { ButtonVariants } from "@/button-variants/buttons-variants-enum";
import classNames from "classnames";

interface tabButtonsProps {
  buttonSelected: string;
  buttonsName: string[];
  buttonSelect: (buttonSelect: string) => void;
  children:ReactElement;
  className?:any;
}

const TabButtons = ({
  buttonSelected,
  buttonsName,
  buttonSelect,
  children,
  className
}: tabButtonsProps) => {
  const [buttonActive, setButtonActive] = useState(buttonSelected);

  useEffect(() => {
    buttonSelect(buttonActive);
  }, [buttonActive]);

  const createButton = (name: string) => {
    return (
      <Button
        onClick={() => setButtonActive(name)}
        variant={ButtonVariants.Rectangle}
        direction={"top"}
        active={buttonActive == name}
      >
        {name}
      </Button>
    );
  };

  return (
    <div className={classNames(classes.tabsContainer,className&&className)} >
      <div className={classes.tabs}>
        {buttonsName.map((element) => {
          return createButton(element);
        })}
      </div>
      {children}
    </div>
  );
};

export default TabButtons;
