import React, {createContext, useReducer} from "react";
import todoReducer from '../reducers/todo.reducer';

const defaultTodos = [
  {id: 1, task: "Walk dog", completed: false},
  {id: 2, task: "Shower", completed: true},
  {id: 3, task: "Eat breakfast", completed: false}
];

export const TodosContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);

  return (
    <TodosContext.Provider value={{todos, dispatch}} >
      {props.children}
    </TodosContext.Provider>
  )
}