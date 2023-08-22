import React from 'react';
import { useTranslation } from 'react-i18next';
import Radio from '@/components/radio';
import { INPUT_ID_SUB_MENU_LANG, KEY_LANG, LANGUAGES } from '@/constant';
import './language.css';

const Language = () => {
  const { t, i18n } = useTranslation();
  const { language, changeLanguage } = i18n;

  const onChange = (event) => {
    const { value } = event.target;
    sessionStorage.setItem(KEY_LANG, value);
    changeLanguage(value);
  };

  return (
    <aside id="language-aside">
      <header>
        <h2>Language</h2>
        <p>다른 언어로 변경 가능합니다.</p>
      </header>
      <Radio.Group
        name="radio-language"
        defaultValue={language}
        onChange={onChange}
      >
        <Radio.Option value={LANGUAGES.KOREAN}>{t('ko')}</Radio.Option>
        <Radio.Option value={LANGUAGES.ENGLISH}>{t('en')}</Radio.Option>
        <Radio.Option value={LANGUAGES.JAPANESE}>{t('ja')}</Radio.Option>
        <Radio.Option value={LANGUAGES.CHINESE}>{t('zh')}</Radio.Option>
        <Radio.Option value={LANGUAGES.GERMAN}>{t('de')}</Radio.Option>
      </Radio.Group>
      <footer>
        <label htmlFor={INPUT_ID_SUB_MENU_LANG}>돌아가기</label>
      </footer>
    </aside>
  );
};

export default Language;
