import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://memeboard-app.onrender.com';

export const fetchAllMemes = createAsyncThunk(
  'memes/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get('/memes');
      return res.data.data;
    } catch (err) {
      const message =
        err.response?.data?.message || err.message || 'Something went wrong.';
      return rejectWithValue(message);
    }
  }
);
