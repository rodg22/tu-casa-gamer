import { Divider, IconButton, List, ListItem, ListItemText, SwipeableDrawer } from "@mui/material";
import { styled, useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';


const iOS =
typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

const drawerWidth = 220;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

function LeftMenu({open, onOpen, onClose}) {

    const theme = useTheme();

    const categories = [
        {
            categoryId: 'CONSOLAS'
        },
        {
            categoryId: 'JUEGOS'
        },
        {
            categoryId: 'ACCESORIOS'
        },
    ]

    return ( 
        <SwipeableDrawer
            color='primary'
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                  width: drawerWidth,
                  boxSizing: 'border-box',
                  background: "#262626",
                  color: '#fff'
                },
              }}
            anchor="left"
            open={open}
            onOpen={onOpen}
            onClose={onClose}
            disableBackdropTransition={!iOS}
            disableDiscovery={iOS}
        >
            <DrawerHeader>
                <IconButton onClick={onClose} sx={{color: '#fff'}}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider sx={{borderColor: 'rgba(255,255,255,0.2)'}}/>
            <List>
                <Link onClick={onClose} to="/" key="home" style={{textDecoration: "none", color: "white"}}>
                    <ListItem button key="home">
                        <ListItemText primary="HOME" />
                    </ListItem>
                </Link>
            </List>
            <Divider sx={{borderColor: 'rgba(255,255,255,0.2)'}}/>
            <List>
                {categories.map(({categoryId}) => (
                    <Link onClick={onClose} to={`/category/${categoryId}`} key={categoryId} style={{textDecoration: "none", color: "white"}}>
                        <ListItem button>
                            <ListItemText primary={categoryId} />
                        </ListItem>
                    </Link>
                ))}
            </List>
            <Divider sx={{borderColor: 'rgba(255,255,255,0.2)'}}/>
            <List>
                <ListItem button key="contacto">
                    <ListItemText primary="CONTACTO" />
                </ListItem>
            </List>
        </SwipeableDrawer>
     );
}

export default LeftMenu;