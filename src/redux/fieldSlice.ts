import { fieldType } from "@/types/fieldTypes";
import { createSlice, configureStore } from "@reduxjs/toolkit";

type fieldStateType = {
  field: fieldType;
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
};

const fieldSlice = createSlice({
  name: "field",
  initialState: initializeFieldState,
  reducers: {
    initializeField: (state, payload) => {
      state.field = payload.payload;
    },
  },
});

export const { initializeField } = fieldSlice.actions;
export default fieldSlice.reducer;
