import React, { useEffect, useRef, useState } from "react";
import classes from "./video-intro.module.css";
import { PageType } from "@/enums/page-type";
import classNames from "classnames";

interface VideoIntroProps {
  selectedPageType: PageType;
  video: { type: PageType; path: string }[];
  isChanging: boolean;
}

const VideoIntro = ({
  selectedPageType,
  video,
  isChanging,
}: VideoIntroProps) => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  useEffect(() => {
    if(isChanging){
    videoRefs.current.forEach((videoRef, index) => {
      if (videoRef) {
        videoRef.currentTime = 0;
        videoRef.play();
      }
    });}
  }, [selectedPageType]);
  return (
    <div
      className={classes.videosContainer}
      style={
        {
          "--videosNumber": video.length,
        } as React.CSSProperties
      }
    >
      <div
        className={classNames(
          classes.firstTransitionPanel,
          isChanging && classes.firstTransitionPanelStart
        )}
      ></div>
      <div
        className={classNames(
          classes.secondTransitionPanel,
          isChanging && classes.secondTransitionPanelStart
        )}
      ></div>
      {video.map((element, index) => {
        return (
          <div
            key={index}
            className={classNames(
              classes.videoContainer,
              selectedPageType == element.type && classes.videoContainerSelected
            )}
          >
            <video
              preload="none"
              className={classes.video}
              autoPlay
              muted
              loop
              ref={(el)=>{videoRefs.current[index]=el}}
            >
              <source src={element.path} type="video/mp4" />
            </video>
          </div>
        );
      })}
    </div>
  );
};

export default VideoIntro;
