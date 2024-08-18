'use client';
import React, { useState, useEffect } from 'react';

export const CurrentTurn = ({
  color: colorProps
}: {
  color: 'blue' | 'red';
}) => {
  const [color, setColor] = useState(colorProps);

  useEffect(() => {
    setColor(colorProps);
  }, [colorProps]);

  const classNames =
    color === 'blue'
      ? `bg-blue-700  size-24 rounded-full`
      : `bg-red-700  size-24 rounded-full`;
  console.log(color);
  return (
    <div className="size-28">
      <span>Current Turn: </span>
      <div className={classNames}></div>
    </div>
  );
};
