import { USER_SELECTED } from "../actions/app.actions";

export interface AppState {
  name: string;
}

const initialState: AppState = {
  name: "exams online",
};

export default function AppReducer(
  state = initialState,
  action: any
): AppState {
  switch (action.type) {
    case USER_SELECTED:
      return {
        name: action.payload,
      };
    default:
      return state;
  }
}
