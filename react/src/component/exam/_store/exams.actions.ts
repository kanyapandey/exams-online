import { Question } from "../../../models/question.model";
import { Option } from "../../../models/option.model";

export const POST_QUESTIONS = "POST_QUESTIONS";
export const ADD_QUESTION = "Add Question";
export const UPDATE_QUESTION = "Update Question";

export const ADD_OPTION = "Add options";
export const REMOVE_OPTION = "Remove Options";
export const UPDATE_OPTIONS = "Update Options";
export const UPDATE_QUESTION_TEXT = "Update Question Text";

export const actionName = (payload: any) => ({
  type: POST_QUESTIONS,
  payload,
});

export const addQuestion = (payload: Question<any>) => ({
  type: ADD_QUESTION,
  payload,
});

export const updateQuestion = (payload: {index: number, item: Question<any>}) => ({
  type: UPDATE_QUESTION,
  payload,
});


export const addoption = (payload: Option) => ({
  type: ADD_QUESTION,
  payload,
});

export const removeOption = (payload: Option) => ({
  type: ADD_QUESTION,
  payload,
});

export const updateOptions = (payload: Option[]) => {
  return { type: UPDATE_OPTIONS, payload };
};

export const updateQuestionText = (payload: string) => {
  return { type: UPDATE_QUESTION_TEXT, payload };
};

