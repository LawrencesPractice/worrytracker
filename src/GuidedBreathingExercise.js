import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import './GuidedBreathingExercise.css';

const phrases = [
  "Take a big breath through your mouth",
  "Slowly, slowly",
  "Continue to breathe normally",
  "Close your eyes",
  "Are you still looking at your screen?",
  "It's okay - slowly bring yourself back to breathing"
];

function GuidedBreathingExercise() {
  const [breathingState, setBreathingState] = useState('inhale');
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prevPhrase) => (prevPhrase + 1) % phrases.length);
    }, 4000); // Change the duration based on your preference

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setBreathingState((prevState) => (prevState === 'inhale' ? 'exhale' : 'inhale'));
  }, [currentPhrase]);

  return (
    <div className="guided-breathing-exercise">
      <div className={`breathing-circle ${breathingState}`} />
      <Typography variant="h6" align="center" gutterBottom>
        {breathingState === 'inhale' ? 'Exhale' : 'Inhale'}
      </Typography>
      <Typography variant="h5" align="center" gutterBottom>
        {phrases[currentPhrase]}
      </Typography>
    </div>
  );
}

export default GuidedBreathingExercise;