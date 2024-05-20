import React from 'react';
import { Card, CardContent, Typography, LinearProgress } from '@mui/material';

const Nombre = ({ advisor }) => {
  const { name, assignedClients, workedClients, disbursements } = advisor;
  const progress = (workedClients / assignedClients) * 100;

  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body1">Clientes asignados: {assignedClients}</Typography>
        <Typography variant="body1">Clientes trabajados: {workedClients}</Typography>
        <Typography variant="body1">Desembolsos: {disbursements}</Typography>
        <LinearProgress variant="determinate" value={progress} sx={{ mt: 2 }} />
      </CardContent>
    </Card>
  );
};

export default Nombre;
