import React from 'react';
import Comp from './Comp.json';
import Lottie from 'lottie-react';
import { Box, Button , Typography, IconButton, Grid } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

import './Footer.css';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#026ad8', color: 'white', p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
      <Typography variant="body1" sx={{ color:'white'}}>Email: devtech0108@gmail.com</Typography>
        <Box className='foot-social-box'>
          <IconButton className='foot-Icon-box' href="https://www.linkedin.com/in/devtech01/" target="_blank" sx={{ color: 'white', '&:hover': { color: 'Black' } }}>
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton className='foot-Icon-box' href="https://www.facebook.com/profile.php?id=100013174096680" target="_blank" sx={{ color: 'white', '&:hover': { color: 'Black' } }}>
            <FacebookIcon fontSize="large" />
          </IconButton>
          <IconButton className='foot-Icon-box' href="https://www.youtube.com/channel/UCXxrGT2xgEgPwLBcSOUNI9w" target="_blank" sx={{ color: 'white', '&:hover': { color: '#FF0000' } }}>
            <YouTubeIcon fontSize="large" />
          </IconButton>
          <IconButton className='foot-Icon-box' href="https://www.instagram.com/devrajput0108/" target="_blank" sx={{ color: 'white', '&:hover': { color: 'Black' } }}>
            <InstagramIcon fontSize="large" />
          </IconButton>
          <IconButton className='foot-Icon-box' href="https://github.com/DevRajput01" target="_blank" sx={{ color: 'white', '&:hover': { color: 'Black' } }}>
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>

      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant='body2' sx={{ textAlign: 'center', '@media (max-width:600px)': { fontSize: '1rem' } }}>
          {/* <Box className='para-box'>
          Thank you for visiting my portfolio. Your time and interest are greatly appreciated. I hope you found the showcased work insightful and engaging. Please feel free to reach out with any questions or feedback.
          </Box> */}
          <Button variant="contained" color="secondary" href="./Home.js">Back To Top</Button>
          </Typography>
        </Grid>
        <Grid item>
          <Box className='anim-foot' sx={{ maxWidth: 200 }} >
            <Lottie animationData={Comp} loop={true} />
          </Box>
        </Grid>
      </Grid>
      <Typography variant="body1" className='all-right' >  &#10084; All Right Reserved &copy;  Devendra Singh</Typography>
    </Box>
  );
};

export default Footer;
