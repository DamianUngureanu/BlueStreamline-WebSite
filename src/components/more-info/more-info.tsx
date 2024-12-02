import { PageType } from "@/enums/page-type";
import React, { useEffect, useState } from "react";
import classes from "./more-info.module.css";
import { ButtonVariants } from "@/button-variants/buttons-variants-enum";
import Button from "@/components/button";
import useDictionary from "@/hooks/use-dictionary";
import classNames from "classnames";

interface MoreInfoProps {
  type: PageType;
  selectedLanguage: "en" | "ro";
}

const MoreInfo = ({ type, selectedLanguage }: MoreInfoProps) => {
  const [openHistoryModal, setOpenHistoryModal] = useState(false);
  const { dictionary, setLanguage } = useDictionary();
  useEffect(() => {
    setLanguage(selectedLanguage);
  }, [selectedLanguage]);
  useEffect(() => {
    if (type != PageType.history) setOpenHistoryModal(false);
  }, [type]);
  if (type == PageType.racing) {
    return (
      <div className={classes.moreInfo}>
        <Button variant={ButtonVariants.Rectangle} direction={"left"}>
          <a
            download
            href={"files/BlueStreamline.pdf"}
            className={classes.linkButton}
          >
            {dictionary.downloadBrochure}
          </a>
        </Button>
        <Button variant={ButtonVariants.Rectangle} direction={"left"}>
          <a href="/#/racing"
            className={classes.linkButton}>{dictionary.formulaStudent}</a>
          
        </Button>
      </div>
    );
  } else if (type == PageType.history) {
    return (
      <>
        <div
          className={classNames(
            classes.modal,
            openHistoryModal && classes.modalOpen
          )}
        >
          <p className={classes.historyModalParagraph}>
            <span>Sezonul 2022-2023</span> a reprezentat o evoluție fundamentală din punct de
            vedere al construcției monopostului <span>BS23</span> cât și al unei noi echipe.
            Abordarea inovativă a conceptului a condus la un real progres în
            ceea ce privește designul si fiabilitatea monopostrului <span>BS23</span>, astfel
            încât sfârșitul sezonului s-a dovedit unul grandios.
          </p>
          <br />
          <dl>
            <dt className={classes.historyModalCapList}>Locul 1</dt>
            <dd>Formula Student Portugual (Protugalia)</dd>
            <br />
            <dt className={classes.historyModalCapList}>Locul 1</dt>
            <dd>Formula Student Spain (Spania)</dd>
            <br />
            <dt className={classes.historyModalCapList}>Locul 9</dt>
            <dd>Formula Student Alpe Adria (Croația)</dd>
            <br />
            <dt className={classes.historyModalCapList}>Locul 1</dt>
            <dd>Formula Student Balkans (România)</dd>
          </dl>
        </div>
        <div className={classes.moreInfo}>
          <Button
            variant={ButtonVariants.Rectangle}
            direction={"left"}
            onClick={() => setOpenHistoryModal(!openHistoryModal)}
          >
            {dictionary.aboutUs}
          </Button>
          <Button variant={ButtonVariants.Rectangle} direction={"left"}>
          <a href="/#/history"
            className={classes.linkButton}>{dictionary.ourHistory}</a>
            
          </Button>
        </div>
      </>
    );
  } else if (type == PageType.team) {
    return (
      <div className={classes.moreInfo}>
        <Button variant={ButtonVariants.Rectangle} direction={"left"}>
          <a href="/#/team"
            className={classes.linkButton}>{dictionary.ourTeam}</a>
          
        </Button>
      </div>
    );
  } else if (type == PageType.contact) {
    return (
      <div className={classes.moreInfo}>
        <Button variant={ButtonVariants.Rectangle} direction={"left"}>
          <a href="/#/contact"
            className={classes.linkButton}>{dictionary.contactUs}</a>
          
        </Button>
      </div>
    );
  } else {
    return null;
  }
};

export default MoreInfo;
