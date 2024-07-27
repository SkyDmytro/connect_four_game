'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Node } from './Node';
import { RootState, useAppDispatch } from '@/redux/store';
import { NodeIdxType } from '@/types/fieldTypes';
import { updateCell } from '@/redux/fieldSlice';
import { useField } from '@/hooks/useField';
import { getNewColor } from '@/utils/functions';
import { TextMessage } from '@/types/apiTypes';

interface FieldProps {}

const Field = ({
  gameId,
  onSend
}: {
  gameId: string;
  onSend: (m: TextMessage) => void;
}) => {
  const { field } = useSelector((state: RootState) => state.field);
  const { userId } = useSelector((state: RootState) => state.user);
  const { updateField, doesSomeoneWin } = useField();
  // let ws = server.current;
  // console.log(ws);

  const handleNodeClick = (nodeIdx: NodeIdxType) => {
    if (userId) {
      onSend({
        channelId: gameId,
        text: nodeIdx,
        type: 'message',
        userId: userId
      });
    }
    updateField(nodeIdx);
  };

  // const handleSend = (messageText: TextMessage) => {
  //   console.log(messageText);
  //   ws.send(JSON.stringify(messageText));
  // };

  // useEffect(() => {
  //   ws.onopen = () => {
  //     console.log('opend');
  //   };
  //   ws.onerror = (e: any) => {
  //     console.error(e);
  //   };
  //   ws.onmessage = (e: any) => {
  //     // updateField(e.data);
  //     console.log('e.datda', e.data);
  //   };
  //   // return () => {
  //   //   ws.close();
  //   // };
  // }, [ws, server]);

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
