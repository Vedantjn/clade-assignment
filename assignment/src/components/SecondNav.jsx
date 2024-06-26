import React, { useState } from 'react';
import '../styles/SecondNav.css';

const SecondNav = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className='second-nav-container'>
      <a
        href="#"
        className={activeLink === 'Job Preview' ? 'active' : ''}
        onClick={() => handleLinkClick('Job Preview')}
      >
        Job Preview
      </a>
      <a
        href="#"
        className={activeLink === 'Applicants' ? 'active' : ''}
        onClick={() => handleLinkClick('Applicants')}
      >
        Applicants
      </a>
      <a
        href="#"
        className={activeLink === 'Match' ? 'active' : ''}
        onClick={() => handleLinkClick('Match')}
      >
        Match
      </a>
      <a
        href="#"
        className={activeLink === 'Messages' ? 'active' : ''}
        onClick={() => handleLinkClick('Messages')}
      >
        Messages
      </a>
    </div>
  );
};

export default SecondNav;
