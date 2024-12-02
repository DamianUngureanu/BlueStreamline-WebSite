import button from "@/components/button";
import React, { ReactElement } from "react";
import classes from "./button-simple-light.module.css";
import classNames from "classnames";

interface ButtonSimpleLightProps {
  direction?: string;
  active?:boolean;
  children?: string;
  [x: string]: any;
}

const ButtonSimpleLight = ({
  direction,
  active,
  children,
  ...rest
}: ButtonSimpleLightProps) => {
  return (
    <button
      className={classNames(classes.button,active && classes.buttonActive)}
      style={
        direction == "top"
          ? ({ "--top": "0", "--left": "50%" } as React.CSSProperties)
          : direction == "left"
          ? ({ "--top": "50%", "--left": "0" } as React.CSSProperties)
          : direction == "right"
          ? ({ "--top": "50%", "--left": "100%" } as React.CSSProperties)
          : ({ "--top": "100%", "--left": "50%" } as React.CSSProperties)
      }
      {...rest}
    >
      {children}
    </button>
  );
};

export default ButtonSimpleLight;
