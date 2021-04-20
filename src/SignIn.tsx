import React from 'react';

const SignIn = () => {
    return(
        <div>
        <p>
          Username:
        </p>
        <input type="text" />
        <p>
          Password:
        </p>
        <input type="password" />
        <br />
        <button>
          Sign In
        </button>
        </div>
    );
}

export default SignIn;