import React from 'react';
import { LinearProgress } from '@mui/material';

const Barra = ({ value }) => {
  return (
    <LinearProgress variant="determinate" value={value} />
  );
};

export default Barra;
