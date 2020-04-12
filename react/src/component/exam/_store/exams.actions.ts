import { Question } from "../../../models/question.model";
import { Option } from "../../../models/option.model";

export const POST_QUESTIONS = "POST_QUESTIONS";
export const ADD_QUESTION = "Add Question";
export const ADD_OPTION = "Add options";
export const REMOVE_OPTION = "Remove Options";
export const UPDATE_OPTIONS = "Update Options";

export const actionName = (payload: any) => ({
  type: POST_QUESTIONS,
  payload,
});

export const addQuestions = (payload: Question<any>) => ({
  type: ADD_QUESTION,
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
  console.log(payload, "$$$$ update");
  return { type: UPDATE_OPTIONS, payload };
};
