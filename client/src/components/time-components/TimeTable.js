import React from 'react';
import OneHourBox from './OneHourBox';
import './time-component-styles.css';

const hoursArr = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
];

const TimeTable = () => {
  return (
    <>
      <div className="time-table-wrapper">
        <div className="time-table-header">
          <div className="separator-left"></div>
          <div className="separator-text">Time Table</div>
          <div className="separator-right"></div>
        </div>
        <div className="time-table">
          {hoursArr.map((hour) => (
            <OneHourBox hour={hour} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TimeTable;
