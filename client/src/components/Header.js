import React from 'react';

const Header = () => {
  return (
    <section className="section-container section-header">
      <header className="header-wrapper header-main">
        <h1 className="header-title">My Planner App</h1>
        <div className="header-date">Today's Date: __________________</div>
        <div className="header-goals">Goals: __________________</div>
      </header>
    </section>
  );
};

export default Header;
