import {
  AppBar,
  Box,
  Drawer,
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

interface Item {
  name: string;
  path: string;
  icon: JSX.Element;
}
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    window.scrollY > 120 ? setScrolled(true) : setScrolled(false);
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
      className="duration-200 hover:scale-105 "
      to={item.path}
      smooth={true}
      duration={500}
    >
      <ListItem button sx={{ gap: 1 }}>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>{item.icon}</Box>
        <ListItemText primary={item.name} />
      </ListItem>
    </Link>
  ));
  const StyledAppBar = styled(AppBar)(() => ({
    backgroundColor: "transparent",
    boxShadow: "none",
    color: "#fefefe",
    padding: "4px 4px",
    marginBottom: "180px",

    "&.scrolled": {
      backgroundColor: "#fefefe",
      boxShadow: "0 0 5px rgba(0,0,0,0.5)",
      color: "#242424",
    },
  }));
  const StyledToolbar = styled(Toolbar)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: "1.2rem",
  }));

  const handleToggleOpen = () => {
    setMobileOpen(true);
  };
  const handleToggleClose = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <StyledAppBar className={scrolled ? "scrolled" : ""}>
      <StyledToolbar className="sm:mx-[10%]">
        <Typography variant="h6" py={2}>
          Hussein <span className="text-purple-500">Nasrallah</span>{" "}
        </Typography>
        <Hidden smUp>
          <IconButton
            size={"large"}
            edge="start"
            aria-label="menu"
            onClick={handleToggleOpen}
          >
            <MenuIcon
              fontSize={"large"}
              className={scrolled ? "text-[#242424]" : "text-slate-50"}
            />
          </IconButton>
        </Hidden>
        <List className="hidden sm:flex">{content}</List>
      </StyledToolbar>

      <Box
        component={Drawer}
        open={mobileOpen}
        onClose={handleToggleClose}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            width: 240,
          },
        }}
      >
        <Box my={1}>
          <Typography variant="h6" p={2}>
            Hussein{" "}
            <Box component={"span"} className="text-purple-500">
              Nasrallah
            </Box>{" "}
          </Typography>
          {content}
        </Box>
      </Box>
    </StyledAppBar>
  );
};
export default Navbar;
