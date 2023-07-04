import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  CssBaseline,
  Drawer,
  Typography,
} from '@material-ui/core';
import {
  Apps,
  Menu,
  ContactMail,
  AssignmentInd,
  Home,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: '#511',
    height: '100%',
  },
  avatar: {
    margin: '0.5rem auto',
    padding: '1rem',
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: 'tan',
  },
}));

const listItems = [
  {
    listIcon: <Home />,
    listText: 'Favorites',
    path: '/',
  },
  {
    listIcon: <AssignmentInd />,
    listText: 'List',
    path: '/employes',
  },
  {
    listIcon: <Apps />,
    listText: '',
    path: '/',
  },
  {
    listIcon: <ContactMail />,
    listText: '',
    path: '/',
  },
];

const ResponsiveDrawer = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleSlider = () => {
    setOpen(!open);
  };
  const nodeRef = React.useRef(null);
  const sideList = () => (
    <Box   className={classes.menuSliderContainer} component="div">
      <Avatar
        className={classes.avatar}
        src="https://i.ibb.co/rx5DFbs/avatar.png"
        alt="Juaneme8"
      />
      <Divider />
      <List>
        {listItems.map((listItem, index) => (
          <Link key={index} to={listItem.path} style={{ textDecoration: 'none' }}>
            <ListItem className={classes.listItem} button key={index}>
              <ListItemIcon className={classes.listItem}>
                {listItem.listIcon}
              </ListItemIcon>
              <ListItemText primary={listItem.listText} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <CssBaseline  />

      <Box component="nav">
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={toggleSlider}>
              <Menu />
            </IconButton>
            <Typography>Portfolio</Typography>
            <Drawer open={open} anchor="right" onClose={toggleSlider}>
              {sideList()}
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default ResponsiveDrawer;
