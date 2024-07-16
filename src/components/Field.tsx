'use client';

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Node } from './Node';
import { RootState, useAppDispatch } from '@/redux/store';
import { NodeIdxType } from '@/types/fieldTypes';
import { updateCell } from '@/redux/fieldSlice';
import { useField } from '@/hooks/useField';

interface FieldProps {}

const Field = () => {
  const { field, lastChangedNode } = useSelector(
    (state: RootState) => state.field
  );
  const { updateField, doesSomeoneWin } = useField();

  const handleNodeClick = (nodeIdx: NodeIdxType) => {
    updateField(nodeIdx);
  };

  useEffect(() => {
    doesSomeoneWin();
  }, [doesSomeoneWin, field]);

  return (
    <div className="grid grid-cols-7 grid-rows-6  bg-white size-fit gap-3">
      {field.map((row, rowIdx) =>
        row.map((col, colIdx) => (
          <Node
            node={col}
            key={`${rowIdx}-${colIdx}`}
            nodeIdx={[rowIdx, colIdx]}
            onClick={handleNodeClick}
          />
        ))
      )}
    </div>
  );
};

export default Field;
