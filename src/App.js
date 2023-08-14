import React, { useState } from 'react';
import WorryInput from './WorryInput';
import WorryList from './WorryList';
import Visualization from './Visualization';
import GuidedBreathingExercise from './GuidedBreathingExercise';
import { Container, Typography, Button } from '@material-ui/core';

function App() {
  const [worries, setWorries] = useState([]);
  const [showGuidedBreathing, setShowGuidedBreathing] = useState(false);

  const addWorry = (worry) => {
    setWorries([...worries, worry]);
  };

  const deleteWorry = (index) => {
    setWorries((prevWorries) => {
      const updatedWorries = [...prevWorries];
      updatedWorries.splice(index, 1);
      return updatedWorries;
    });
  };

  const totalWorries = worries.length;

  const toggleGuidedBreathing = () => {
    setShowGuidedBreathing((prevState) => !prevState);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h2" align="center" gutterBottom>
        Worry Tracker
      </Typography>
      <WorryInput addWorry={addWorry} />
      <WorryList worries={worries} deleteWorry={deleteWorry} />
      <Visualization worries={worries} />
      <Typography variant="body1" align="center" gutterBottom>
        Total Worries: {totalWorries}
      </Typography>
      <Button variant="contained" color="primary" onClick={toggleGuidedBreathing}>
        {showGuidedBreathing ? 'Close Guided Breathing Exercise' : 'Open Guided Breathing Exercise'}
      </Button>
      {showGuidedBreathing && <GuidedBreathingExercise />}
    </Container>
  );
}

export default App;