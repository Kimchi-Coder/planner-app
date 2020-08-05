import React from 'react';

const TenMinuteBox = ({ minute }) => {
  return (
    <>
      <div className={`${minute} ten-minute-box`}>{minute}</div>
    </>
  );
};

export default TenMinuteBox;
