import { fieldType, NodeIdx } from "@/types/fieldTypes";
import { createSlice, configureStore } from "@reduxjs/toolkit";

type fieldStateType = {
  field: fieldType;
  currentColor: "blue" | "red";
};

const initializeFieldState: fieldStateType = {
  field: [
    [
      { color: "none", value: 0 },
      { color: "none", value: 0 },
      { color: "none", value: 0 },
      { color: "none", value: 0 },
      { color: "none", value: 0 },
      { color: "none", value: 0 },
      { color: "none", value: 0 },
    ],
    [
      { color: "none", value: 0 },
      { color: "none", value: 0 },
      { color: "none", value: 0 },
      { color: "none", value: 0 },
      { color: "none", value: 0 },
      { color: "none", value: 0 },
      { color: "none", value: 0 },
    ],
    [
      { color: "none", value: 0 },
      { color: "none", value: 0 },
      { color: "none", value: 0 },
      { color: "none", value: 0 },
      { color: "none", value: 0 },
      { color: "none", value: 0 },
      { color: "none", value: 0 },
    ],
    [
      { color: "none", value: 0 },
      { color: "none", value: 0 },
      { color: "none", value: 0 },
      { color: "none", value: 0 },
      { color: "none", value: 0 },
      { color: "none", value: 0 },
      { color: "none", value: 0 },
    ],
    [
      { color: "none", value: 0 },
      { color: "none", value: 0 },
      { color: "none", value: 0 },
      { color: "none", value: 0 },
      { color: "none", value: 0 },
      { color: "none", value: 0 },
      { color: "none", value: 0 },
    ],
    [
      { color: "none", value: 0 },
      { color: "none", value: 0 },
      { color: "none", value: 0 },
      { color: "none", value: 0 },
      { color: "none", value: 0 },
      { color: "none", value: 0 },
      { color: "none", value: 0 },
    ],
  ],
  currentColor: "blue",
};

const getNewColor = (color: "blue" | "red") => {
  return color === "blue" ? "red" : "blue";
};

const fieldSlice = createSlice({
  name: "field",
  initialState: initializeFieldState,
  reducers: {
    initializeField: (state, payload) => {
      state.field = payload.payload;
    },
    updateCell: (state, payload) => {
      state.field[payload.payload[0]][payload.payload[1]] = {
        value: 1,
        color: state.currentColor,
      };
      state.currentColor = getNewColor(state.currentColor);
    },
  },
});

export const { initializeField, updateCell } = fieldSlice.actions;
export default fieldSlice.reducer;
