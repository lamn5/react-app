import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid';
import LockRoundedIcon from '@material-ui/icons/LockRounded';






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
        <div >
        <Grid container spacing={1} alignItems="flex-end" >
          <Grid item>
            <AccountCircleRoundedIcon />
          </Grid>
          <Grid item>
            <TextField 
            id="input-with-icon-grid" 
            label="Username" 
            color = "secondary"
            type="text"
            value={username} 
            onChange={changeUsername}/>
          </Grid> 
        </Grid>
        </div>
        <br />
        <div >
        
        <Grid container spacing={1} alignItems="flex-end" >
          <Grid item>
            <LockRoundedIcon />
          </Grid>
          <Grid item>
            <TextField
            variant="standard"
            id="input-with-icon-grid" 
            label="Password" 
            color = "secondary"
            type="password" 
            value={password}
            onChange={changePassword}/
            >
          </Grid> 
        </Grid>
        </div>

        <br />
        <Button onClick={handleClick}
            variant= "contained"
            color="secondary"
        >
          Sign In
        </Button>
    </div>
    );
}

export default SignIn;