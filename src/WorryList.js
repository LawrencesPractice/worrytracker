import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

function WorryList({ worries }) {
  return (
    <List>
      {worries.map((worry, index) => (
        <ListItem key={index}>
          <ListItemText primary={worry.worry} secondary={`Rating: ${worry.rating}`} />
        </ListItem>
      ))}
    </List>
  );
}

export default WorryList;