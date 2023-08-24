import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Radio from '@/components/radio';
import {
  INPUT_ID_MENU,
  INPUT_ID_SUB_MENU_LANG,
  KEY_LANG,
  LANGUAGES,
} from '@/constant';
import './language.css';

const Language = () => {
  const { t, i18n } = useTranslation();
  const { language, changeLanguage } = i18n;
  const [selectedLang, setSelectedLang] = useState(language);

  useEffect(() => {
    const menuCheckBox = document.getElementById(INPUT_ID_MENU);
    const langCheckBox = document.getElementById(INPUT_ID_SUB_MENU_LANG);
    const func = (event) => {
      if (!event.target.checked) {
        setSelectedLang(language);
      }
    };
    menuCheckBox.addEventListener('change', func);
    langCheckBox.addEventListener('change', func);
    return () => {
      menuCheckBox.removeEventListener('change', func);
      langCheckBox.removeEventListener('change', func);
    };
  }, [language]);

  const onChange = (event) => {
    const { value } = event.target;
    setSelectedLang(value);
  };

  const onApply = () => {
    sessionStorage.setItem(KEY_LANG, selectedLang);
    changeLanguage(selectedLang);
  };

  return (
    <aside id="language-aside">
      <header>
        <h2>Language</h2>
        <p>다른 언어로 변경 가능합니다.</p>
      </header>
      <div>
        <div className="change-language">
          <Radio.Group
            name="radio-language"
            checkedValue={selectedLang}
            onChange={onChange}
            column
            title="언어를 선택해주세요"
          >
            <Radio.Option value={LANGUAGES.KOREAN}>{t('ko')}</Radio.Option>
            <Radio.Option value={LANGUAGES.ENGLISH}>{t('en')}</Radio.Option>
            <Radio.Option value={LANGUAGES.JAPANESE}>{t('ja')}</Radio.Option>
            <Radio.Option value={LANGUAGES.CHINESE}>{t('zh')}</Radio.Option>
            <Radio.Option value={LANGUAGES.GERMAN}>{t('de')}</Radio.Option>
          </Radio.Group>
          <button
            className="apply"
            onClick={onApply}
            disabled={selectedLang === language}
          >
            적용
          </button>
        </div>
      </div>
      <footer>
        <label htmlFor={INPUT_ID_SUB_MENU_LANG}>돌아가기</label>
      </footer>
    </aside>
  );
};

export default Language;
