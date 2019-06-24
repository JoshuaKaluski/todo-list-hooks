import React, {useContext} from 'react';
import useInputState from './hooks/useInputState';

import {TodosContext} from "./contexts/todos.context";

import TextField from "@material-ui/core/TextField";

function EditTodoForm({id, task, toggleEditForm}) {
  const {editTodo} = useContext(TodosContext);

  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={e => {
      e.preventDefault();
      editTodo(id, value);
      reset();
      toggleEditForm();
      }}
      style={{marginLeft: "1rem", width: "50%"}}
    >
      <TextField
        fullWidth
        margin="normal"
        value={value}
        onChange={handleChange}
        autoFocus
      />
    </form>
  )
}

export default EditTodoForm;