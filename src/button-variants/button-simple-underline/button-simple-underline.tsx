import button from '@/components/button';
import React, { ReactElement } from 'react'
import classes from './button-simple-underline.module.css'
import classNames from 'classnames';

interface ButtonSimpleUnderlineProps{
    children?:string;
    className?:any;
    [x:string]:any;
}

const ButtonSimpleUnderline = ({children,className,...rest}:ButtonSimpleUnderlineProps) => {
  return (
    <button 
    className={classNames(classes.button,className&&className)}
     {...rest}>{children}</button>
  )
}

export default ButtonSimpleUnderline