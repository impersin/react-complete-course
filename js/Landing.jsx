import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="landing">
      <h1>Svideoe</h1>
      <input type="text" placeholder="Search"/><br/>
      {/* <a href="">or browse All</a> replace with <Link> */}
      <Link to="/search">or browse All</Link>
    </div>
);

export default Landing;