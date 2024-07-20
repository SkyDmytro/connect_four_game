'use client';
import { RootState } from '@/redux/store';
import { getNewColor } from '@/utils/functions';
import React from 'react';
import { useSelector } from 'react-redux';

export const WinnerDialogWindow = () => {
  const { currentColor, isWinner } = useSelector(
    (state: RootState) => state.field
  );
  console.log('isWinner:', isWinner);
  const color = getNewColor(currentColor);
  return isWinner && <div className="">{color} won</div>;
};
