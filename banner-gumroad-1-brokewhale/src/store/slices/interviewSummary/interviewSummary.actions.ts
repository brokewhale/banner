import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchInterviewSummaries  } from 'mockData/interviewSummary';
import { logger } from 'utils';

export const getInterviewSummaries = createAsyncThunk(
  'interviewSummary/get', 
  async () => {
    try {
      return await fetchInterviewSummaries();
    } catch (err) {
      logger.error({err}, 'getInterviewSummaries');
      throw err;
    }
  }
);
