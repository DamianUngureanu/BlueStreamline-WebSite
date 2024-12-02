import React, { useEffect, useState } from "react";
import classes from "./history-slider.module.css";
import useMouseSlide from "@/hooks/use-mouse-slide";
import classNames from "classnames";
import Modal from "../modal";
import useDictionary from "@/hooks/use-dictionary";
import InnerModal from "./inner-modal";
// import {Cars} from '@/enums/cars';

import { CarsData } from "@/data/cars";
import { TeamData } from "@/data/team";

interface HistorySliderProps {
  selectedLanguage: "ro" | "en";
}

const HistorySlider = ({ selectedLanguage }: HistorySliderProps) => {
  const { dictionary, setLanguage } = useDictionary();
  useEffect(() => {
    setLanguage(selectedLanguage);
  }, [selectedLanguage]);
  const { isMouseClicked, mouseSlideDistance } = useMouseSlide();
  const [infoModal, setinfoModal] = useState<String | null>(null);
  const [angleRotation, setAngleRotation] = useState(0);
  const [prevMouseSliding, setPrevMouseSliding] = useState(0);

  
  const handleCardClciked = (car: String) => {
    setinfoModal(car);
  };

  useEffect(() => {
    const slider = document.getElementById("SliderID");

    const interval = setInterval(() => {
      if (!isMouseClicked && infoModal == null) {
        setAngleRotation((prevAngle) => {
          const newAngle = prevAngle + 0.01;
          if (newAngle >= 360) return 0;
          return newAngle;
        });
      } else {
        if (mouseSlideDistance > prevMouseSliding && infoModal == null) {
          setAngleRotation((prevAngle) => {
            const newAngle = prevAngle + 0.5;
            if (newAngle >= 360) return 0;
            return newAngle;
          });
        } else if (mouseSlideDistance < prevMouseSliding && infoModal == null) {
          setAngleRotation((prevAngle) => {
            const newAngle = prevAngle - 0.5;
            if (newAngle >= 360) return 0;
            return newAngle;
          });
        }
        setPrevMouseSliding(mouseSlideDistance);
      }

      if (slider) {
        slider.style.transform = `translateX(-50%) perspective(1000px) rotateX(-16deg) rotateY(${angleRotation}deg)`;
      }
    }, 1);

    return () => clearInterval(interval);
  }, [angleRotation, isMouseClicked, mouseSlideDistance, infoModal]);

  const findCar = (infoModal: String | null) => {
    const car = CarsData.find((element) => element.name == infoModal);
    return car;
  };

  return (
    <div className={classes.container}>
      <div className={classes.cup}>
        <img src="/history/cup.png" alt="cup" />
      </div>
      <div className={classes.sliderContainer} />
      <div
        className={classNames(
          classes.slider,
          !isMouseClicked && infoModal == null && classes.sliderRotate
        )}
        style={{ "--quantity": CarsData.length } as React.CSSProperties}
        id="SliderID"
      >
        {CarsData.map((element, index) => {
          return (
            <>
              <div
                onClick={() => handleCardClciked(element.name)}
                className={classes.card}
                style={{ "--position": index } as React.CSSProperties}
                key={"card" + index}
              >
                <div className={classes.imageContainer}>
                  <img src={element.image} alt={String(index)} />
                </div>
                <div className={classes.infoContainer}>
                  <h3>{element.name}</h3>
                  {selectedLanguage=="en" ? element.titleEN : element.titleRO }
                </div>
              </div>
              <div
                className={classes.back}
                style={{ "--positionBack": index } as React.CSSProperties}
                key={"cardBack" + index}
              >
                <img src="/BlueStreamlineLOGO.png" alt="logo" />
              </div>{" "}
            </>
          );
        })}
      </div>
      <div className={classes.modal}>
        {Boolean(infoModal) ? (
          <Modal
            title={infoModal + " | "}
            onClose={() => setinfoModal(null)}
          >
            <InnerModal
              car={infoModal}
              image={findCar(infoModal)?.image}
              description={findCar(infoModal)?.descriptionEN}
              selectedLanguage={selectedLanguage}
              team={TeamData.filter((element)=>element.car==infoModal)}
            />
          </Modal>
        ):
        document.body.style.overflowY=""}
      </div>
    </div>
  );
};

export default HistorySlider;
