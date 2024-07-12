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
    Typography 
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { Contacts, Folder, Home, Info, Work } from "@mui/icons-material";
import LogoutIcon  from "@mui/icons-material/Logout";
import { useState } from "react";


interface Item{
    name:string;
    path:string;
    icon?:React.ReactNode;
}

const SideBar = () => {
    const [open, setOpen] = useState(false);
    
    const menuItems: Item[] = [
        {name:'Home', path:'home',icon:<Home/>},
        {name:'About', path:'about',icon:<Info/>},
        {name:'Projects', path:'projects', icon:<Folder/>},
        {name:'Services', path:'services',icon:<Work/>},
        {name:'Contact', path:'contact',icon:<Contacts/>},
        {name:'Logout', path:'logout', icon:<LogoutIcon/> }
    ];

    const handleToggleDrawer = () => {
        setOpen(!open);
    }
    const content = (
        menuItems.map((item, index) => (
            <Link to={item.path}  key={index}>
                <ListItem button className="text-slate-100 no-underline gap-1 text-center">
                    {item.icon}
                    <ListItemText primary={item.name}/>
                </ListItem>
            </Link>
    )));

    const AppBarStyled = styled(AppBar)(() => ({
        left:0,
        width:'240px',
        minHeight:'100vh',
        height:'100%',
        padding:'18px 14px',
        backgroundColor:'#1a202c',
        color:'#f8f9fa',
    }));
    const StyledDrawer = styled(Drawer)(() => ({
        '& .MuiDrawer-paper':{width:'240px', padding:'18px 14px', backgroundColor:'#1a202c', color:'#f8f9fa'}
    }));

  return (
    <Box display={'flex'} justifyContent={'space-between'}>
        <Hidden smDown>
            <AppBarStyled >
                <Typography variant="h6">Hussein <span className="text-purple-500">Nasrallah</span></Typography>
                <List>
                    {content}
                </List>
            </AppBarStyled>
        </Hidden>
        <Hidden smUp>
            <StyledDrawer
                variant="persistent"
                anchor="left"
                open={open}>
                <Typography variant="h6">Hussein <span className="text-purple-500">Nasrallah</span></Typography>
                <List>
                    {content}
                </List>
            </StyledDrawer>
            <Box >
                <IconButton onClick={handleToggleDrawer}>
                    <MenuIcon />
                </IconButton>
            </Box>
        </Hidden>
    </Box>
  )
}
export default SideBar