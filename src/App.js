import React, { useState } from 'react';
import WorryInput from './WorryInput';
import WorryList from './WorryList';
import Visualization from './Visualization';
import { Container, Typography, Button } from '@material-ui/core';

function App() {
  const [worries, setWorries] = useState([]);

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
    </Container>
  );
}

export default App;