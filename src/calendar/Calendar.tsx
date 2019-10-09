import React, { useState } from 'react';
import Calendar, { CalendarProps } from 'react-calendar';
import {EventDialog} from './EventDialog'

export const CalendarPage = () => {

  let [showEventDialog, setShowEventDialog] = useState(false);
  let [eventDate, setEventDate] = useState(new Date());

  const openEventDialog = (date: Date) => {
    setEventDate(date);
    setShowEventDialog(true);
  }

  const closeEventDialog = () => {
    setShowEventDialog(false);
  }

  return (
    <div className="App">
      <EventDialog 
        date={eventDate}
        show={showEventDialog}
        close={closeEventDialog}
      />
      <div>
        <title>
          Calendar
      </title>
      </div>
      <div>
        <Calendar
          onClickDay={openEventDialog}
        />
      </div>
    </div>
  )
}
