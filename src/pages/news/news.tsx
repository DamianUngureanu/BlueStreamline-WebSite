import React, { useEffect } from "react";
import classes from "./news.module.css";
import Intro from "@/components/intro";
import { NewsData } from "@/data/news";
import { NewsType } from "@/types/news";
import useDictionary from "@/hooks/use-dictionary";

interface NewsProps {
  selectedLanguage: "en" | "ro";
  selectLanguage: (value: "en" | "ro") => void;
}

const News = ({ selectedLanguage, selectLanguage }: NewsProps) => {
  const { dictionary, setLanguage } = useDictionary();
  useEffect(() => {
    setLanguage(selectedLanguage);
  }, [selectedLanguage]);
  const constructNewsPost = (element: NewsType) => {
    return <div className={classes.card}>
        <img src={element.image} alt="news post" />
        <div className={classes.info}>
            <h3>{selectedLanguage=='en'?element.titleEN:element.titleRO}</h3>
            <span>{selectedLanguage=='en'?element.messageEN:element.messageRO}</span>
        </div>
    </div>;
  };

  return (
    <main className={classes.container}>
      <Intro
        image={"/images/BS24-front-show.jpg"}
        selectedLanguage={selectedLanguage}
        selectLanguage={(value) => selectLanguage(value)}
      />
      <div className={classes.content}>
        {NewsData.map((element) => constructNewsPost(element))}
      </div>
    </main>
  );
};

export default News;
