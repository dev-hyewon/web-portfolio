import React from 'react';
import './language.css';
import { INPUT_ID_SUB_MENU_LANG } from '@/constant';

const Language = () => {
  return (
    <aside id="language-aside">
      <header>
        <h2>Language</h2>
        <p>다른 언어로 변경 가능합니다.</p>
      </header>
      <dl></dl>
      <footer>
        <label htmlFor={INPUT_ID_SUB_MENU_LANG}>돌아가기</label>
      </footer>
    </aside>
  );
};

export default Language;
