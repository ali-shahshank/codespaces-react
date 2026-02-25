import React from 'react';
import Nav from '../components/Nav';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';

const Home = () => {
  const theme = createTheme({
    palette: { textPrimary: '#ffffff', textSecondary: '#6C757D' },
  });
  return (
    <>
      <Nav />
      <Box
        sx={{
          m: 0,
          py: '48px',
          px: '24px',
          display: { xs: 'flex', md: 'flex' },
          justifyContent: { xs: 'center', md: 'center' },
          alignItems: 'start',
          minHeight: '600px',
          backgroundColor: '#000000',
        }}
      >
        <div className="col-sm-12 col-md-8 p-0">
          <h5 className="fs-5 text-white text-center text-md-start">
            Ali A. Shah
          </h5>
          <h5 className="fs-4 text-secondary text-center text-md-start">
            CREATIVE DEVELOPER
          </h5>
          <h1 className="display-1 text-center text-white">
            CREATING IMPACTFUL WEB SOLUTIONS
          </h1>
          <h5 className="fs-5 text-end text-secondary text-center text-md-end">
            PORTFOLIO - 2026
          </h5>
        </div>
      </Box>

      {/* <Box>
        <Stack
          sx={{
            m: 0,
            px: 3,
            py: '64px',
            height: '700px',
            justifyContent: 'start',
            alignItems: 'start',
            display: 'flex',
            backgroundColor: '#000000',
          }}
        >
          <Box sx={{ p: 0, m: 0 }}>
            <Typography
              variant="h6"
              component="h1"
              color="white"
              sx={{ p: 0, m: 0 }}
            >
              Ali A. Shah
            </Typography>
          </Box>
          <Box sx={{ p: 0, mb: 2 }}>
            <Typography
              variant="h5"
              component="h5"
              sx={{ color: theme.palette.textSecondary, fontWeight: 'light' }}
            >
              CREATIVE DEVELOPER
            </Typography>
          </Box>
          <Box
            sx={{
              mb: 2,
              p: 0,
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h1"
              component="h2"
              color="white"
              sx={{ fontWeight: 'medium', textAlign: 'center' }}
            >
              CREATING IMPACTFUL WEB SOLUTIONS
            </Typography>
          </Box>
          <Box
            minWidth="100%"
            sx={{ display: 'flex', justifyContent: 'end', alignItems: 'end' }}
          >
            <Typography
              variant="h5"
              component="h5"
              sx={{ color: theme.palette.textSecondary, fontWeight: 'light' }}
            >
              PORTFOLIO - 2026
            </Typography>
          </Box>
        </Stack>
      </Box> */}
    </>
  );
};

export default Home;
