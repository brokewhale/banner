import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchUser } from 'mockData/user';

import { logger } from 'utils';

export const getUser = createAsyncThunk(
  'user/get', 
  async () => {
    try {
      return await fetchUser();
    } catch (err) {
      logger.error({err}, 'getUser');
      throw err;
    }
  }
);
