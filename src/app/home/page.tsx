import Field from '@/components/Field';
import { MultiPlayerGame } from '@/components/MultiPlayerGame';
import { WinnerDialogWindow } from '@/components/WinnerDialogWindow';
import React from 'react';

const HomePage = () => {
  return (
    <div className="flex justify-center items-center size-full">
      <WinnerDialogWindow />
      <MultiPlayerGame />

      <Field />
    </div>
  );
};

export default HomePage;
