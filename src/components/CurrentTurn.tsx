import React from 'react'

export const CurrentTurn = ({color}:{color:"blue"|"red"}) => {
  const classNames = `bg-${color}-400 size-20`

  return (
  <div className={classNames}>Current turn: {color}</div>
  )
}

