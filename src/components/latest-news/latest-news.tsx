import React from "react";
import classes from "./latest-news.module.css";
import { IoLogoInstagram } from "react-icons/io5";
import { FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
interface LatestNewsProps {
  [x: string]: any;
}

const LatestNews = ({ ...rest }: LatestNewsProps) => {
  return (
    <div {...rest} className={classes.container}>
      <div className={classes.card}>
        <img src={"/images/new1.png"} alt="" />
        <div className={classes.info}>
          <div className={classes.description}>
            <h3>S-a produs gaming</h3>
            <span>
              I-am spus "The Rock'N'Roll Tour". Și așa a fost! A fost un sezon
              așa cum ne-am dorit! Am trudit, ne-am antrenat, am luptat și ne-am
              bucurat! Dacă 2023 a părut "o minune", 2024 a fost o confirmare!
              Confirmarea că suntem Campioni!
              ___111--------🥇🥇🥈----🥈🥉🥄------111Classics___
            </span>
          </div>
          <IoLogoInstagram />
        </div>

        <a target="_blanck" href="https://www.instagram.com/p/DABxNOhObC-/"></a>
      </div>
      <div className={classes.card}>
        <img src={"/images/new2.png"} alt="" />
        <div className={classes.info}>
          <div className={classes.description}>
            <h3>S-a ajuns acasa</h3>
            <span>
              Cu trofee și cu titluri, ne-am întors în sfârșit acasă la
              @universitateatransilvania din Brașov, unde părinți și prieteni
              ne-au primit cu brațele deschise! Vă mulțumim tuturor că ați fost
              alături de noi pe tot parcursul călătoriei noastre și suntem
              fericiți că am putut sa va aducem în strop de bucurie și de
              mândrie! _________________________________111_____
            </span>
          </div>
          <FiFacebook />
        </div>

        <a target="_blanck" href="https://www.instagram.com/p/C_oA2qGux_V/"></a>
      </div>
      <div className={classes.card}>
        <img src={"/images/new3.png"} alt="" />
        <div className={classes.info}>
          <div className={classes.description}>
            <h3>Se uda oameni</h3>
            <span>
              CHAMPIONS OVERALL @fsbalkans ______________________________111___
            </span>
          </div>
          <FaXTwitter />
        </div>

        <a target="_blanck" href="https://www.instagram.com/p/C_lvYwtuu7P/"></a>
      </div>
    </div>
  );
};

export default LatestNews;
