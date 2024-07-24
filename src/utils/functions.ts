import { fieldType, NodeIdxType } from '@/types/fieldTypes';
import { v4 as uuidv4 } from 'uuid';

export const getIndexOfLowestCell = (
  field: fieldType,
  cellIdx: NodeIdxType
) => {
  const colIdx = cellIdx[1];
  let lowestCell = 5;
  for (let i = 5; i >= 0; i--) {
    if (field[i][colIdx].value === 0) {
      return [lowestCell, colIdx];
    }
    lowestCell--;
  }
  return -1;
};
export const getNewColor = (color: 'blue' | 'red') => {
  return color === 'blue' ? 'red' : 'blue';
};

export const checkHorizontalLine = (
  field: fieldType,
  lastNodeIdx: NodeIdxType,
  currentColor: 'blue' | 'red'
) => {
  const lastNodeColor = getNewColor(currentColor);
  let cirlceSubsequence = 0;
  const rowId = lastNodeIdx[0];
  for (let i = 0; i < 7; i++) {
    if (field[rowId][i].color === lastNodeColor) {
      cirlceSubsequence++;
    } else {
      if (cirlceSubsequence >= 4) {
        return true;
      }
      cirlceSubsequence = 0;
    }
  }
  return false;
};
export const checkVerticalLine = (
  field: fieldType,
  lastNodeIdx: NodeIdxType,
  currentColor: 'blue' | 'red'
) => {
  const lastNodeColor = getNewColor(currentColor);
  let cirlceSubsequence = 0;
  const columnId = lastNodeIdx[1];
  for (let i = 5; i >= 0; i--) {
    if (field[i][columnId].color === lastNodeColor) {
      cirlceSubsequence++;
    } else {
      if (cirlceSubsequence >= 4) {
        return true;
      }
      cirlceSubsequence = 0;
    }
  }
  return false;
};
export const checkDiagonal = (
  field: fieldType,
  lastNodeIdx: NodeIdxType,
  currentColor: 'blue' | 'red'
) => {
  const newColor = getNewColor(currentColor);
  return (
    checkMainDiagonal(newColor, lastNodeIdx, field) ||
    checkSecondaryDiagonal(newColor, lastNodeIdx, field)
  );
};

const checkMainDiagonal = (
  color: 'blue' | 'red',
  lastNodeIdx: NodeIdxType,
  field: fieldType
) => {
  let cirlceSubsequence = 0;
  const summOfDiagonal = lastNodeIdx[0] + lastNodeIdx[1];
  for (let i = 5; i >= 0; i--) {
    for (let j = 6; j >= 0; j--) {
      if (i + j === summOfDiagonal) {
        if (field[i][j].color === color) {
          cirlceSubsequence++;
        } else {
          if (cirlceSubsequence >= 4) {
            return true;
          }
          cirlceSubsequence = 0;
        }
      }
    }
  }
  return false;
};

const checkSecondaryDiagonal = (
  color: 'blue' | 'red',
  lastNodeIdx: NodeIdxType,
  field: fieldType
) => {
  let cirlceSubsequence = 0;
  const diffOfDiagonal = lastNodeIdx[0] + lastNodeIdx[1];
  for (let i = 5; i >= 0; i--) {
    for (let j = 6; j >= 0; j--) {
      if (i - j === diffOfDiagonal) {
        if (field[i][j].color === color) {
          cirlceSubsequence++;
        } else {
          if (cirlceSubsequence >= 4) {
            return true;
          }
          cirlceSubsequence = 0;
        }
      }
    }
  }
  return false;
};

export const generateUrlWithId = () => {
  const id = uuidv4();
  console.log(id);
  return id;
};
