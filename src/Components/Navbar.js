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
      path: '/projects',
      text: 'Projects',
    },
    {
      id: 3,
      path: '/about',
      text: 'About',
    },
    {
      id: 4,
      path: '/contact-me',
      text: 'Contact Me',
    },
  ];

  return (
    <nav>
      <div className="rightNav">
        <h1>Augusto</h1>
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
