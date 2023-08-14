import React, { useState } from 'react';
import { TextField, Button, Slider } from '@material-ui/core';

function WorryInput({ addWorry }) {
  const [worry, setWorry] = useState('');
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    addWorry({ worry, rating });
    setWorry('');
    setRating(5);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        value={worry}
        onChange={(e) => setWorry(e.target.value)}
        label="What worries you?"
        fullWidth
      />
      <Slider
        value={rating}
        onChange={(e, newRating) => setRating(newRating)}
        min={1}
        max={10}
        step={1}
        marks
      />
      <Button type="submit" variant="contained" color="primary">
        Add Worry
      </Button>
    </form>
  );
}

export default WorryInput;