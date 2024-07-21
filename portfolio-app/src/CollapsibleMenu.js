import React, { useState } from 'react';
import './CollapsibleMenu.css';

const CollapsibleMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`menu-container ${isOpen ? 'open' : ''}`}>
      <button className="toggle-button" onClick={toggleMenu}>
        {isOpen ? 'Close' : 'Menu'}
      </button>
      <nav className={`menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="https://www.linkedin.com/in/simonpasi/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://www.malt.fr/profile/simonpasi" target="_blank" rel="noopener noreferrer">Malt</a></li>
          <li><a href="https://simonpasi.blog/tagged/unity3d" target="_blank" rel="noopener noreferrer">Unity3D Blog</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default CollapsibleMenu;
