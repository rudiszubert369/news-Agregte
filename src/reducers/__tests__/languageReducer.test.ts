import languageReducer, { setLanguage } from '../languageReducer';
import { Language } from '../../types';

describe('languageReducer', () => {
  const initialState = {
    language: Language.EN,
  };

  it('should handle initial state', () => {
    expect(languageReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle setLanguage', () => {
    const language = 'pl';
    const expectedState = { language };
    expect(languageReducer(initialState, setLanguage(Language.PL))).toEqual(expectedState);
  });
});
