import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import TodoReducer from "./TodoReducer";

const store = createStore(
  TodoReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
