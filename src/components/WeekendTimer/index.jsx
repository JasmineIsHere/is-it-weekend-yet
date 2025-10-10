import React, { useEffect, useState } from 'react'
import { BGMButton, Heading, Image } from './styles';
import Celebration from '../Celebration';

const WeekendTimer = () => {
  
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function isWeekend(date) {
    const day = date.getDay();
    return day === 6 || day === 0; // Saturday = 6, Sunday = 0
  }
  function timeUntilWeekend(date) {
    const day = date.getDay();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    let daysUntilWeekend = (6 - day + 7) % 7; // Days until Saturday
    if (daysUntilWeekend === 0 && (hours > 0 || minutes > 0 || seconds > 0)) {
      daysUntilWeekend = 7; // If it's Saturday but past midnight, count to next Saturday
    }
    const totalHours = daysUntilWeekend * 24 - hours - 1;
    const totalMinutes = 59 - minutes;
    const totalSeconds = 59 - seconds;
    return { days: daysUntilWeekend, hours: totalHours, minutes: totalMinutes, seconds: totalSeconds };
  }

  return (
    <>
      {isWeekend(time) ? (
        <Celebration />
      ) : (
        <h1>Boooo</h1>
      )}
    </>
  )
}

export default WeekendTimer