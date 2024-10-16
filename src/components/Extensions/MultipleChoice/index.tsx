import React, { useEffect, useState } from 'react';
import { NodeViewWrapper } from '@tiptap/react';
import './MultipleChoice.scss';
import { useParams } from 'react-router-dom';
import { saveAnswer, getAnswer } from '../../../actions/answer';

interface MultipleChoiceProps {
  editor: any;
  node: any;
  updateAttributes: (attributes: Record<string, any>) => void;
}

const MultipleChoiceComponent: React.FC<MultipleChoiceProps> = (props) => {
  const { node, updateAttributes, editor } = props;
  const {id} = useParams<{id: string}>();

  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const isEditable = editor.isEditable;

  const { blockID, question, choices, correctAnswer } = node.attrs;

  useEffect(() => {
    const fetchAnswer = async () => {
      if (!!id && !!blockID) {
        const resp = await getAnswer(id, blockID);
        console.log(resp);
        if (resp) {
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
    if(!!id && !!blockID && selectedOption !== null)
      saveAnswer(id, blockID, selectedOption);
    setSubmitted(true);
  };

  const isCorrect = selectedOption === correctAnswer;

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
          {/* <p>Choices</p> */}
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
                    disabled={submitted}
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
          <div>
            {isCorrect ? (
              <p style={{ color: 'green', marginTop: '16px' }}>Correct!</p>
            ) : (
              <p style={{ color: 'red', marginTop: '16px' }}>
                Incorrect. Try again!
              </p>
            )}
          </div>
        )}
      </NodeViewWrapper>
    )}
    </>
  );
    
};

export default MultipleChoiceComponent;
