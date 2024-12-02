import React, { useEffect, useState } from "react";
import classes from "./about-fs.module.css";
import { PieChart } from "react-minimal-pie-chart";
import useDictionary from "@/hooks/use-dictionary";
import DropdownHeader from "../dropdown-header";
import { AboutFormulaStudentData } from "@/data/about-formula-student";
import { TestType } from "@/enums/test-types";

interface AboutFSProps {
  selectedLanguage: "ro" | "en";
  isOpen?: (vlaue: boolean) => void;
  [x: string]: any;
}

const AboutFS = ({ selectedLanguage, isOpen, ...rest }: AboutFSProps) => {
  const { dictionary, setLanguage } = useDictionary();
  const [onAboutFS, setOnAboutFS] = useState(false);
  useEffect(() => {
    setLanguage(selectedLanguage);
  }, [selectedLanguage]);

  useEffect(() => {
    isOpen && isOpen(onAboutFS);
  }, [onAboutFS]);

  return (
    <div className={classes.container} {...rest}>
      <DropdownHeader
        open={onAboutFS}
        onChange={() => setOnAboutFS(!onAboutFS)}
      >
        <span>
          {selectedLanguage == "en"
            ? AboutFormulaStudentData.titleEN
            : AboutFormulaStudentData.titleRO}
        </span>
      </DropdownHeader>

      <article
        className={!onAboutFS ? classes.articleClose : ""}
        id="aboutFSid"
      >
        <p>
          {selectedLanguage == "en"
            ? AboutFormulaStudentData.messageEN
            : AboutFormulaStudentData.messageRO}
        </p>
        <div className={classes.pieContainer}>
          <ul>
            <h3>{dictionary.headerDynamicTest}</h3>
            {AboutFormulaStudentData.tests.map((element) => {
              if (element.type == TestType.Dynamic)
                return (
                  <li style={{ color: element.color }}>
                    {selectedLanguage == "en"
                      ? element.titleEN
                      : element.titleRO}{" "}
                    ({element.value})
                  </li>
                );
              else return <></>;
            })}
          </ul>
          <PieChart
            className={classes.pieChart}
            data={
              AboutFormulaStudentData.tests.map((element) => {
                return {
                  title:
                    selectedLanguage == "en"
                      ? element.titleEN
                      : element.titleRO,
                  value: element.value,
                  color: element.color,
                };
              })
            }
            startAngle={150}
            lineWidth={80}
            label={({ dataEntry }) => dataEntry.value}
            labelStyle={{ fontSize: "35%", fontWeight: "700" }}
            labelPosition={70}
          />
          <ul>
            <h3>{dictionary.headerStaticTests}</h3>
            {AboutFormulaStudentData.tests.map((element) => {
              if (element.type == TestType.Static)
                return (
                  <li style={{ color: element.color }}>
                    {selectedLanguage == "en"
                      ? element.titleEN
                      : element.titleRO}{" "}
                    ({element.value})
                  </li>
                );
            })}
          </ul>
        </div>
        <div className={classes.explainContainer}>
          {AboutFormulaStudentData.tests.map((element) => {
            if(element.messageEN)
            return (
              <div>
                <h3>{selectedLanguage == "en"
                      ? element.titleEN
                      : element.titleRO}</h3>
                <p>{selectedLanguage == "en"
                      ? element.messageEN
                      : element.messageRO}</p>
              </div>
            );
          })}
        </div>
      </article>
    </div>
  );
};

export default AboutFS;
