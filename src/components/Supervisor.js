import React from 'react';
import Nombre from './Nombre';
import { Container, Typography } from '@mui/material';

const Supervisor = ({ advisors }) => {
  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 4 }}>Vista del Supervisor</Typography>
      {advisors.map(advisor => (
        <Nombre key={advisor.id} advisor={advisor} />
      ))}
    </Container>
  );
};

export default Supervisor;
