import React from 'react';
import Navigation from './Navigation';

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
   </div>
  );
}

