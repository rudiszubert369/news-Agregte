import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ArticleCountState {
  count: number;
}

interface ArticleCountPayload {
  count: number;
}

const initialState: ArticleCountState = {
  count: 0
};

const articleCountSlice = createSlice({
  name: 'articleCount',
  initialState,
  reducers: {
    setArticleCount: (state, action: PayloadAction<ArticleCountPayload>) => {
      state.count = action.payload.count;
    },
  },
});

export const { setArticleCount } = articleCountSlice.actions;
export default articleCountSlice.reducer;
