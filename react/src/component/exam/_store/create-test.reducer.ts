import { Question } from "../../../models/question.model";
import {
  ADD_QUESTION,
  ADD_OPTION,
  UPDATE_OPTIONS,
  UPDATE_QUESTION_TEXT,
  UPDATE_QUESTION,
} from "./exams.actions";
import { Helper } from "../../../helper/helper";

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
  questionInEdit: { id: 0, text: "", type: null, options: ["", ""] },
};

export default function createTestReducer(
  state = initialState,
  action: any
): CreateTest {
  switch (action.type) {
    case ADD_QUESTION:
      return { ...state, questions: [action.payload, ...state.questions] };
    case UPDATE_QUESTION:
      return { ...state, questions: Helper.updateObjectInArray( state.questions,action) };
    case ADD_OPTION:
      return {
        ...state,
        questionInEdit: {
          id: state.questionInEdit.id,
          text: state.questionInEdit.text,
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
          text: state.questionInEdit.text,
          id: state.questionInEdit.id,
        },
      };
    case UPDATE_QUESTION_TEXT:
      return {
        ...state,
        questionInEdit: {
          type: state.questionInEdit.type,
          text: action.payload,
          options: state.questionInEdit.options,
          id: state.questionInEdit.id,
        },
      };
    default:
      return state;
  }
}
