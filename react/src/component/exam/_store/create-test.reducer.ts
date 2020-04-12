import { Question } from "../../../models/question.model";
import { ADD_QUESTION, ADD_OPTION, UPDATE_OPTIONS } from "./exams.actions";

export interface CreateTest {
  questions: Question<any>[];
  testInfo: any;
  isEdit: boolean;
  questionInEdit: Question<any>;
}

const initialState: CreateTest = {
  questions: [],
  testInfo: {},
  isEdit: false,
  questionInEdit: { type: null, options: ["", ""] },
};

export default function createTestReducer(
  state = initialState,
  action: any
): CreateTest {
  switch (action.type) {
    case ADD_QUESTION:
      return { ...state, questions: [action.payload, ...state.questions] };
    case ADD_OPTION:
      return {
        ...state,
        questionInEdit: {
          type: state.questionInEdit.type,
          options: [action.payload, ...state.questionInEdit.options],
        },
      };
    case UPDATE_OPTIONS:
      return {
        ...state,
        questionInEdit: {
          type: state.questionInEdit.type,
          options: action.payload,
        },
      };
    default:
      return state;
  }
}
