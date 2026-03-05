import React from 'react';
import Button from '@mui/material/Button';
import Nav from '../components/Nav';
import Box from '@mui/material/Box';

const Home = ({}) => {
  return (
    <>
      <Nav />
      <Box
        sx={{ m: 0, p: 0, minHeight: '800px', backgroundColor: '#000000' }}
      ></Box>
    </>
  );
};

export default Home;
