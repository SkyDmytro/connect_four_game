import { fieldType, NodeIdxType } from '@/types/fieldTypes';

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
  console.log(lastNodeIdx, 'dsadas', lastNodeColor);
  let cirlceSubsequence = 0;
  const rowId = lastNodeIdx[0];
  for (let i = 0; i < 7; i++) {
    console.log(cirlceSubsequence);
    console.log(field[rowId][i].color);
    if (field[rowId][i].color === lastNodeColor) {
      cirlceSubsequence++;
    } else {
      if (cirlceSubsequence >= 5) {
        return true;
      }
      cirlceSubsequence = 0;
    }
  }
  return false;
};
export const checkVerticalLine = () => {
  
};
export const checkDiagonal = () => {};
