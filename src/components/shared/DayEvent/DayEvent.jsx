import React from 'react';
import './DayEvent.css';

export default function DayEvent(props) {
  return (
    <time className="icon day">
      <span className="month">{props.month}</span>
      <span className="day">{props.day}</span>
      <span className="week">{props.week}</span>
    </time>
  );
}
