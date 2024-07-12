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
  Typography 
} from "@mui/material"
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu'; 
import { Link } from 'react-scroll';

interface Item{
  name:string;
  path:string;
}
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems: Item[] = [
    {name:'Home', path:'Home'},
    {name:'About', path:'About'},
    {name:'Projects', path:'Projects'},
    {name:'Services', path:'services'},
    {name:'Contact', path:'Contact'}
  ]

  const content = (
      menuItems.map((item, index) => (
        <Link key={index} className="duration-200 hover:scale-105 " to={item.path} smooth={true} duration={500}>
        <ListItem button >
          <ListItemText primary={item.name}/>
        </ListItem>
      </Link> 
      ))
  );
  const StyledAppBar = styled(AppBar)(() => ({
    backgroundColor:'#fefefe',
    color:'#242424',
    padding:'4px 4px',
    marginBottom:'180px'
  }));
  const StyledToolbar = styled(Toolbar)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize:'1.2rem',
    maxWidth:'980px',
   
  }));

  const handleToggleOpen = () =>{
    setMobileOpen(true);
  }
  const handleToggleClose = () => {
    setMobileOpen(!mobileOpen);
  }

  
  return (
    <StyledAppBar>
        <StyledToolbar className="sm:mx-[15%]" >
          <Typography variant="h6" py={2}>Hussein <span className="text-purple-500">Nasrallah</span> </Typography>
          <Hidden smUp>
                <IconButton
                size='large'
                edge='start'
                aria-label="menu"
                onClick={handleToggleOpen}
                >
                  <MenuIcon/>
                </IconButton>
            </Hidden>
          <List 
          className="hidden sm:flex ">
            {content}
          </List>
        </StyledToolbar>
        <Drawer variant="temporary"
        open={mobileOpen}
        onClose={handleToggleClose}
        ModalProps={{
            keepMounted: true, // Mobile drawer should stay mounted
        }}
        sx={{
          color:"#fefefe",
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { width: 240},
          transition: '0.5s ease-in-out'
        }}
        
        >
          <Box px={2} my={5}>
          <Typography variant="h6" py={2}>Hussein <span className="text-purple-500">Nasrallah</span> </Typography>
          {content}
        </Box>
        </Drawer>
    </StyledAppBar>
  )
}
export default Navbar