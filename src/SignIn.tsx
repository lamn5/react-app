import React, { useState } from 'react';

type Props = {
    myNum: number,
    setSignedIn: (b: boolean) => void,
}

const SignIn = (props: Props) => {
    const { myNum, setSignedIn } = props;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const changeUsername = (event: any) => {
        setUsername(event.target.value);
    }

    const changePassword = (event: any) => {
        setPassword(event.target.value)
    }

    const handleClick = () => {
        if (username && password){
            setSignedIn(true);
        }
    }

    return(
        <div>
        <p>
            {myNum}
        </p>
        <p>
          Username:
        </p>
        <input 
        type="text" 
        value={username} 
        onChange={changeUsername} 
        />
        <p>
            {username}
        </p>
        <p>
          Password:
        </p>
        <input 
        type="password" 
        value={password}
        onChange={changePassword}
        />
        <p>
            {password}
        </p>
        <br />
        <button onClick={handleClick}>
          Sign In
        </button>
        </div>
    );
}

export default SignIn;