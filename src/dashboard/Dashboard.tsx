import * as React from 'react'
import * as styles from '@mui/material/styles';
import { Container, Toolbar, Typography, Box, List, ListItem, ListItemButton, ListItemText, Link, IconButton,Collapse } from "@mui/material";
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Atoms from '../library/Atoms';
import theme from "../theme";
import './style.css';

/* 
HI KUSHKI DEVELOPER
THIS FOLDER CAN'T BE MODIFIED AND USED. THIS IS ONLY A 
DASHBOARD TEMPLATE THAT SHOWS THE COMPONENTS THAT YOU ARE GOING TO USE.
*/


function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {' Powered by: '}<br/>
      <Link color="inherit" href="https://www.kushki.com/" target="_blank" underline="none">
        <img src={process.env.PUBLIC_URL + "/img/poweredbyKushki.svg"} width={125} />
      </Link>
    </Typography>
  );
}

function MenuList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%' }}
      component="nav"
    >
      <ListItemButton component="a" onClick={handleClick}>
        <ListItemText primary="Paletas de color" />
        <span>{!open ? <ExpandLess /> : <ExpandMore />}</span>
      </ListItemButton>
          <Collapse in={!open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton component="a" href="#themeColors">
                <ListItemText primary="Theme colors" />
              </ListItemButton>
              <ListItemButton component="a" href="#neutralColors">
                <ListItemText primary="Neutrals" />
              </ListItemButton>
              <ListItemButton component="a" href="#typographyColors">
                <ListItemText primary="Typography" />
              </ListItemButton>
              <ListItemButton component="a" href="#gradientColors">
                <ListItemText primary="Gradients" />
              </ListItemButton>
            </List>
          </Collapse>
      <ListItemButton component="a" href="#typographyNav">
        <ListItemText primary="Tipografías" />
      </ListItemButton>
        <ListItemButton component="a" href="#buttonNav">
          <ListItemText primary="Buttons" />
        </ListItemButton>
      <ListItemButton component="a" href="#iconButtonNav">
        <ListItemText primary="Icon Buttons" />
      </ListItemButton>
        <ListItemButton component="a" href="#controlsNav">
          <ListItemText primary="Controls" />
        </ListItemButton>
      <ListItemButton component="a" href="#textFieldsNav">
        <ListItemText primary="TextFields" />
      </ListItemButton>
      <ListItemButton component="a" href="#">
        <ListItemText primary="TextField Select & ISO" />
      </ListItemButton>
      <ListItemButton component="a" href="#">
        <ListItemText primary="Icons" />
      </ListItemButton>  
      <ListItemButton component="a" href="#displayNav">
        <ListItemText primary="Data Display" />
      </ListItemButton>
    </List>
  );
}

const drawerWidth: number = 250;
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styles.styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styles.styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: '0px'
      }),
    },
  }),
);


function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <styles.ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <AppBar className="TopBarCollapse" position="absolute" open={open}
        sx={{
                ...(open && { display: 'none' }),
              }}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '10px',
                ...(open && { display: 'none' }),
              }}
            > <img src={process.env.PUBLIC_URL + "/img/arrowRight.svg"} width={25} height={25} />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
            <img src={process.env.PUBLIC_URL + "/img/logoIcon.svg"} style={{ verticalAlign: 'middle', marginRight: '10px' }}/>
            <span className="FontWeak">Design System</span> - <span className="Font600">Kushki</span> <span className="Font400">Adquirente</span>
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer className="SideBarNav" variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              px: [3],
              pt: [1],
            }}
          >
            <img src={process.env.PUBLIC_URL + "/img/logoIcon.svg"} />
            <IconButton onClick={toggleDrawer}>
            <img src={process.env.PUBLIC_URL + "/img/arrowLeft.svg"}  width={25} height={25} />
            </IconButton>
          </Toolbar>  
          <List
          sx={{
              px: [1],
              pb: [1],
            }}
          >
            <ListItem className="listDs">
              <ListItemText>Design system</ListItemText>
            </ListItem>
            <ListItem className="listClient">
              <ListItemText>Kushki</ListItemText>
            </ListItem>
            <ListItem className="listTitle">
              <ListItemText>Adquirente</ListItemText>
            </ListItem>
          </List> 
          <MenuList />   
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: '#FAFCFD',
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
            <Atoms />
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </styles.ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}