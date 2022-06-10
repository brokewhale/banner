import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchBannerMessages } from 'mockData/bannerMessage';
import { logger } from 'utils';

/* Creating a thunk that will be used to fetch the banner messages. */
export const getBannerMessages = createAsyncThunk(
  'bannerMessages/get',
  async () => {
    try {
      return await fetchBannerMessages();
    } catch (err) {
      logger.error({ err }, 'getBannerMessages');
      throw err;
    }
  }
);
