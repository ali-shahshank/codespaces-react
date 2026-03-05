import React from 'react';
import Button from '@mui/material/Button';

const ButtonOutlined = ({ text }) => {
  return (
    <>
      <Button
        variant="outlined"
        color="inherit"
        sx={{ borderRadius: 10 }}
      >
        {text}
      </Button>
    </>
  );
};

export default ButtonOutlined;
