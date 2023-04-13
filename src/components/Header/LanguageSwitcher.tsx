import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../reducers/languageReducer';
import { Language } from '../../types';
import { RootState } from '../../store';
import { DEFAULT_LANGUAGE_CODE, SECONDARY_LANGUAGE_CODE, DEFAULT_LANGUAGE_NAME , SECONDARY_LANGUAGE_NAME } from '../../constants';
import { Select } from 'antd';

const { Option } = Select;

const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state: RootState) => state.language.language);

  const handleChangeLanguage = (value: Language) => {
    dispatch(setLanguage(value));
  };

  return (
    <div data-testid="language-switcher">
      <Select value={currentLanguage} onChange={handleChangeLanguage}>
        <Option value={SECONDARY_LANGUAGE_CODE}>
          {SECONDARY_LANGUAGE_NAME}
        </Option>
        <Option value={DEFAULT_LANGUAGE_CODE}>
          {DEFAULT_LANGUAGE_NAME}
        </Option>
      </Select>
    </div>
  );
};

export default LanguageSwitcher;
