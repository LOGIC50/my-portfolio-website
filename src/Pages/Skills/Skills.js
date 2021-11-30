import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';

const images = [
    {
        img: 'https://i.ibb.co/M53XdL3/1.png'
    },
    {
        img: 'https://i.ibb.co/YLKQwNQ/2.png'
    },
    {
        img: 'https://i.ibb.co/tbHRjz3/3.jpg'
    },
    {
        img: 'https://i.ibb.co/cNnTFdj/4.png'
    },
    {
        img: 'https://i.ibb.co/dLxjKyj/5.jpg'
    },
    {
        img: 'https://i.ibb.co/6mFB9wt/6.png'
    },
    {
        img: 'https://i.ibb.co/4K9XpTs/7.png'
    },
    {
        img: 'https://i.ibb.co/CHtCVy5/8.png'
    },
    {
        img: 'https://i.ibb.co/9q4Dqfk/9.jpg'
    },
    {
        img: 'https://i.ibb.co/nwxVRsv/10.jpg'
    },
    {
        img: 'https://i.ibb.co/7Xhhgp7/11.jpg'
    },
    {
        img: 'https://i.ibb.co/7Xhhgp7/11.jpg'
    }
]

const Skills = () => {
    return (
        <Container>
            <h1>Skills</h1>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
          {
              images.map(image => <Grid style={{'border': '1px solid aquamarine', 'margin': '20px','alignItems': 'center'}} item xs={6} md={3}>
                <img style={{'width': 'auto', 'margin': '20px'}} src={image.img} alt="" />
              </Grid>)
          }
        
        
      </Grid>
    </Box>
        </Container>
    );
};

export default Skills;












// https://i.ibb.co/VTPdnxH/12.jpg
// https://i.ibb.co/WF4XjHB/13.png
// https://i.ibb.co/X77Mwhj/14.jpg