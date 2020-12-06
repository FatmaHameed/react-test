import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <div>
      <Link to="/radar">
        <button>Radar</button>
      </Link>
      <Link to="/Bar">
        <button>Bar</button>
      </Link>
    </div>
  );
};
