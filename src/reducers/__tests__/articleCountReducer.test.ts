import articleCountReducer, { setArticleCount } from '../articleCountReducer';

describe('articleCountSlice', () => {
  it('should return the initial state', () => {
    const initialState = { count: 0 };
    expect(articleCountReducer(undefined,{ type: 'UNKNOWN_ACTION' })).toEqual(initialState);
  });

  it('should set the article count correctly', () => {
    const initialState = { count: 0 };
    const newCount = 5;
    const action = { type: setArticleCount.type, payload: { count: newCount } };
    const expectedState = { count: newCount };
    expect(articleCountReducer(initialState, action)).toEqual(expectedState);
  });
});
