import React, { useEffect } from "react";
import classes from "./footer.module.css";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoYoutube,
  IoLogoTwitter,
  IoLocationSharp,
  IoMail,
} from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import useDictionary from "@/hooks/use-dictionary";
import { FaPhoneAlt } from "react-icons/fa";

interface FooterProps {
  selectedLanguage: "ro" | "en";
  selectLanguage: (value: "ro" | "en") => void;
}

const Footer = ({ selectedLanguage, selectLanguage }: FooterProps) => {
  const { dictionary, setLanguage } = useDictionary();
  useEffect(() => {
    setLanguage(selectedLanguage);
  }, [selectedLanguage]);
  return (
    <footer className={classes.footer}>
      <div className={classes.content}>
        <a href="/" className={classes.logo}><img src="/BlueStreamlineLOGO.png" alt="logo" /></a>
        <div className={classes.media}>
          <h2>{dictionary.media}</h2>
          <a target="_blanck" href="https://www.instagram.com/bluestreamline/">
            <IoLogoInstagram />
            <span>{dictionary.instagram}</span>
          </a>
          <a target="_blanck" href="https://www.facebook.com/BlueStreamline/">
            <IoLogoFacebook />
            <span>{dictionary.facebook}</span>
          </a>
          <a
            target="_blanck"
            href="https://www.youtube.com/user/BlueStreamline111"
          >
            <IoLogoYoutube />
            <span>{dictionary.youTube}</span>
          </a>
          <a target="_blanck" href="https://x.com/bluestreamline">
            <FaXTwitter />
            <span>{dictionary.twiter}</span>
          </a>
        </div>
        <div className={classes.contact}>
          <h2>{dictionary.contact}</h2>
          <a target="_blanck" href="https://maps.app.goo.gl/fxh9zRqVePpGjBHW9">
            <div>
              <span>{dictionary.location}</span>
              <span>str. Universității, Brașov, România</span>
            </div>
            <IoLocationSharp />
          </a>
          <a target="_blanck" href="">
            <div>
              <span>{dictionary.phone}</span>
              <span>+40 212 345 678</span>
            </div>
            <FaPhoneAlt />
          </a>
          <a target="_blanck" href="mailto:team@bluestreamline.ro">
            <div>
              <span>{dictionary.email}</span>
              <span>team@bluestreamline.ro</span>
            </div>
            <IoMail />
          </a>
        </div>
        <div className={classes.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2788.822310688158!2d25.597043!3d45.65439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDXCsDM5JzE1LjgiTiAyNcKwMzUnNDkuNCJF!5e0!3m2!1sro!2sro!4v1728133368469!5m2!1sro!2sro"
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className={classes.otherInfo}>- powered by BlueStreamline -</div>
    </footer>
  );
};

export default Footer;
