import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodo } from "./Redux/ActionsCreator";

const Todos = () => {
  const todo = useSelector((state) => state.todo);
  console.log(todo);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTodo());
  }, [dispatch]);
  return (
    <div>
      <p>Hi I am ToDoS ! </p>
      <p>How are you </p>
      <p>I hope your very well</p>
      <p>so, can you help me ?</p>
      <p>yes, of Course why not ? plz tell me about your problem</p>
      <p>apart from this, tell me about your self</p>
      <p>don't worry, your personal data I will safe</p>
      <hr />

      {todo.map((todo) => (
        <h5 key={todo.id}>{`${todo.id}) ${todo.title}`}</h5>
      ))}
    </div>
  );
};

export default Todos;
