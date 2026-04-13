import '../index.css';
import React from 'react';
import Nav from '../components/Nav';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Home = ({}) => {
  return (
    <>
      <Nav />
      <Box
        sx={{
          height: { xs: '600px', sm: '600px', md: '660px' },
          backgroundColor: 'var(--black)',
          justifyContent: { xs: 'center', sm: 'center', md: 'center' },
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          color: 'white',
        }}
        p={{
          xs: { px: 2, py: 5 },
          sm: { px: 2, py: 5 },
          md: { px: 3, py: 6 },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              textAlign: 'center',
              fontFamily: 'Pinyon Script',
              fontWeight: '400',
              fontSize: { xs: '56px', sm: '68px', md: '96px' },
            }}
          >
            Hi,
          </Typography>
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: '56px', sm: '56px', md: '96px' } }}
          >
            I'm Ali
          </Typography>
        </Box>

        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '56px', sm: '56px', md: '96px' },
            textAlign: 'center',
          }}
        >
          I CREATE WEB APPS
        </Typography>
        <Typography
          variant="h5"
          color="grey"
        >
          PORTFOLIO - 2026
        </Typography>
      </Box>
    </>
  );
};

export default Home;
