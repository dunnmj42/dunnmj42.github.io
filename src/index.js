import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App.jsx';

// MUI
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

// Theme/Palette/Font declaration
const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

ReactDOM.render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>,
  document.getElementById('react-root')
);
