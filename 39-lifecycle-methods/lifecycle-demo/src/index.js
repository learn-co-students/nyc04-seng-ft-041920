import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// RM'd StrictMode:
/*
  https://kentcdodds.com/blog/react-strict-mode
  Another thing that React Strict Mode does is run certain callbacks/methods twice (in DEV mode ONLY). You read that right! The following callbacks/methods will be run twice in Strict Mode (in DEV mode ONLY):

  - Class component constructor method
  - The render method (includes function components)
  - setState updater functions (the first argument)
  - The static getDerivedStateFromProps lifecycle
  - The React.useState state initializer callback function
  - The React.useMemo callback
*/
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
