import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Language, LanguageState } from '../types';
import { DEFAULT_LANGUAGE_CODE } from '../constants';

const browserLanguage = navigator?.language?.split('-')[0] || DEFAULT_LANGUAGE_CODE;

const initialState: LanguageState = {
  language: browserLanguage as Language,
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
