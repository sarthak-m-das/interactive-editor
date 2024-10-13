import React, { useState } from "react";
import { MultipleChoiceBlock } from "../../types/block";
import './Blocks.scss';

const MultipleChoice: React.FC<MultipleChoiceBlock> = (block) => {
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedChoice(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedChoice === block.content.correctAnswerId) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div
      key={block.id}
      className={`multiple-choice-block ${isCorrect === true ? 'correct' : isCorrect === false ? 'incorrect' : ''}`}
    >
      <p>{block.content.question}</p>
      <ul>
        {block.content.choices.map((choice: any) => (
          <li key={choice.id}>
            <label>
              <input
                type="checkbox"
                value={choice.id}
                checked={selectedChoice === choice.id}
                onChange={handleChange}
              />
              {choice.text}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default MultipleChoice;
