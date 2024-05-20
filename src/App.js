import React from 'react';
import Supervisor from './components/Supervisor';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    h4: {
      marginBottom: '1rem',
    },
  },
  
});

const mockAdvisors = [
  { id: 1, name: 'Asesor 1', assignedClients: 50, workedClients: 20, disbursements: 80 },
  { id: 2, name: 'Asesor 2', assignedClients: 40, workedClients: 25, disbursements: 8 },
  { id: 3, name: 'Asesor 3', assignedClients: 60, workedClients: 45, disbursements: 20 },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Supervisor advisors={mockAdvisors} />
    </ThemeProvider>
  );
}

export default App;
