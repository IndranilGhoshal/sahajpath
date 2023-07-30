import React from 'react'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import { Link, Outlet, useNavigate } from 'react-router-dom'
import { Accordion, AccordionDetails, AccordionSummary, Button } from '@mui/material';
import { hideLoader, showLoader } from '../../Services/common';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));



export default function Layout() {

  const navigate = useNavigate()

  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const logout = () => {
    sessionStorage.clear()
    loader()
    navigate("/login")
  }

  const loader = () =>{
    showLoader()
    setTimeout(() => {
      hideLoader()
    }, 1000);
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Sahajpath Career Solution
          </Typography>

          <span style={{ flex: '1' }}></span>
          <button className='btn btn-dark' onClick={logout}><i class="icofont-logout"></i> Logout</button>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <Accordion>
            <AccordionSummary>
              <Link onClick={loader} to='/admin/dashboard'><i class="icofont-dashboard-web"></i> Dashboard</Link>
            </AccordionSummary>
          </Accordion>
          <Accordion>
            <AccordionSummary>
              <Typography><i class="icofont-file-alt"></i> Set Admission Details</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Link onClick={loader} to='/admin/setsession'><i class="icofont-arrow-right"></i> Set Session</Link>
            </AccordionDetails>
            <AccordionDetails>
              <Link onClick={loader} to='/admin/setcourseapplied'> <i class="icofont-arrow-right"></i> Set Course</Link>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>
              <Link onClick={loader} to='/admin/registrationlist'><i class="icofont-file-document"></i> Registration List</Link>
            </AccordionSummary>
          </Accordion>
          <Accordion>
            <AccordionSummary>
              <Typography><i class="icofont-copy-invert"></i> Enquiry Details</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Link onClick={loader} to='/admin/enquirylist'> <i class="icofont-arrow-right"></i> Pending Enquiry</Link>
            </AccordionDetails>
            <AccordionDetails>
              <Link onClick={loader} to='/admin/enquiryAcceptlist'><i class="icofont-arrow-right"></i> Accepted Enquiry</Link>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>
              <Link onClick={loader} to='/admin/studynotes'><i class="icofont-dashboard-web"></i> Study Notes</Link>
            </AccordionSummary>
          </Accordion>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Outlet />
      </Main>
    </Box>
  );
}
