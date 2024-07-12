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
      backgroundImage: 'url("../../../public/assets/pp.webp")', // Replace with your image URL
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
          spacing={2}
          pt={10}
          pb={10}>
          <Grid item xs={12} className={animateOnLoad ? 'move-up' : ''} color={'#fefefe'} >
            <Typography variant="h3"  >Hi There,</Typography>
            <Typography variant="h2" >I'm Hussein <Box component={'span'}  className='text-yellow-500'>Nasrallah</Box> </Typography>
            <Typography variant="h5" >I'm a Software Developer</Typography>
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
