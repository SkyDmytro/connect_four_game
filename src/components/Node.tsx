import { NodeIdx as NodeIdxType, nodeType } from "@/types/fieldTypes";
import classNames from "classnames";
import React from "react";

interface NodeProps {
  node: nodeType;
  nodeIdx: NodeIdxType;
  onClick: (nodeIds: NodeIdxType) => void;
}

export const Node = ({ nodeIdx, node, onClick }: NodeProps) => {
  const handleClick = () => {
    onClick(nodeIdx);
  };

  const nodeClasses = classNames({
    "w-32": true, // width
    "h-32": true, // height
    flex: true,
    "items-center": true,
    "justify-center": true,
    "bg-gray-300": node.color === "none",
    "bg-red-600": node.color === "red",
    "bg-blue-700": node.color === "blue",
    "rounded-full": true,
    "m-0": true,
  });

  return <div className={nodeClasses} onClick={handleClick}></div>;
};
