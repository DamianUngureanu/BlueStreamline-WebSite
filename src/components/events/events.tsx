import React from "react";
import classes from "./events.module.css";
import Countdown from "react-countdown";
import { Event } from "@/types/event";

interface EventsProps {
  data: Event[];
  [x: string]: any;
}

const Events = ({ data, ...rest }: EventsProps) => {
  return (
    <div
      className={classes.container}
      {...rest}
      style={{ "--quantity": data.length+1 } as React.CSSProperties}
    >
      <div className={classes.decorative1}></div>
      <div className={classes.decorative2}></div>
      {data.map((element, index) => {
        return (
          <div
            className={classes.card}
            style={
              {
                "--rowStart": index + 1,
                "--rowEnd": index + 3,
                backgroundImage: `url("${element.image}")`,
              } as React.CSSProperties
            }
          >
            <h3>{element.title}</h3>
            <div className={classes.countdown}>
              <Countdown date={Date.now() + 10000} />
            </div>
            <a target="_blank" href={element.link}></a>
          </div>
        );
      })}
      {/* <section>
        <div className={classes.card} style={{backgroundImage:"url('/fss.png')"}}>
          <h3>Formula Student Spain</h3>
          <div className={classes.countdown}>
            <Countdown date={Date.now() + 10000} />
          </div>
          <a target="_blank" href="https://www.formulastudent.es/"></a>
        </div>
        <div className={classes.card} style={{backgroundImage:"url('/fsp.png')"}}>
          <h3>Formula Student Poland</h3>
          <div className={classes.countdown}>
            <Countdown date={Date.now() + 10000} />
          </div>
          <a target="_blank" href="https://fs-poland.pl/"></a>
        </div>
      </section>
      <section>
        <div className={classes.card} style={{backgroundImage:"url('/fsaa.png')"}}>
          <h3>Formula Student Alpe Adria</h3>
          <div className={classes.countdown}>
            <Countdown date={Date.now() + 10000} />
          </div>
          <a target="_blank" href="https://fs-alpeadria.com/"></a>
        </div>
        <div className={classes.card} style={{backgroundImage:"url('/fsbk.png')"}}>
          <h3>Formula Student Balkans</h3>
          <div className={classes.countdown}>
            <Countdown date={Date.now() + 10000} />
          </div>
          <a target="_blank" href="https://www.fsbalkans.ro/"></a>
        </div>
      </section> */}
    </div>
  );
};

export default Events;
