import './styles/login.scss';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Typography, Box, Button } from '@mui/material';

function Login(){
    return (
        <Box>
        <Typography> Hola </Typography>
        <Button>Press</Button>
        </Box>
    );
}
ReactDOM.render(<Login />, document.getElementById('content'));