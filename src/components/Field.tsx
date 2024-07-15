"use client";

import React from "react";
import { useSelector } from "react-redux";
import { Node } from "./Node";
import { RootState, useAppDispatch } from "@/redux/store";
import { NodeIdx } from "@/types/fieldTypes";
import { updateCell } from "@/redux/fieldSlice";
import { useField } from "@/hooks/useField";

interface FieldProps {}

const Field = () => {
  const field = useSelector((state: RootState) => state.field.field);
  const dispatch = useAppDispatch();
  const { updateField } = useField();

  const handleNodeClick = (nodeIdx: NodeIdx) => {
    updateField(nodeIdx);
    // dispatch(updateCell(nodeIdx));
  };

  return (
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
  );
};

export default Field;
