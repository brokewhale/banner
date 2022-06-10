import { createSlice, SerializedError } from '@reduxjs/toolkit'
import { User } from 'mockData/user'
import { getUser } from './user.actions'

interface UserState extends User {
  error?: SerializedError['message'];
  isLoading: boolean;
}

const initialState: UserState = {
  id: 0,
  name: '',
  isLoading: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(getUser.fulfilled, (state, action) => {
      return Object.assign(state, {
        ...action.payload,
        isLoading: false
      })
    })
    builder.addCase(getUser.rejected, (state, action) => {
      state.error = action.error.message;
    })
  }
})

export const userReducer = userSlice.reducer;
