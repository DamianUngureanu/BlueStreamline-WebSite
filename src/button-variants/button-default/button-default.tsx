import React, { ReactElement } from 'react'
import classes from './button-default.module.css'
import classNames from 'classnames';

interface ButtonDefaultProps {
    active?:boolean;
    children?:ReactElement |string;
    [x: string]: any;
  }
  
const ButtonDefault = ({active,children,...rest}:ButtonDefaultProps) => {
  return (
    <button
      className={classNames(classes.button,active && classes.buttonActive)}
      {...rest}
    >
      {children}
    </button>
  )
}

export default ButtonDefault