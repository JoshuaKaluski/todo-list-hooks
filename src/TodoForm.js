import React from 'react';
import useInputState from './hooks/useInputState';

import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

function TodoForm({addTodo}) {
  const [value, handleChange, reset] = useInputState("");

  const submitForm = e => {
    e.preventDefault();
    addTodo(value);
    reset();
  };

  return (
    <Paper>
      <form onSubmit={submitForm}>
        <TextField value={value} onChange={handleChange}/>
      </form>

    </Paper>
  )
}

export default TodoForm;