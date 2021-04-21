import React, { useState } from 'react';
import './App.css';

import AppRouter from './routes'

function App() {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome!
        </p>
        <AppRouter />
      </header>
    </div>
  );
}

export default App;
