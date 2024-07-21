'use client';
import { RootState } from '@/redux/store';
import { getNewColor } from '@/utils/functions';
import React from 'react';
import { useSelector } from 'react-redux';

export const WinnerDialogWindow = () => {
  const { currentColor, isWinner } = useSelector(
    (state: RootState) => state.field
  );
  const color = getNewColor(currentColor);
  return (
    isWinner && (
      <div className="absolute z-50 bg-black size-40 flex justify-center items-center flex-col gap-2">
        {color} won
        <button className="border border-neutral-700 rounded text underline decoration-sky-500">
          Restart
        </button>
      </div>
    )
  );
};
