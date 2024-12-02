import React, { ReactElement, useState } from "react";
import classes from "./button.module.css";
import { ButtonVariants } from "../../button-variants/buttons-variants-enum";
import ButtonSquare from "../../button-variants/button-square";
import ButtonRectangle from "../../button-variants/button-rectangle";
import ButtonSimpleUnderline from "@/button-variants/button-simple-underline";
import ButtonSimpleLight from "@/button-variants/button-simple-light";
import ButtonDefault from "@/button-variants/button-default";

interface ButtonProps {
  variant: ButtonVariants;
  active?:boolean;
  direction?:string;
  children?: ReactElement | string;
  [x:string]:any;
}

const Button = ({ variant,active,direction, children,...rest }: ButtonProps) => {


  if (variant == ButtonVariants.Square)
    return (
        <ButtonSquare direction={direction} active={active} {...rest}>{children}</ButtonSquare>
    )
  else if (variant == ButtonVariants.Rectangle)
    return (
        <ButtonRectangle direction={direction} active={active} {...rest}>{children}</ButtonRectangle>
    )
  else if (variant == ButtonVariants.SimpleUnderline)
    return (
        <ButtonSimpleUnderline {...rest}>{typeof(children)==="string" ? children : ""}</ButtonSimpleUnderline>
    )
  else if (variant == ButtonVariants.SimpleLight)
    return (
        <ButtonSimpleLight active={active} direction={direction} {...rest}>{typeof(children)==="string" ? children : ""}</ButtonSimpleLight>
    )
  else {
    return(<ButtonDefault active={active} {...rest}>{children}</ButtonDefault>)
  }
};

export default Button;
