import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Navbar from '../Navbar/Navbar'

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <header className={classes.title}>
      <Typography variant="h2" component="h1" gutterBottom>
        Michael Dunn
      </Typography>
      </header>
    </div>
  );
}
