import Field from '@/components/Field';
import { WinnerDialogWindow } from '@/components/WinnerDialogWindow';
import React from 'react';

const HomePage = () => {
  return (
    <div className="flex justify-center items-center size-full">
      <WinnerDialogWindow />
      <Field />
    </div>
  );
};

export default HomePage;
