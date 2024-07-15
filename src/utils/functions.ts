import { fieldType, NodeIdx } from "@/types/fieldTypes";

export const getIndexOfLowestCell = (field: fieldType, cellIdx: NodeIdx) => {
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
