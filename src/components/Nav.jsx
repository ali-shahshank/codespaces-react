import React, { useState } from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '../components/Drawer';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const pages = ['WORK', 'ABOUT', 'SERVICES'];

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
            sx={{
              fontFamily: 'Marcellus',
            }}
          >
            Portfolio
          </Typography>

          {/* Nav Links */}
          <Box
            sx={{
              display: { xs: 'none', sm: 'none', md: 'flex' },
              justifyContent: 'center',
              alignItems: 'center',
              flexGrow: 1,
              gap: 0,
            }}
          >
            {pages.map((page, index) => (
              <MenuItem
                key={index}
                sx={{
                  display: 'flex',
                  m: 0,
                  px: 1.5,
                  py: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 6,
                }}
              >
                {page}
              </MenuItem>
            ))}
          </Box>

          <Button
            variant="contained"
            sx={{
              borderRadius: 10,
              display: { xs: 'none', sm: 'none', md: 'block' },
              backgroundColor: '#FFFFFF',
              color: '#000000',
            }}
          >
            Contact
          </Button>

          <Button
            onClick={handleOpen}
            sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}
          >
            <img
              src="/hamburger-menu.svg"
              alt="menu-icon"
              loading="lazy"
            />
          </Button>

          {/* <IconButton
            onClick={handleOpen}
            size="medium"
            edge="start"
            color="inherit"
            sx={{ display: { xs: 'block', sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton> */}
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
