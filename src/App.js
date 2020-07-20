import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Navigation from './Navigation';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';

export default function App() {

const container ={
  height: '125vh',
  backgroundSize: 'cover',
  fontFamily: 'sans-serif',
  marginTop: '80px',
  padding: '30px'
  
}

  return (
   <div style={container}>
     <Navigation></Navigation>
     <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
      <TableContainer component={Paper}>
      </TableContainer>
      </Container>
    </React.Fragment>
   </div>
  );
}

