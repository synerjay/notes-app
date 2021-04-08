import {
  AppBar,
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { format } from 'date-fns';

const drawerWidth = 240;

// We can access the built-in theme properties of material UI and tweak some properties to fit our needs
// the 'theme' can be access by making the makeStyles into a function that returns the style properties
// theme properties can be access by object access (theme.spacing)
const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: '#F9F9F9F9',
      width: '100%',
      padding: theme.spacing(3),
    },
    root: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    active: {
      background: '#f4f4f4',
    },
    title: {
      padding: theme.spacing(3),
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`, // this will prevent the appbar from hiding the side
    },
    date: {
      flexGrow: 1, // giving flexgrow to Typography with classes date will push and give space as much as possible to the next possible element
    },
    toolbar: theme.mixins.toolbar, // mixin is a collection of styles uses by material UI components - get the classes from the toolbar
    avatar: {
      marginLeft: theme.spacing(2),
    },
  };
});

const Layout = ({ children }) => {
  const classes = useStyles();
  const history = useHistory(); // this hook with .push method redirects user to another path -- similar to Link component or hyperlinks
  const location = useLocation(); // this hook with .pathname method tells the current path of the user

  const menuItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined color='secondary' />,
      path: '/',
    },
    {
      text: 'Create Note',
      icon: <AddCircleOutlineOutlined color='secondary' />,
      path: '/create',
    },
  ];

  return (
    <div className={classes.root}>
      {/* App Bar */}
      <AppBar elevation={0} className={classes.appbar}>
        {/* Toolbar is where we put text, icons, logos on the Appbar */}
        <Toolbar>
          <Typography className={classes.date}>
            {' '}
            Today is {format(new Date(), 'MMMM do Y')}
          </Typography>
          <Typography>Mario</Typography>
          <Avatar className={classes.avatar} src='/mario-av.png' />
        </Toolbar>
      </AppBar>

      {/* "Permanent" Side Drawer */}
      <Drawer
        className={classes.drawer}
        variant='permanent'
        classes={{ paper: classes.drawerPaper }}
        anchor='left'
      >
        <div>
          <Typography variant='h5' className={classes.title}>
            Ninja Notes
          </Typography>
        </div>

        {/* Links/List section */}
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => history.push(item.path)}
              className={location.pathname == item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/* Make a div with class toolbar to prevent the toolbar from hiding the children. THINK OF THE CHILDREN! */}
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
