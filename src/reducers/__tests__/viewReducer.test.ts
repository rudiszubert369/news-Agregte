import viewReducer, { setView } from '../viewReducer';
import { VIEW_TYPE_LIST, VIEW_TYPE_TILE } from '../../constants';

describe('viewReducer', () => {
  const initialState = {
    view: VIEW_TYPE_LIST,
  };

  it('should handle initial state', () => {
    expect(viewReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle setView', () => {
    const view = VIEW_TYPE_TILE;
    const expectedState = { view };
    expect(viewReducer(initialState, setView(view))).toEqual(expectedState);
  });
});