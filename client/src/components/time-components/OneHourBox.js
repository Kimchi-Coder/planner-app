import React from 'react';
import TenMinuteBox from './TenMinuteBox';

const OneHourBox = ({ hour }) => {
  return (
    <>
      <div className={`${hour} one-hour-box`}>
        <TenMinuteBox minute={0} />
        <TenMinuteBox minute={10} />
        <TenMinuteBox minute={20} />
        <TenMinuteBox minute={30} />
        <TenMinuteBox minute={40} />
        <TenMinuteBox minute={50} />
      </div>
    </>
  );
};

export default OneHourBox;
