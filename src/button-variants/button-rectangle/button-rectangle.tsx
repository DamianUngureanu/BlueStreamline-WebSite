import React, { ReactElement } from "react";
import classes from "./button-rectangle.module.css";
import classNames from "classnames";

interface ButtonRectangleProps {
  direction?: string;
  children?: ReactElement | string;
  active?:boolean;
  className?:any;
  [x: string]: any;
}

const ButtonRectangle = ({
  direction,
  children,
  active,
  className,
  ...rest
}: ButtonRectangleProps) => {
  return (
    <button
      className={classNames(classes.buttonRectangle,className&&className)}
      style={
        direction == "bottom"
          ? ({
              "--top0": "100%",
              "--top1": "0",
              "--left0": "0",
              "--left1": "0",
            } as React.CSSProperties)
          : direction == "left"
          ? ({
              "--top0": "0",
              "--top1": "0",
              "--left0": "-101%",
              "--left1": "0",
            } as React.CSSProperties)
          : direction == "right"
          ? ({
              "--top0": "0",
              "--top1": "0",
              "--left0": "100%",
              "--left1": "0",
            } as React.CSSProperties)
          : ({
              "--top0": "-100%",
              "--top1": "0",
              "--left0": "0",
              "--left1": "0",
            } as React.CSSProperties)
      }
      {...rest}
    >
      <div className={classes.buttonRectangleActive}></div>
      <div className={classNames(classes.buttonRectangleContent,active&& classes.buttonRectangleContentActive)}>{children}</div>
    </button>
  );
};

export default ButtonRectangle;
