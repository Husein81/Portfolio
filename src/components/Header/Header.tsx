import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-scroll";
import { styled } from "@mui/system";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const HeaderBackground = styled(Box)({
    backgroundImage: 'url("/OIP.jpg")', // Replace with your image URL
    backgroundSize: "cover",
    backgroundOrigin: "center",
    backgroundPosition: "center",
    height: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
  });

  return (
    <HeaderBackground>
      <Container id="Home">
        <Grid container spacing={2} pt={10} pb={10}>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: "15rem" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="bg-opacity-50 p-5 rounded-lg"
            >
              <Grid item xs={12} color={"#8e8e8e"}>
                <Typography variant="h3">Hello There,</Typography>
                <Typography variant="h2">
                  I'm Hussein{" "}
                  <Box component={"span"} className="text-mountainMeadow">
                    Nasrallah
                  </Box>{" "}
                </Typography>
                <Typography variant="h5">I'm a Software Developer</Typography>
                <br />
                <Button variant="contained" color="secondary">
                  <Link to="About" smooth={true} duration={500}>
                    About Me
                  </Link>
                </Button>
              </Grid>
            </motion.div>
          </AnimatePresence>
        </Grid>
      </Container>
    </HeaderBackground>
  );
};

export default Header;
