import React, { useEffect, useState } from 'react';
import { NodeViewWrapper } from '@tiptap/react';
import './MultipleChoice.scss';
import { useParams } from 'react-router-dom';
import saveAnswer from '../../../apis/answer/saveAnswer';
import getAnswer from '../../../apis/answer/getAnswer';

interface MultipleChoiceProps {
  editor: any;
  node: any;
  updateAttributes: (attributes: Record<string, any>) => void;
}

const MultipleChoiceComponent: React.FC<MultipleChoiceProps> = (props) => {
  const { node, updateAttributes, editor } = props;
  const {id} = useParams<{id: string}>();

  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [submitteOption, setSubmitteOption] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const isEditable = editor.isEditable;

  const { blockID, question, choices, correctAnswer } = node.attrs;

  useEffect(() => {
    const fetchAnswer = async () => {
      if (!!id && !!blockID) {
        const resp = await getAnswer(id, blockID);
        if (resp) {
          setSubmitteOption(resp.selectedOption);
          setSelectedOption(resp.selectedOption);
          setSubmitted(true);
        }
      }
    };
    fetchAnswer();
  }, [blockID, id]);


  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateAttributes({ question: e.target.value });
  };

  const handleChoiceChange = (index: number, value: string) => {
    const newChoices = [...choices];
    newChoices[index] = value;
    updateAttributes({ choices: newChoices });
  };

  const addChoice = () => {
    const newChoices = [...choices, ''];
    updateAttributes({ choices: newChoices });
  };

  const removeChoice = (index: number) => {
    const newChoices = choices.filter((_: string, i: number) => i !== index);
    updateAttributes({ choices: newChoices });

    if (correctAnswer === index) {
      updateAttributes({ correctAnswer: null });
    } else if (correctAnswer > index) {
      updateAttributes({ correctAnswer: correctAnswer - 1 });
    }
  };

  const handleCorrectAnswerChange = (index: number) => {
    updateAttributes({ correctAnswer: index });
  };

  const handleOptionSelect = (index: number) => {
    setSelectedOption(index);
  };

  const submitAnswer = () => {
    if(!!id && !!blockID && selectedOption !== null) {
      saveAnswer(id, blockID, selectedOption);
      setSubmitteOption(selectedOption);
      setSubmitted(true);
    }
  };

  const isCorrect = submitteOption === correctAnswer;

  return (
    <>
      {isEditable ? (
      <NodeViewWrapper className="multiple-choice-block">
        <div className="question-container">
          <p>Question Statement</p>
          <input
            type="text"
            value={question}
            onChange={handleQuestionChange}
          />
        </div>
        <div className="choices-container">
          <p>Choices</p>
          <ul>
            {choices.map((choice: string, index: number) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    name={`correct-answer-${node.attrs.id || ''}`}
                    checked={correctAnswer === index}
                    onChange={() => handleCorrectAnswerChange(index)}
                  />
                  <input
                    type="text"
                    value={choice}
                    onChange={(e) => handleChoiceChange(index, e.target.value)}
                  />
                </label>
                <button onClick={() => removeChoice(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <button className="add-choice-button" onClick={addChoice}>
            Add Choice
          </button>
        </div>
      </NodeViewWrapper>
    ) : (
      <NodeViewWrapper
        className={`multiple-choice-block ${
          submitted ? (isCorrect ? 'correct' : 'incorrect') : ''
        }`}
      >
        <div className="question-container">
          <p>{question}</p>
        </div>
        <div className="choices-container">
          <ul>
            {choices.map((choice: string, index: number) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    name={`multiple-choice-${node.attrs.id || ''}`}
                    value={index}
                    checked={selectedOption === index}
                    onChange={() => handleOptionSelect(index)}
                  />
                  <span>{choice}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
        {!submitted ? (
          <button
            className="submit-button"
            onClick={submitAnswer}
            disabled={selectedOption === null}
          >
            Submit Answer
          </button>
        ) : (
          <button
            className="submit-button"
            onClick={submitAnswer}
            disabled={selectedOption === null}
          >
            Update Answer
          </button>
        )}
      </NodeViewWrapper>
    )}
    </>
  );
    
};

export default MultipleChoiceComponent;
