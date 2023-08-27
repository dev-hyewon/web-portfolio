import React, { useEffect, useState } from 'react';
import { INPUT_ID_MENU } from '@/constant';
import Aside from '@pages/aside/aside';
import Language from '@pages/aside/language';
import './header.css';

const Header = () => {
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (on) {
      document.body.style = 'overflow-y: hidden';
      return () => (document.body.style = 'overflow-y: auto');
    }
  }, [on]);

  const toggleMenu = () => setOn(!on);

  return (
    <div
      id="header-wrapper"
      onClick={(e) => e.target === e.currentTarget && toggleMenu()}
    >
      <input
        type="checkbox"
        id={INPUT_ID_MENU}
        checked={on}
        onChange={toggleMenu}
        style={{ display: 'none' }}
      />
      <label htmlFor={INPUT_ID_MENU}>
        <span></span>
        <span></span>
        <span></span>
      </label>
      <Aside on={on} />
      <Language />
    </div>
  );
};

export default Header;
