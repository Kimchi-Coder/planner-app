import React from 'react';
import SingleTask from './SingleTask';
import './task-component-styles.css';

const TaskList = () => {
  return (
    <>
      <div className="task-section-wrapper">
        <div className="task-header">
          <div className="separator-left"></div>
          <div className="separator-text">Tasks</div>
          <div className="separator-right"></div>
        </div>
        <div className="task-container">
          <SingleTask />
          <SingleTask />
          <SingleTask />
        </div>
      </div>
    </>
  );
};

export default TaskList;
