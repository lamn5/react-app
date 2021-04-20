import React, { useState } from 'react';
import './App.css';

import SignIn from './SignIn';

function App() {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome!
        </p>
        {!signedIn ? (
          <SignIn />
        ) : (
          <p>
            You're signed in!
          </p>
        )}
      
      </header>
    </div>
  );
}

export default App;
