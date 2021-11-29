import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container } from '@mui/material';
import './Home.css';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';


const Home = () => {
    
    return (
        
        <Container className='home-portion'>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <h1>Hi, I am</h1>
          <h1 style={{'color': 'aquamarine'}}>Ahmed Jafrul Islam</h1>
          <Link style={{'color': 'white'}} to=''>Download Resume</Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src="https://i.ibb.co/12Jzt29/1638198955357-removebg-preview-1.png" alt="" />
        </Grid>
        
      </Grid>
    </Box>
        </Container>
    );
};

export default Home;