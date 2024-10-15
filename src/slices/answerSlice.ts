import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Answer } from '../types/answer';
interface AnswerState {
  answersBlockMap: Record<string, Answer>;
}

// Initial state
const initialState: AnswerState = {
  answersBlockMap: {},
};

export const answerSlice = createSlice({
  name: 'answer',
  initialState,
  reducers: {
    setAnswer: (state, action: PayloadAction<{ blockId: string, answer: Answer }>) => {
      state.answersBlockMap[action.payload.answer.id] = action.payload.answer;
    },
  },
});

export const { setAnswer } = answerSlice.actions;
export const selectAnswersBlockMap = (state: { answer: AnswerState }) => state.answer.answersBlockMap;