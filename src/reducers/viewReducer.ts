import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { VIEW_TYPE_LIST } from '../constants';
import { ViewType } from '../types';

export interface ViewState {
  view: string;
}

const initialState: ViewState = {
  view: VIEW_TYPE_LIST,
};

const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    setView: (state, action: PayloadAction<ViewType>) => {
      state.view = action.payload;
    },
  },
});

export const { setView } = viewSlice.actions;
export default viewSlice.reducer;