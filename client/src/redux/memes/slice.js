import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchAllMemes, updateMeme } from './operations';

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
      .addCase(fetchAllMemes.fulfilled, (state, { payload }) => {
        state.memes = payload;
        state.isLoading = false;
      })
      .addCase(updateMeme.fulfilled, (state, { payload }) => {
        state.memes = state.memes.map(meme =>
          meme._id === payload._id ? { ...meme, ...payload } : meme
        );
        state.isLoading = false;
      })
      .addMatcher(isAnyOf(fetchAllMemes.pending, updateMeme.pending), state => {
        state.isLoading = true;
      })
      .addMatcher(
        isAnyOf(fetchAllMemes.rejected, updateMeme.rejected),
        (state, { payload }) => {
          state.error = payload;
          state.isLoading = false;
        }
      );
  },
});

export const { resetMemes } = slice.actions;

export default slice.reducer;
