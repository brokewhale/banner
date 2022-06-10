import { createSlice, SerializedError } from '@reduxjs/toolkit';
import { BannerMessage } from 'mockData/bannerMessage';
import { getBannerMessages } from './bannerMessage.actions';

interface BannerMessageState {
  items: BannerMessage[];
  error?: SerializedError['message'];
  isLoading: boolean;
}

const initialState: BannerMessageState = {
  items: [],
  isLoading: false,
};

/* Creating a slice of the redux store. */
const bannerMessageSlice = createSlice({
  name: 'bannerMessage',
  initialState,
  reducers: {
    /* A reducer. */
    closeSingleBanner: (state, action) => {
      const { id } = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBannerMessages.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getBannerMessages.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getBannerMessages.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export const { closeSingleBanner } = bannerMessageSlice.actions;

export const bannerMessageReducer = bannerMessageSlice.reducer;
