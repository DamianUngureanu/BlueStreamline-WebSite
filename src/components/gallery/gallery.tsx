import React, { useRef, useState } from "react";
import classes from "./gallery.module.css";
import { GalleryAlbums } from "@/data/gallery-images";
import DropdownHeader from "../dropdown-header";
import MansonryLayout from "../masonry-layout";

interface GalleryProps {
  selectedLanguage: "ro" | "en";
  [x: string]: any;
}

const Gallery = ({selectedLanguage, ...rest }: GalleryProps) => {
  const [aux, setAux] = useState(false);
  const GalleryAlbumEdit=useRef(
    GalleryAlbums.map((element)=>{
      return {
        nameEN:element.nameEN,
        nameRO:element.nameRO,
        photos:element.photos,
        isOpen:false,
      }
    })
  );
  return (
    <div className={classes.container} {...rest}>
      {GalleryAlbumEdit.current.map((element, index) => {
        return (
          <>
            <DropdownHeader
              open={element.isOpen}
              onChange={() => {element.isOpen=!element.isOpen;setAux(!aux)}}
            >
              {selectedLanguage=="en" ? element.nameEN:element.nameRO}
            </DropdownHeader>
            <MansonryLayout open={element.isOpen} images={element.photos} />
          </>
        );
      })}
    </div>
  );
};

export default Gallery;
