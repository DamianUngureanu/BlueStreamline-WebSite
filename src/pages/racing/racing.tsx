import React, { useEffect, useState } from "react";
import Events from "@/components/events";
import {Event} from '@/types/event';
import classes from "./racing.module.css";
import useDictionary from "@/hooks/use-dictionary";
import AboutFs from "@/components/about-fs";
import LatestNews from "@/components/latest-news";
import Gallery from "@/components/gallery";
import { useWindowDimensions } from "@/hooks/use-window-dimensions";
import SideMenu from "@/components/side-menu";
import { IoMenuOutline } from "react-icons/io5";
import Intro from "@/components/intro";
import Footer from "@/components/footer";

interface RacingProps {
  selectedLanguage: "en" | "ro";
  selectLanguage: (value: "en" | "ro") => void;

  events:Event[];
}

const Racing = ({ selectedLanguage, selectLanguage,events }: RacingProps) => {
  const { width, height } = useWindowDimensions();
  const { dictionary, setLanguage } = useDictionary();

  const [eventsScroll, setEventsScroll] = useState(0);
  const [aboutFSScroll, setAboutFSScroll] = useState(0);
  const [newsScroll, setNewsScroll] = useState(0);
  const [galleryScroll, setGalleryScroll] = useState(0);

  const handleInterval = () => {
    let eventAux = document.getElementById("eventsID");
    let aboutFSAux = document.getElementById("aboutFSID");
    let newsAux = document.getElementById("newsID");
    let galleryAux = document.getElementById("galleryID");
    if (eventAux && aboutFSAux && newsAux && galleryAux) {
      setEventsScroll(eventAux.clientHeight + 300);
      setAboutFSScroll(aboutFSAux.clientHeight + 300);
      setNewsScroll(newsAux.clientHeight + 300);
      setGalleryScroll(galleryAux.clientHeight + 300);
      console.log(eventAux.clientHeight,aboutFSAux.clientHeight,newsAux.clientHeight,galleryAux.clientHeight);
    }
  };
  useEffect(() => {
    window.scrollTo(0,0);
    const interval = setInterval(() => {
      handleInterval();
    }, 1);
    return () => clearInterval(interval);
  }, []);

  const handelScrllBack = (value: number) => {
    console.log(value);
    window.scrollTo(0, value);
  };
  return (
    <>
      <main className={classes.container}>
        <Intro
          image={"/images/BS24-front-show.jpg"}
          selectedLanguage={selectedLanguage}
          selectLanguage={(value) => selectLanguage(value)}
        />
        <div className={classes.content}>
          <div className={classes.leftSection}>
            <div className={classes.menuContainer}>
              <div
                onClick={() => handelScrllBack(height/ 2)}
                className={classes.menu}
                style={{ top: "calc(20% - 70px)" }}
              >
                {dictionary.events}
              </div>
              <div
                onClick={() => handelScrllBack(eventsScroll + height / 2)}
                className={classes.menu}
                style={{
                  marginTop: eventsScroll - 70 + "px",
                  top: "calc(20% - 20px)",
                }}
              >
                {dictionary.aboutFS}
              </div>
              <div
                onClick={() =>
                  handelScrllBack(eventsScroll + aboutFSScroll + height/ 2)
                }
                className={classes.menu}
                style={{ marginTop: aboutFSScroll + "px", top: "calc(20% + 30px)" }}
              >
                {dictionary.latestNews}
              </div>
              <div
                onClick={() =>
                  handelScrllBack(
                    eventsScroll + newsScroll + aboutFSScroll + height/ 2
                  )
                }
                className={classes.menu}
                style={{
                  marginTop: newsScroll - 200 + "px",
                  top: "calc(20% + 80px)",
                }}
              >
                {dictionary.gallery}
              </div>
            </div>
          </div>
          <div className={classes.rightSection}>
            <Events id={"eventsID"} data={events}/>
            <AboutFs id={"aboutFSID"} selectedLanguage={selectedLanguage} />
            <LatestNews id={"newsID"} />
            <Gallery id={"galleryID"} selectedLanguage={selectedLanguage}/>
          </div>
        </div>
      </main>
      <Footer
        selectedLanguage={selectedLanguage}
        selectLanguage={(value) => selectLanguage(value)}
      />
    </>
  );
};

export default Racing;
