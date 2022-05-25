import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/portfolio',
      text: 'portfolio',
    },
    {
      id: 3,
      path: '/about',
      text: 'About',
    },
    {
      id: 4,
      path: '/contact',
      text: 'Contact',
    },
  ];

  return (
    <nav>
      <div className="rightNav">
        <NavLink
          to={links[0].path}
          className="mainLink"
        >
          Augusto
        </NavLink>
      </div>
      <ul className="links">
        {links.map((link) => (
          <li key={link.id} className="linkLi">
            <NavLink
              to={link.path}
              className={(navData) => (navData.isActive ? 'link active' : 'link')}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
