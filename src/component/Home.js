import React from 'react';
import './Home.css';
import myPic33 from './image/mypic33.jpeg.jpg';
import resume from './Devendra.pdf';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box } from '@mui/system';
import { Button, Grid, IconButton } from '@mui/material';

const Home = () => {
  return (
    <div className="home-container">
      <Box className="details">
        <h6>Hello,  It's me</h6>
        <h4>Devendra Singh</h4>
        <p>I am a Web Designer with  experience in Frontend Development.<br/>
          I'm also interested in Graphic Design and working as a Graphic Designer at T & P cell, MIMIT Malout.</p>
       <a href={resume} download="Devendra.pdf" className="download-button">Download Resume</a>
        <Box className='social-home-box'>
          <IconButton className='home-Icon-box' href="https://www.linkedin.com/in/devtech01/" target="_blank">
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton className='home-Icon-box' href="https://www.facebook.com/profile.php?id=100013174096680" target="_blank">
            <FacebookIcon fontSize="large" />
          </IconButton>
          <IconButton className='home-Icon-box' href="https://www.instagram.com/devrajput0108/" target="_blank">
            <InstagramIcon fontSize="large" />
          </IconButton>
          <IconButton className='home-Icon-box' href="https://github.com/DevRajput01" target="_blank">
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>
      <div className="picture">
        <img src={myPic33} alt="My Picture" />
      </div>
    </div>
  );
};

export default Home;





