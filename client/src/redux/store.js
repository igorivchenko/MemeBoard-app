import { configureStore } from '@reduxjs/toolkit';
import memeReducer from './memes/slice';

export const store = configureStore({
  reducer: {
    memes: memeReducer,
  },
});
