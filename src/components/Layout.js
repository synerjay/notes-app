import { Drawer, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const drawerWidth = 240;

const useStyles = makeStyles({
  page: {
    background: '#f9f9f9',
    width: '100%',
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
});

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* App Bar */}
      <div>App bar</div>

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
      </Drawer>
      <div className={classes.page}>{children} </div>
    </div>
  );
};

export default Layout;
