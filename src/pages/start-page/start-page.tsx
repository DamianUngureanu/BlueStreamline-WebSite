// "use client";

import React, { useEffect, useState } from "react";
import VideoIntro from "../../components/video-intro";
import StartNavbar from "../../components/start-navbar";
import LogoBVMW from "../../../public/BlueStreamlineLOGO.png";
import VideoRacing from "../../../public/video-intro.mp4";
import VideoHisory from "../../../public/history.mp4";
import VideoTeam from "../../../public/team.mp4";
import VideoContact from "../../../public/contact.mp4";
import VideoNews from "../../../public/news.mp4";
import { PageType } from "@/enums/page-type";
import MoreInfo from "@/components/more-info";
import classes from './start-page.module.css'

interface StartPageProps{
  selectedLanguage:"en" | "ro";
  selectLanguage:(value:"en" | "ro")=>void;
}

const StartPage = ({selectedLanguage,selectLanguage}:StartPageProps) => {
  const [selectedPageType, setSelectedPageType] = useState<PageType>(
    PageType.racing
  );
  const [isChangingPageType, setIsChangingPageType] = useState(false);
  const videosOfPageType = [
    { type: PageType.racing, path: VideoRacing.originalFilePath.slice(7) },
    { type: PageType.history, path: VideoHisory.originalFilePath.slice(7) },
    { type: PageType.team, path: VideoTeam.originalFilePath.slice(7) },
    { type: PageType.news, path: VideoNews.originalFilePath.slice(7) },
    { type: PageType.contact, path: VideoContact.originalFilePath.slice(7) },
  ];
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);

    return () => clearTimeout(timeout);
  }, []);
  useEffect(() => {
    selectLanguage(selectedLanguage);
  }, [selectedLanguage]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      const changeTimeout = setTimeout(()=>{
      if (selectedPageType === PageType.racing) {
        setSelectedPageType(PageType.history);
      } else if (selectedPageType === PageType.history) {
        setSelectedPageType(PageType.team);
      } else if (selectedPageType === PageType.team) {
        setSelectedPageType(PageType.contact);
      } else if (selectedPageType === PageType.news) {
        setSelectedPageType(PageType.news);
      } else if (selectedPageType === PageType.contact) {
        setSelectedPageType(PageType.racing);
      }
      },750)
      setIsChangingPageType(true);
      
    }, 10000);

    // Curăță timeoutul la schimbarea paginii
    return () => clearTimeout(timeout);
  }, [selectedPageType]); // Aici, depindem de selectedPageType

  useEffect(() => {
    if (isChangingPageType) {
      const changeTimeout = setTimeout(() => {
        setIsChangingPageType(false);
      }, 1500);

      // Curăță timeoutul de schimbare
      return () => clearTimeout(changeTimeout);
    }
  }, [isChangingPageType]);
  return (
    <main className={classes.container} id="startMainID">
    
      <VideoIntro
        selectedPageType={selectedPageType}
        video={videosOfPageType}
        isChanging={isChangingPageType}
      />
      <MoreInfo type={selectedPageType} selectedLanguage={selectedLanguage} />

      <StartNavbar
        logo={LogoBVMW.src}
        selectedLanguage={selectedLanguage}
        isChanging={isChangingPageType}
        selectedPageType={selectedPageType}
        selectLanguage={(value: "en" | "ro") => {
          selectLanguage(value);
        }}
        selectPageType={(selectedPage) => setSelectedPageType(selectedPage)}
        isChangingPageType={(value) => setIsChangingPageType(value)}
      />
    </main>
  );
};

export default StartPage;
