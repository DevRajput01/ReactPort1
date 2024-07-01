import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import { Box, Button, TextField, Typography, Container, Grid, IconButton } from '@mui/material';
import {} from '@mui/material/colors';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import Sit1 from './Sit1.json';
import Lottie from 'lottie-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_jvokzyg',
      'template_z6z9wwe',
      formData,
      '_yOjhWTLFh_wZc25t'
    )
    .then((result) => {
      console.log(result.text);
      alert('Thank You, Message Sent');
    }, (error) => {
      console.log(error.text);
      alert('An error occurred, please try again.');
    });
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={6}>
          <Box mt={5} className='cont-box' sx={{ "@media (max-width:600px)": { fontSize: "1rem", height: "570px", width: "310px" } }}>
            <Typography className='cont-heading' variant="h4" component="h1" gutterBottom>
              Let's Connect
            </Typography>
            <p className='cont-para'>Thank you for your interest in reaching out. I'd love to hear from you! Whether you have a question about my work, a project idea, or just want to say hello, feel free to send me a message.</p>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    variant="outlined"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Your Email"
                    name="email"
                    variant="outlined"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Type Your Message"
                    name="message"
                    variant="outlined"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>
                    Send
                  </Button>
                </Grid>
              </Grid>
            </form>
            <Box className='social-box'>
              <IconButton className='social-Icon-box' href="https://www.linkedin.com/in/devtech01/" target="_blank">
                <LinkedInIcon fontSize="large" />
              </IconButton>
              <IconButton className='social-Icon-box' href="https://www.facebook.com/profile.php?id=100013174096680" target="_blank">
                <FacebookIcon fontSize="large" />
              </IconButton>
              <IconButton className='social-Icon-box' href="https://www.instagram.com/devrajput0108/" target="_blank">
                <InstagramIcon fontSize="large" />
              </IconButton>
              <IconButton className='social-Icon-box' href="https://github.com/DevRajput01" target="_blank">
                <GitHubIcon fontSize="large" />
              </IconButton>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className='cont-img'>
            <Lottie animationData={Sit1} loop={true} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
