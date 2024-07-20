import { fieldType, NodeIdxType } from '@/types/fieldTypes';
import { getNewColor } from '@/utils/functions';
import { createSlice, configureStore } from '@reduxjs/toolkit';

type fieldStateType = {
  field: fieldType;
  currentColor: 'blue' | 'red';
  lastChangedNode: null | NodeIdxType;
  isWinner: boolean;
};

const initializeFieldState: fieldStateType = {
  field: [
    [
      { color: 'none', value: 0 },
      { color: 'none', value: 0 },
      { color: 'none', value: 0 },
      { color: 'none', value: 0 },
      { color: 'none', value: 0 },
      { color: 'none', value: 0 },
      { color: 'none', value: 0 }
    ],
    [
      { color: 'none', value: 0 },
      { color: 'none', value: 0 },
      { color: 'none', value: 0 },
      { color: 'none', value: 0 },
      { color: 'none', value: 0 },
      { color: 'none', value: 0 },
      { color: 'none', value: 0 }
    ],
    [
      { color: 'none', value: 0 },
      { color: 'none', value: 0 },
      { color: 'none', value: 0 },
      { color: 'none', value: 0 },
      { color: 'none', value: 0 },
      { color: 'none', value: 0 },
      { color: 'none', value: 0 }
    ],
    [
      { color: 'none', value: 0 },
      { color: 'none', value: 0 },
      { color: 'none', value: 0 },
      { color: 'none', value: 0 },
      { color: 'none', value: 0 },
      { color: 'none', value: 0 },
      { color: 'none', value: 0 }
    ],
    [
      { color: 'none', value: 0 },
      { color: 'none', value: 0 },
      { color: 'none', value: 0 },
      { color: 'none', value: 0 },
      { color: 'none', value: 0 },
      { color: 'none', value: 0 },
      { color: 'none', value: 0 }
    ],
    [
      { color: 'none', value: 0 },
      { color: 'none', value: 0 },
      { color: 'none', value: 0 },
      { color: 'none', value: 0 },
      { color: 'none', value: 0 },
      { color: 'none', value: 0 },
      { color: 'none', value: 0 }
    ]
  ],
  currentColor: 'blue',
  lastChangedNode: null,
  isWinner: false
};

const fieldSlice = createSlice({
  name: 'field',
  initialState: initializeFieldState,
  reducers: {
    initializeField: (state, payload) => {
      state.field = payload.payload;
    },
    updateCell: (state, payload) => {
      state.field[payload.payload[0]][payload.payload[1]] = {
        value: 1,
        color: state.currentColor
      };
      state.currentColor = getNewColor(state.currentColor);
      state.lastChangedNode = payload.payload;
    },
    updateWinState: (state, payload) => {
      state.isWinner = payload.payload;
    }
  }
});

export const { initializeField, updateCell, updateWinState } =
  fieldSlice.actions;
export default fieldSlice.reducer;
