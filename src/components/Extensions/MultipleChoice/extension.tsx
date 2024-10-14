import { Node, mergeAttributes } from '@tiptap/core';
import { ReactNodeViewRenderer } from '@tiptap/react';
import MultipleChoiceComponent from '.';

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    multipleChoice: {
      setMultipleChoice: () => ReturnType;
    };
  }
}

const MultipleChoice = Node.create({
  name: 'multipleChoice',
  group: 'block',
  atom: true,

  addAttributes() {
    return {
      question: {
        default: 'New question',
        parseHTML: (element) => element.getAttribute('data-question'),
        renderHTML: (attributes) => {
          return { 'data-question': attributes.question };
        },
      },
      choices: {
        default: ['Option 1', 'Option 2'],
        parseHTML: (element) => JSON.parse(element.getAttribute('data-choices') || '[]'),
        renderHTML: (attributes) => {
          return { 'data-choices': JSON.stringify(attributes.choices) };
        },
      },
      correctAnswer: {
        default: null,
        parseHTML: (element) => {
          const val = element.getAttribute('data-correct-answer');
          return val !== null ? parseInt(val, 10) : null;
        },
        renderHTML: (attributes) => {
          return { 'data-correct-answer': attributes.correctAnswer };
        },
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'div[data-type="multiple-choice"]',
      },
    ];
  },

  renderHTML({ node, HTMLAttributes }) {
    return [
      'div',
      mergeAttributes(HTMLAttributes, { 'data-type': 'multiple-choice' }),
    ];
  },

  addNodeView() {
    return ReactNodeViewRenderer(MultipleChoiceComponent);
  },

  addCommands() {
    return {
      setMultipleChoice:
        () =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
          });
        },
    };
  },
});

export default MultipleChoice;
