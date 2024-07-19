import { updateCell } from '@/redux/fieldSlice';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { fieldType, NodeIdxType, nodeType } from '@/types/fieldTypes';
import {
  checkDiagonal,
  checkHorizontalLine,
  checkVerticalLine,
  getIndexOfLowestCell
} from '@/utils/functions';
import React from 'react';

export const useField = () => {
  const { field, currentColor, lastChangedNode } = useAppSelector(
    (state) => state.field
  );
  const dispatch = useAppDispatch();

  const updateField = (nodeIdx: NodeIdxType): fieldType => {
    const newField = field;
    const cellIndex = getIndexOfLowestCell(field, nodeIdx);
    if (cellIndex !== -1) {
      dispatch(updateCell(cellIndex));
    }
    return newField;
  };

  const doesSomeoneWin = () => {
    if (lastChangedNode) {
      return (
        checkHorizontalLine(field, lastChangedNode, currentColor) ||
        checkVerticalLine(field, lastChangedNode, currentColor) ||
        checkDiagonal(field, lastChangedNode, currentColor)
      );
    }
    return false;
  };

  return { updateField, doesSomeoneWin };
};
