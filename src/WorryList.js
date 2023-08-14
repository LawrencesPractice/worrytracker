import React, { useState } from 'react';
import { List, ListItem, ListItemText, IconButton, Typography, TextField } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

function WorryList({ worries, deleteWorry }) {
  const [solutions, setSolutions] = useState(Array(worries.length).fill(''));

  const handleSolutionChange = (index, solution) => {
    const newSolutions = [...solutions];
    newSolutions[index] = solution;
    setSolutions(newSolutions);
  };

  return (
    <List>
      {worries.map((worry, index) => (
        <ListItem key={index}>
          <ListItemText primary={worry.worry} secondary={`Anxiety rating: ${worry.rating}`} />
          <div>
            <Typography variant="body2" color="textSecondary">
               {worry.solution}
            </Typography>
            <TextField
              variant="outlined"
              label="Enter your own solution"
              value={solutions[index]}
              onChange={(e) => handleSolutionChange(index, e.target.value)}
            />
          </div>
          <IconButton edge="end" aria-label="delete" onClick={() => deleteWorry(index)}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
}

export default WorryList;