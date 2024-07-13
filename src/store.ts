import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import fieldReducer from "./redux/fieldSlice";

const store = configureStore({
  reducer: {
    field: fieldReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
