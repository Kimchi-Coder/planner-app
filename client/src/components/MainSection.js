import React from 'react';
import TimeTable from './time-components/TimeTable';
import TaskList from './task-components/TaskList';

const MainSection = () => {
  return (
    <section className="section-container section-main">
      <div className="main-wrapper">
        <TaskList />

        <TimeTable />
      </div>
    </section>
  );
};

export default MainSection;
