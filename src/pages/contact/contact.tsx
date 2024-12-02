import Footer from "@/components/footer";
import Intro from "@/components/intro";
import useDictionary from "@/hooks/use-dictionary";
import React, { useEffect, useState } from "react";
import classes from "./contact.module.css";

import { recrutingData } from "@/data/recruting";
import Button from "@/components/button";
import { ButtonVariants } from "@/button-variants/buttons-variants-enum";

interface ContactProps {
  selectedLanguage: "ro" | "en";
  selectLanguage: (value: "ro" | "en") => void;
}

const Contact = ({ selectedLanguage, selectLanguage }: ContactProps) => {
  const [isRegistration, setIsRegistration] = useState(true);
  const { dictionary, setLanguage } = useDictionary();
  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);
    return (
      <>
        <main>
          <Intro
            image={"/garaj-artistic-01.jpg"}
            selectedLanguage={selectedLanguage}
            selectLanguage={(value) => selectLanguage(value)}
          />
          <div className={classes.content}>
            <div className={classes.formContainer}>
              <form action="">
                <h2>{dictionary.sendMessage}</h2>
                <label htmlFor="name">{dictionary.name}</label>
                <input type="text" />
                <label htmlFor="message">{dictionary.massage}</label>
                <textarea name="message" id=""></textarea>
                <label htmlFor="mail">{dictionary.email}</label>
                <input type="email" />
                <Button variant={ButtonVariants.Rectangle} type="submit">
                  {dictionary.submit}
                </Button>
              </form>
            </div>
            {recrutingData.isRecruting ? (
              <div className={classes.recrutingContainer}>
                <h2>{selectedLanguage=="en"?recrutingData.titleEN :recrutingData.titleRO}</h2>
                <p>{selectedLanguage=="en"?recrutingData.messageEN :recrutingData.messageRO}</p>
                <Button variant={ButtonVariants.Default}><a href="#">{dictionary.apply}</a></Button>
                <a
                href="#"
                  className={classes.posterContainer}
                  style={{
                    backgroundImage: `url(${recrutingData.posterPath})`,
                  }}
                ></a>
              </div>
            ) : (
              <a
              href="#"
                className={classes.posterContainer}
                style={
                  recrutingData.posterPath
                    ? { backgroundImage: `url(${recrutingData.posterPath})` }
                    : { backgroundImage: `unset` }
                }
              ></a>
            )}
          </div>
        </main>

        <Footer
          selectedLanguage={selectedLanguage}
          selectLanguage={(value) => selectLanguage(value)}
        />
      </>
    );
};

export default Contact;
