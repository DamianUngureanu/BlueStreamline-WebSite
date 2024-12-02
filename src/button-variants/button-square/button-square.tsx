import React, { ReactElement } from "react";
import classes from "./button-square.module.css";
import classNames from "classnames";

interface ButtonSquareProps {
  direction?: string;
  children?: ReactElement | string;
  className?:any;
  [x: string]: any;
}

const ButtonSquare = ({ direction, children,className, ...rest }: ButtonSquareProps) => {
  return (
    <button
      className={classNames(classes.buttonSquare,className&&className)}
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
              "--left0": "-100%",
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
      <div className={classes.buttonSquareActive}></div>
      <div className={classes.buttonSquareContent}>{children}</div>
    </button>
  );
};

export default ButtonSquare;
