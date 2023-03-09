import axios from "axios";
import { TODO_FAILED, TODO_LOAD, TODO_SUCCESS } from "./Actions";

export const getAllTodo = () => async (dispatch, getState) => {
  dispatch({
    type: TODO_LOAD,
  });

  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    dispatch({
      type: TODO_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: TODO_FAILED,
      payload: error.message,
    });
  }
};
