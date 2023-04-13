import store, { RootState } from '../../store';
import { setView } from '../viewReducer';
import { setLanguage } from '../languageReducer';
import { VIEW_TYPE_TILE } from '../../constants';
import { Language } from '../../types';

describe('store', () => {
  it('should handle actions from multiple reducers', () => {
    store.dispatch(setView(VIEW_TYPE_TILE));
    store.dispatch(setLanguage(Language.PL));

    const state: RootState = store.getState();

    expect(state.view.view).toEqual(VIEW_TYPE_TILE);
    expect(state.language.language).toEqual('pl');
  });
});
