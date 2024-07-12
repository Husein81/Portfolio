import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 5, 
        px: 2, 
      }}
      className='text-slate-50 bg-[#444]'
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Portfolio
            </Typography>
            <Link href="#about" variant="body2" color="#fff" display="block">
              About Me
            </Link>
            <Link href="#projects" variant="body2" color="#fff" display="block">
              Projects
            </Link>
            <Link href="#skills" variant="body2" color="#fff" display="block">
              Skills
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6"  gutterBottom>
              Links
            </Typography>
            <Link href="#blog" variant="body2" color="#fff" display="block">
              Blog
            </Link>
            <Link href="#contact" variant="body2" color="#fff" display="block">
              Contact
            </Link>
            <Link href="/resume.pdf" variant="body2" color="#fff" display="block">
              Resume
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6"  gutterBottom>
              Social
            </Typography>
            <Link href="https://github.com/yourusername" target="_blank" rel="noopener" variant="body2" color="#fff" display="block">
              GitHub
            </Link>
            <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener" variant="body2" color="#fff" display="block">
              LinkedIn
            </Link>
            <Link href="https://twitter.com/yourusername" target="_blank" rel="noopener" variant="body2" color="#fff" display="block">
              Twitter
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6"  gutterBottom>
              More
            </Typography>
            <Link href="#testimonials" variant="body2" color="#fff" display="block">
              Testimonials
            </Link>
            <Link href="#gallery" variant="body2" color="#fff" display="block">
              Gallery
            </Link>
            <Link href="#faq" variant="body2" color="#fff" display="block">
              FAQ
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="#fff" align="center">
            © {new Date().getFullYear()} Hussein Nasrallah. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
