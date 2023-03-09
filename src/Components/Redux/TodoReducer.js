import { TODO_FAILED, TODO_LOAD, TODO_SUCCESS } from "./Actions";

const initialState = {
  isLoading: false,
  todo: [],
  error: null,
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_LOAD:
      return {
        ...state,
        isLoading: true,
      };

    case TODO_SUCCESS:
      return {
        ...state,
        todo: action.payload,
        error: null,
      };

    case TODO_FAILED:
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};

export default TodoReducer;
