import React from "react";
import { MultipleChoiceBlock } from "../../types/block";

const MultipleChoice: React.FC<MultipleChoiceBlock> = (block) => {
  return (
    <div key={block.id} className="multiple-choice-block">
        <p>{block.content.question}</p>
        <ul>
        {block.content.choices.map((choice: any) => (
            <li key={choice.id}>{choice.text}</li>
        ))}
        </ul>
    </div>
  );
};

export default MultipleChoice;