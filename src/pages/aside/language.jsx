import React from 'react';
import Radio from '@/components/radio';
import { INPUT_ID_SUB_MENU_LANG, KEY_LANG, LANGUAGES } from '@/constant';
import './language.css';

const Language = () => {
  const onChange = (event) => {
    const { value } = event.target;
    sessionStorage.setItem(KEY_LANG, value);
  };
  return (
    <aside id="language-aside">
      <header>
        <h2>Language</h2>
        <p>다른 언어로 변경 가능합니다.</p>
      </header>
      <Radio.Group
        name="radio-language"
        defaultValue={LANGUAGES.KOREAN}
        onChange={onChange}
      >
        <Radio.Option value={LANGUAGES.KOREAN}>한국어</Radio.Option>
        <Radio.Option value={LANGUAGES.ENGLISH}>영어</Radio.Option>
        <Radio.Option value={LANGUAGES.JAPANESE}>일본어</Radio.Option>
        <Radio.Option value={LANGUAGES.CHINESE}>중국어</Radio.Option>
        <Radio.Option value={LANGUAGES.GERMAN}>독일어</Radio.Option>
      </Radio.Group>
      <footer>
        <label htmlFor={INPUT_ID_SUB_MENU_LANG}>돌아가기</label>
      </footer>
    </aside>
  );
};

export default Language;
