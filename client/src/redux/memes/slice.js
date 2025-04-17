import { createSlice } from '@reduxjs/toolkit';
import { fetchAllMemes } from './operations';

const initialState = {
  memes: [],
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: 'memes',
  initialState,
  reducers: {
    resetMemes: state => {
      state.memes = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllMemes.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllMemes.fulfilled, (state, { payload }) => {
        state.memes = payload;
        state.isLoading = false;
      })
      .addCase(fetchAllMemes.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
});

export const { resetMemes } = slice.actions;

export default slice.reducer;
