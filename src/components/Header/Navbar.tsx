import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import {
  EmailOutlined,
  FolderOutlined,
  InfoOutlined,
  PsychologyOutlined,
} from "@mui/icons-material";
import { AnimatePresence } from "framer-motion";
import Drawer from "./Drawer";

interface Item {
  name: string;
  path: string;
  icon: JSX.Element;
}

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 120);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems: Item[] = [
    { name: "Home", path: "Home", icon: <HomeIcon /> },
    { name: "About", path: "About", icon: <InfoOutlined /> },
    { name: "Projects", path: "Projects", icon: <FolderOutlined /> },
    { name: "Skills", path: "Skills", icon: <PsychologyOutlined /> },
    { name: "Contact", path: "Contact", icon: <EmailOutlined /> },
  ];

  const content = menuItems.map((item, index) => (
    <Link
      key={index}
      className="duration-200 hover:scale-105"
      to={item.path}
      smooth={true}
      duration={500}
    >
      <ListItem button sx={{ gap: 1 }} onClick={() => setMobileOpen(false)}>
        <Box
          sx={{
            display: { xs: "block", sm: "none" },
            color: "#8e8e8e",
          }}
        >
          {" "}
          {item.icon}
        </Box>
        <ListItemText primary={item.name} sx={{ color: "#8e8e8e" }} />
      </ListItem>
    </Link>
  ));

  const StyledAppBar = styled(AppBar)(() => ({
    backgroundColor: "transparent",
    boxShadow: "none",
    color: "#8e8e8e",
    padding: "4px 4px",
    marginBottom: "180px",
    "&.scrolled": {
      backgroundColor: "#2a2a2a",
      boxShadow: "0 0 5px rgba(0,0,0,0.5)",
      color: "#8e8e8e",
    },
  }));

  const StyledToolbar = styled(Toolbar)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: "1.2rem",
  }));

  const handleToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleToggleClose = () => {
    setMobileOpen(false);
  };

  return (
    <StyledAppBar className={scrolled ? "scrolled" : ""}>
      <StyledToolbar className="sm:mx-[10%]">
        <Typography variant="h6" py={2}>
          Hussein <span className="text-mountainMeadow">Nasrallah</span>
        </Typography>
        <Hidden smUp>
          <IconButton
            size={"large"}
            edge="start"
            aria-label="menu"
            onClick={handleToggle}
          >
            <MenuIcon
              fontSize={"large"}
              className={scrolled ? "text-slate-50" : "text-slate-50"}
            />
          </IconButton>
        </Hidden>
        <List className="hidden sm:flex">{content}</List>
      </StyledToolbar>

      {/* Animated Drawer */}
      <AnimatePresence mode="wait">
        {mobileOpen && <Drawer content={content} onClose={handleToggleClose} />}
      </AnimatePresence>
    </StyledAppBar>
  );
};

export default Navbar;
