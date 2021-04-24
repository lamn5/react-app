import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import './App.css';

import AppRouter from './routes'

function App() {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
      <Typography variant="h2">
              Welcome!
            </Typography>
        <AppRouter />
      </header>
    </div>
  );
}

export default App;
