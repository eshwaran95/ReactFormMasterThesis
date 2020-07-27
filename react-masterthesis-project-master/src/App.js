import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Navigation from './Navigation';

export default function App() {

const container ={
  height: '125vh',
  backgroundSize: 'cover',
  fontFamily: 'sans-serif',
  marginTop: '80px',
  padding: '30px',
  marginRight: '30px'
}

  return (
   <div style={container}>
     <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
             <Navigation></Navigation>
      </Container>
    </React.Fragment>
   </div>
  );
}

