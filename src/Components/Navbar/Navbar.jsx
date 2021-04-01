// React
import React, { useState } from "react";

// MUI
import { makeStyles, AppBar, Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

// Custom Component
import LinkDrawer from "../LinkDrawer/LinkDrawer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function Navbar() {
  // Drawer open state
  const [open, setOpen] = useState(false);

  // Hooks
  const classes = useStyles();

  // Drawer open handler
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <LinkDrawer open={open} setOpen={setOpen} />
    </div>
  );
}
