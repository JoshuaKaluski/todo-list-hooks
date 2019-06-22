import React from "react";
import useToggle from './hooks/useToggle';
import EditTodoForm from './EditTodoForm';

import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

function Todo({id, task, completed, removeTodo, toggleTodo, editTodo}) {
  const [editing, toggle] = useToggle();

  const finishedStyle = completed ? {textDecoration: "line-through", color: "grey"} : {textDecoration: "none", color: "black"};

  return (
    <ListItem>
      {editing ? (
        <EditTodoForm id={id} task={task} editTodo={editTodo} toggleEditForm={toggle}/>
        ) : (
        <>
          <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)} />
          <ListItemText style={finishedStyle}>
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
              <DeleteIcon/>
            </IconButton>
            <IconButton aria-label="Edit" onClick={toggle}>
              <EditIcon/>
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  )
}

export default Todo;