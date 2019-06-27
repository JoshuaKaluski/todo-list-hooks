import React, {useContext} from 'react';
import Todo from './Todo';

import {TodosContext} from "./contexts/todos.context";

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';


function TodoList() {
  const todos = useContext(TodosContext);

  if (todos.length) {
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <React.Fragment key={i}>
              <Todo
                key={todo.id}
                {...todo}
              />
              {i < todos.length - 1 && <Divider/>}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    );
  } else {
    return null;
  }
}

export default TodoList;