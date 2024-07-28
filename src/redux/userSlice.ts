import { fieldType, NodeIdxType } from '@/types/fieldTypes';
import { getNewColor } from '@/utils/functions';
import { createSlice, configureStore } from '@reduxjs/toolkit';

export type userStateType = {
  userId: null | string;
  color: 'blue' | 'red' | 'none';
};

const initialUserState: userStateType = {
  userId: null,
  color: 'none'
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    initializeUser: (state, payload) => {
      console.log(payload);
      state.color = payload.payload.color;
      state.userId = payload.payload.userId;
    }
  }
});

export const { initializeUser } = userSlice.actions;
export default userSlice.reducer;
