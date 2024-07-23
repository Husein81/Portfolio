import React from 'react';
import { Box, Container, Grid, Link as NavLink, styled, Typography } from '@mui/material';
import { Link } from 'react-scroll';



const Footer: React.FC = () => {
  const MUILink = styled(Link)(() => ({
    display: 'block',
    cursor:'pointer',
    fontSize:14,
    color: '#fefefe',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  }));
  const NavLinkStyled = styled(NavLink)(() => ({
    display: 'block',
    cursor:'pointer',
    fontSize:14,
    color: '#fefefe',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },  
  }))
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
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Portfolio
            </Typography>
            <MUILink smooth={true} duration={500} to="About"  >
              About Me
            </MUILink>
            <MUILink smooth={true} duration={500} to="Projects" >
              Projects
            </MUILink>
            <MUILink smooth={true} duration={500} to="Skills" >
              Skills
            </MUILink>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6"  gutterBottom>
              Links
            </Typography>
            <MUILink smooth={true} duration={500} to="#blog" >
              Blog
            </MUILink>
            <MUILink smooth={true} duration={1000} to="Contact" >
              Contact
            </MUILink>
            <MUILink smooth={true} duration={1000} to="CV"  >
              Resume
            </MUILink>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6"  gutterBottom>
              Social
            </Typography>
            <NavLinkStyled href="https://github.com/Husein81"  >
              GitHub
            </NavLinkStyled>
            <NavLinkStyled href="https://www.linkedin.com/in/hussein-nasrallah-645559235"  >
              LinkedIn
            </NavLinkStyled>
            <NavLinkStyled href="https://x.com/husein_nasralah">
              Twitter
            </NavLinkStyled>
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
