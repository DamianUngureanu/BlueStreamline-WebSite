import React, { ReactElement } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import classes from './dropdown-header.module.css'

interface DropdownHeaderProps{
    open:boolean;
    children:ReactElement | string;
    onChange:()=>void;
}

const DropdownHeader = ({open,children,onChange}:DropdownHeaderProps) => {
  return (
    <div className={classes.header} onClick={() => onChange()}>
        {children}
        {!open ? <IoIosArrowDown /> : <IoIosArrowUp />}
    </div>
  )
}

export default DropdownHeader