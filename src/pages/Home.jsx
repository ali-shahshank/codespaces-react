import React from 'react';
import Nav from '../components/Nav';
import Box from '@mui/material/Box';

const Home = () => {
  return (
    <>
      <Nav />
      <Box sx={{ px: 3, py: 4, backgroundColor: 'primary.main' }}></Box>
    </>
  );
};

export default Home;
