import React, { ReactElement, useEffect } from "react";
import classes from "./modal.module.css";
import classNames from "classnames";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  open?: boolean;
  children:ReactElement | string;
  title:string | null;
  onClose: () => void;
}

const Modal = ({ open=true,title,children, onClose }: ModalProps) => {
    useEffect(()=>{
       document.body.style.overflow="hidden";
    },[])
  return (
    <div className={classNames(classes.container,!open && classes.containerClose)}>
        <div className={classes.overlay} onClick={()=>onClose()}></div>
      <div className={classes.content}>
        <header>
            <h2>{title}</h2>
            <IoClose onClick={()=>onClose()}/>
        </header>
        {children}
      </div>
    </div>
  );
};

export default Modal;
