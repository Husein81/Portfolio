import { useState, useEffect } from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-scroll';
import { styled } from '@mui/system';

const Header = () => {
    const [animateOnLoad, setAnimateOnLoad] = useState(false);

    useEffect(() => {
      setAnimateOnLoad(true);
    }, []);

    const HeaderBackground = styled(Box)({
      backgroundImage: 'url("../../../public/assets/st.jpg")', // Replace with your image URL
      backgroundSize: 'cover',
      backgroundOrigin: 'center',
      backgroundPosition: 'center',
      height: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
    });
  return (
    <HeaderBackground>
      <Container maxWidth="md" id="Home">
        <Grid container
          justifyContent="center"
          spacing={2}
          pt={18}
          pb={10}>
          <Grid item xs={12} className={animateOnLoad ? 'move-up' : ''}>
            <Typography variant="h3" color={"#fefefe"}  >Hi There,</Typography>
            <Typography variant="h2" color={"#fefefe"}>I'm Hussein <span className='text-purple-500'>Nasrallah</span> </Typography>
            <Typography variant="h5" color={"#aaa"} >I'm a Software Developer</Typography>
            <br />
            <Button variant="contained" color="secondary">
              <Link to="About" smooth={true} duration={500}>
                About Me
              </Link>
            </Button>
          </Grid>
          </Grid>
      </Container>
    </HeaderBackground>
  );
};

export default Header;
