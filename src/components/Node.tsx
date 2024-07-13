import { nodeType } from "@/types/fieldTypes";
import classNames from "classnames";
import React from "react";

interface NodeProps {
  node: nodeType;
}

export const Node = ({ node }: NodeProps) => {
  const nodeClasses = classNames({
    node: true,
    "basis-full": true,
    // "h-50px": true,
    // "w-50px": true,
    flex: true,
    "bg-red": node.color === "red",
    "bg-blue": node.color === "blue",
    "bg-yellow-300": true,
    "rounded-full": true,
  });

  return <div className={nodeClasses}></div>;
};
