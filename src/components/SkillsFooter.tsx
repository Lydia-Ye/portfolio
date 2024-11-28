import React from "react";
import { Badge } from "./ui/badge";

interface MyComponentProps {
  items: Array<{ name: string }>;
}

const SkillsFooter: React.FC<MyComponentProps> = ({ items }) => {
  return (
    <div className="flex overflow-x-auto space-x-4 p-4">
      {items &&
        items.map((val, indx) => {
          return (
            <div className="shrink-0" key={indx}>
              <Badge variant="pink">{val?.name}</Badge>
            </div>
          );
        })}
    </div>
  );
};

export default SkillsFooter;
