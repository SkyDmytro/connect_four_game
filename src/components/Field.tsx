import { fieldType } from "@/types/filedTypes";
import React from "react";
import { Node } from "./Node";

interface FieldProps {
  field: fieldType;
}

export const Field = ({ field }: FieldProps) => {
  return (
    <div className="field size-3/4">
      {field.map((row, rowIdx) => {
        return (
          <div className="row flex w-full h-1/6" key={rowIdx}>
            {row.map((col, colIdx) => {
              return <Node node={col} key={`${rowIdx}${colIdx}`} />;
            })}
          </div>
        );
      })}
    </div>
  );
};
