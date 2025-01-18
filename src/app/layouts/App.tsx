import {
  About,
  Contact,
  Footer,
  Header,
  Navbar,
  Projects,
  Skills,
} from "../../components";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Example: blue
    },
    secondary: {
      main: "#1EA977", // Example: red
    },
    success: {
      main: "#4caf50", // Example: green
    },
    // Add more colors as needed
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
