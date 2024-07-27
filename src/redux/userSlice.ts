import { fieldType, NodeIdxType } from '@/types/fieldTypes';
import { getNewColor } from '@/utils/functions';
import { createSlice, configureStore } from '@reduxjs/toolkit';

type userStateType = {
  userId: null | string;
  color: 'blue' | 'red' | 'none';
};

const initialUserState: userStateType = {
  userId: '1',
  color: 'none'
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {}
});

export const {} = userSlice.actions;
export default userSlice.reducer;
