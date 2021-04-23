import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from "@material-ui/core/Button";

const api = 'https://dbao82bnii.execute-api.us-east-2.amazonaws.com/prod';
const endpoint = '/signin';

const SignIn = () => {
    const history = useHistory();

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
            const request = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                })
            };

            fetch(api + endpoint, request)
                .then(response => response.json())
                .then(data => {
                    if (data.signedIn) {
                        history.push('/home');
                    }
                })
        }
    }

    return(
        <div>
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
        <Button onClick={handleClick}
            variant="contained" 
            color="primary"
        >
          Sign In
        </Button>
        </div>
    );
}

export default SignIn;