'use client';

import { generateUrlWithId } from '@/utils/functions';
import React from 'react';

export const MultiPlayerGame = () => {
  const handleCreateRoom = () => {
    console.log(generateUrlWithId());
  };

  return (
    <div className="z-100 absolute bg-white size-48 border text-black ">
      <span>MultiPlayerGame</span>
      <button className="bg-teal-300 p-2" onClick={handleCreateRoom}>
        Create room
      </button>
    </div>
  );
};
