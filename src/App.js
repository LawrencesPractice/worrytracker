import React, { useState } from 'react';
import WorryInput from './WorryInput';
import WorryList from './WorryList';
import Visualization from './Visualization';
import { Container, Typography } from '@material-ui/core';

function App() {
  const [worries, setWorries] = useState([]);

  const addWorry = (worry) => {
    setWorries([...worries, worry]);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h2" align="center" gutterBottom>
        Worry Tracker
      </Typography>
      <WorryInput addWorry={addWorry} />
      <WorryList worries={worries} />
      <Visualization worries={worries} />
    </Container>
  );
}

export default App;