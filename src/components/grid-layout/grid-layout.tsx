import classNames from 'classnames';
import React, { ReactElement } from 'react'
import classes from './grid-layout.module.css'

interface GridLayoutProps {
    open?: boolean;
    images: string[] | (ReactElement | undefined)[] ;
    width?: string;
  }

const GridLayout = ({open=true,images,width="250px"}:GridLayoutProps) => {
  return (
    <div
      className={classNames(
        classes.imgContainer,
        !open && classes.imgContainerClose
      )}
      style={{ "--widthColumns": width } as React.CSSProperties}
    >
      {images.map((element, index) => {
        if (typeof element == "string")
          return (
            <img
              key={"album1" + index}
              src={element}
              alt={"key" + index}
              onClick={() => {}}
            />
          );
        else if (typeof element != "undefined") return element;
      })}
    </div>
  )
}

export default GridLayout