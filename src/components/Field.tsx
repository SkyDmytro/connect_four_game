"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Node } from "./Node";
import { RootState } from "@/redux/store";

interface FieldProps {}

const Field = () => {
  const field = useSelector((state: RootState) => state.field.field);

  return (
    <div className="field size-3/4 h-100">
      {field.map((row, rowIdx) => (
        <div className="row flex w-full h-1/6" key={rowIdx}>
          {row.map((col, colIdx) => (
            <Node node={col} key={`${rowIdx}${colIdx}`} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Field;
