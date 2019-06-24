import React, {createContext} from "react";
import useTodoState from '../hooks/useTodoState';

const defaultTodos = [
  {id: 1, task: "Walk dog", completed: false},
  {id: 2, task: "Shower", completed: true},
  {id: 3, task: "Eat breakfast", completed: false}
];

export const TodosContext = createContext();

export function TodosProvider(props) {
  const todosStuff = useTodoState(defaultTodos);

  return (
    <TodosContext.Provider value={todosStuff} >
      {props.children}
    </TodosContext.Provider>
  )
}