import { updateCell } from "@/redux/fieldSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { fieldType, NodeIdx, nodeType } from "@/types/fieldTypes";
import { getIndexOfLowestCell } from "@/utils/functions";
import React from "react";

export const useField = () => {
  const { field } = useAppSelector((state) => state.field);
  const dispatch = useAppDispatch();

  const updateField = (nodeIdx: NodeIdx): fieldType => {
    const newField = field;
    const cellIndex = getIndexOfLowestCell(field, nodeIdx);
    console.log(cellIndex);
    if (cellIndex !== -1) {
      dispatch(updateCell(cellIndex));
    }
    return newField;
  };

  const doesSomeoneWin = () => {};

  return { updateField };
};
