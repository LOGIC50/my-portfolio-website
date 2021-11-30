import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Container, Grid } from '@mui/material';
import { Box } from '@mui/material';
import './Contact.css';

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_tt4spyj', form.current, 'user_p0OAJuaEwDb1AvxTcaKEV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
    return (
        <>
        <div>
            <h1 style={{'text-align': 'center', 'marginTop': '100px'}}>Contact With Me</h1>
        </div>
        <div>
        <Container className='home-portion'>
            <Box sx={{ flexGrow: 1 }} className='contact-box'>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} className='contact-info'>
          <div>
          <img src="https://i.ibb.co/TLJbhCQ/1500-0.jpg" alt="" />
          </div>
          <div>
            <h2>Ahmed Jafrul Islam</h2>
            <h6>Front End Web Developer</h6>
            <p>I am available for freelance work.</p>
            <p>If needed, feel free to contact with me</p>
            <p>Phone: <span>+8801406475446</span></p>
            <p>Email: <span>ahmedjafrulislam@gmail.com</span></p>
            <p>FIND WITH ME</p>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <form ref={form} onSubmit={sendEmail} className='contact-form'>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>PHONE NUMBER</label>
      <input type="number" name="user_contact" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>SUBJECT</label>
      <input type="text" name="subject" />
      <label>MESSAGE</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
        </Grid>
        
      </Grid>
    </Box>
        </Container>
            
        </div>
        </>
    );
};
export default Contact;

