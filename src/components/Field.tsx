'use client';

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Node } from './Node';
import { RootState, useAppDispatch } from '@/redux/store';
import { NodeIdxType } from '@/types/fieldTypes';
import { updateCell } from '@/redux/fieldSlice';
import { useField } from '@/hooks/useField';
import { getNewColor } from '@/utils/functions';

interface FieldProps {}

const Field = () => {
  const { field, currentColor } = useSelector(
    (state: RootState) => state.field
  );
  const { updateField, doesSomeoneWin } = useField();
  const [win, setWin] = useState(false);

  const handleNodeClick = (nodeIdx: NodeIdxType) => {
    updateField(nodeIdx);
  };

  useEffect(() => {
    if (doesSomeoneWin()) {
      setWin(true);
    }
  }, [doesSomeoneWin, field]);

  console.log(win);
  return (
    <>
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
      {win && <div className="win-block">{getNewColor(currentColor)} won</div>}
    </>
  );
};

export default Field;
