import React, { useState } from 'react'
import Button from "@/components/button";
import { ButtonVariants } from "@/button-variants/buttons-variants-enum";
import { Events } from "@/data/events";
import classes from './events-admin.module.css'

const EventsAdmin = () => {
    const [newEventsCount, setNewEventsCount] = useState(0);
  return (<>
    {Events.map((element, index) => {
        return (
          <div className={classes.eventsContainer}>
            <label htmlFor={`event${index}`}>event {index}</label>
            <div key={`event${index}`} className={classes.eventContainer}>
              <p>- If the input is empty, will remain preselected value</p>
              <label htmlFor={`event${index}`}>
                Image with preselect value
              </label>
              <input type="file" />
            </div>
            <div key={`event${index}`}>
              <label htmlFor={`event${index}`}>{element.title} Title</label>
              <input type="text" placeholder={`Event's name`} />
            </div>
            <div key={`event${index}`}>
              <label htmlFor={`event${index}`}>Date</label>
              <input type="date" />
            </div>
            <Button variant={ButtonVariants.Default} type="button">
              - delete event
            </Button>
          </div>
        );
      })}
      <Button
        variant={ButtonVariants.Default}
        onClick={() => setNewEventsCount(newEventsCount + 1)}
        type="button"
      >
        + add event
      </Button>
      {Array.from({ length: newEventsCount }).map((_, i) => (
        <div key={i} className={classes.eventsContainer}>
          <label htmlFor={`event${i}`}>new event {i}</label>
          <div key={`event${i}`}>
            <p>- If the input is empty, will remain preseted value</p>
            <label htmlFor={`event${i}`}>Image with preset value</label>
            <input type="file" />
          </div>
          <div key={`event${i}`}>
            <label htmlFor={`event${i}`}>Title</label>
            <input type="text" />
          </div>
          <div key={`event${i}`}>
            <label htmlFor={`event${i}`}>Date</label>
            <input type="date" />
          </div>
          <Button
            variant={ButtonVariants.Default}
            onClick={() => setNewEventsCount(newEventsCount - 1)}
            type="button"
          >
            - delete event
          </Button>
        </div>
      ))}</>
  )
}

export default EventsAdmin