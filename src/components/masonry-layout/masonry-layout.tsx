import classNames from "classnames";
import React, { ReactElement } from "react";
import classes from "./masonry-layout.module.css";

interface MansonryLayoutProps {
  open?: boolean;
  images: string[] | (ReactElement | undefined)[] ;
  width?: string;
}

const MansonryLayout = ({
  open = true,
  images,
  width = "250px",
}: MansonryLayoutProps) => {
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
  );
};

export default MansonryLayout;
