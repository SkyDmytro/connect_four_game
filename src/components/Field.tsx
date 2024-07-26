'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Node } from './Node';
import { RootState, useAppDispatch } from '@/redux/store';
import { NodeIdxType } from '@/types/fieldTypes';
import { updateCell } from '@/redux/fieldSlice';
import { useField } from '@/hooks/useField';
import { getNewColor } from '@/utils/functions';

interface FieldProps {}

const Field = ({ server }: { server: any }) => {
  const { field } = useSelector((state: RootState) => state.field);
  const { updateField, doesSomeoneWin } = useField();
  var ws = server.current;

  const handleNodeClick = (nodeIdx: NodeIdxType) => {
    handleSend(JSON.stringify(nodeIdx));
    updateField(nodeIdx);
  };

  const handleSend = (messageText: string) => {
    console.log(messageText);
    ws.send(messageText);
  };

  useEffect(() => {
    ws.onopen = () => {
      console.log('opend');
    };
    ws.onerror = (e: any) => {
      console.error(e);
    };
    ws.onmessage = (e: any) => {
      console.log(e.data);
    };
    // return () => {
    //   ws.close();
    // };
  }, [ws]);

  useEffect(() => {
    doesSomeoneWin();
  }, [doesSomeoneWin, field]);

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
    </>
  );
};

export default Field;
