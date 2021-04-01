// React, Redux, Router
import React from "react";

// MUI
import { 
  makeStyles,
  SwipeableDrawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton, 
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

// MUI style
const useStyles = makeStyles((theme) => ({

}));

export default function LinkDrawer({ open, setOpen }) {

  // Hooks
  const classes = useStyles();

  // Link list for drawer - pushes the user to places
  const linkList = [
    {
      text: "Home",
      icon: <AccountCircleIcon />,
      onClick: () => console.log('clicked'),
    },
    {
      text: "Resume",
      icon: <AccountCircleIcon />,
      onClick: () => console.log('clicked'),
    },
    {
      text: "Portfolio",
      icon: <AccountCircleIcon />,
      onClick: () => console.log('clicked'),
    },
  ];

  // Drawer open
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  // Drawer close
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onOpen={handleDrawerOpen}
        onClose={handleDrawerClose}
        onClick={handleDrawerClose}
      >
        <div>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {linkList.map((item, i) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem button key={i} onClick={onClick}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
      </SwipeableDrawer>
    </>
  );
}
