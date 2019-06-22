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
    <Paper style={{margin: "1rem 0", padding: "0 1rem"}}>
      <form onSubmit={submitForm}>
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="Add New Todo"
          fullWidth
        />
      </form>

    </Paper>
  )
}

export default TodoForm;