import React, { useEffect, useState } from 'react'
import { Time } from './styles';
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
    let daysUntilWeekend = 5 - day; // Days until Saturday

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    
    const totalHours = 23 - hours;
    const totalMinutes = 59 - minutes;
    const totalSeconds = 59 - seconds;
    return { days: daysUntilWeekend, hours: totalHours, minutes: totalMinutes, seconds: totalSeconds };
  }

  return (
    <>
      {isWeekend(time) ? (
        <Celebration />
      ) : (
        <>
        <h1>There's still</h1>
        <Time>
          {timeUntilWeekend(time).days != 0 && timeUntilWeekend(time).days + 'd '}
          {timeUntilWeekend(time).hours != 0 && timeUntilWeekend(time).hours + 'h '}
          {timeUntilWeekend(time).minutes != 0 && timeUntilWeekend(time).minutes + 'm '}
          {timeUntilWeekend(time).seconds != 0 && timeUntilWeekend(time).seconds + 's'}
        </Time>
        <h1>until the weekend</h1>
        </>
      )}
    </>
  )
}

export default WeekendTimer