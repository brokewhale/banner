import { createSlice, SerializedError } from '@reduxjs/toolkit'
import { InterviewSummary } from 'mockData/interviewSummary';
import { getInterviewSummaries } from './interviewSummary.actions';

interface InterviewSummaryState {
  items: InterviewSummary[];
  error?: SerializedError['message'];
  isLoading: boolean;
}

const initialState: InterviewSummaryState = {
  items: [],
  isLoading: false,
};

const interviewSummarySlice = createSlice({
  name: 'interviewSummary',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getInterviewSummaries.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(getInterviewSummaries.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    })
    builder.addCase(getInterviewSummaries.rejected, (state, action) => {
      state.error = action.error.message;
    })
  }
})

export const interviewSummaryReducer =  interviewSummarySlice.reducer;
