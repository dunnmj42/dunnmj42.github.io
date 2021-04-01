import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import NavBar from '../NavBar/NavBar'

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <div>
      <NavBar />
      <header className={classes.title}>
      <Typography variant="h2" component="h1" gutterBottom>
        Michael Dunn
      </Typography>
      <Typography variant="h4" gutterBottom>
        Future Home of Portfolio Site
      </Typography>
      </header>
    </div>
  );
}
