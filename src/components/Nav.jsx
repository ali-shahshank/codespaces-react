import React, { useState } from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '../components/Drawer';
import { Link } from 'react-router';

const Nav = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: 'black',
          m: '0px',
          px: '24px',
          py: '24px',
        }}
      >
        <AppBar
          position="relative"
          sx={{
            px: '16px',
            py: '12px',
            borderRadius: '100px',
            backgroundColor: '#000000',
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            border: '1px solid #6C757D',
            maxWidth: '800px',
          }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: 'Marcellus', flexGrow: 1 }}
          >
            Portfolio
          </Typography>

          <Button
            variant="contained"
            sx={{
              borderRadius: 10,
              display: { xs: 'none', sm: 'block' },
              backgroundColor: '#FFFFFF',
              color: '#000000',
            }}
          >
            Contact
          </Button>

          <IconButton
            onClick={handleOpen}
            size="medium"
            edge="start"
            color="inherit"
            sx={{ display: { xs: 'block', sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </AppBar>
      </Box>
      <Drawer
        open={open}
        onClose={handleClose}
      />
    </>
  );
};

export default Nav;
