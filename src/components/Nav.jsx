import React, { useState } from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '../components/Drawer';

const Nav = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      
        <AppBar
          position='static'
          sx={{
            px: 3,
            py: 2,
            backgroundColor: '#000000',
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        > 
          <Typography
            variant='h5'
            component='div'
            sx={{ fontFamily: 'Marcellus', flexGrow: 1 }}
          >Portfolio
          </Typography>
            
          <Button
            variant='outlined'
            color='inherit'
            sx={{ borderRadius: 10, display: { xs: 'none', sm: 'block' } }}
          >
            Contact
          </Button>

          <IconButton
            onClick={handleOpen}
            size='medium'
            edge='start'
            color='inherit'
            sx={{ display: { xs: 'block', sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </AppBar>
      <Drawer open={open} onClose={handleClose} />
    </>
  );
};

export default Nav;