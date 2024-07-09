import { nodeType } from "@/types/filedTypes";
import React from "react";

export const useField = () => {
  const createField = () => {
    const field = [];
    const emptyNode: nodeType = { color: "none", value: 0 };
    for (let i = 0; i < 6; i++) {
      const row = [];
      for (let j = 0; j < 7; j++) {
        row.push(emptyNode);
      }
      field.push(row);
    }
    return field;
  };
  return { createField };
};
