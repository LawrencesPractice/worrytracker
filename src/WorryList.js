import React from 'react';
import { List, ListItem, ListItemText, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

function WorryList({ worries, deleteWorry }) {
  return (
    <List>
      {worries.map((worry, index) => (
        <ListItem key={index}>
          <ListItemText primary={worry.worry} secondary={`Rating: ${worry.rating}`} />
          <IconButton edge="end" aria-label="delete" onClick={() => deleteWorry(index)}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
}

export default WorryList;