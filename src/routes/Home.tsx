import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Button from "@material-ui/core/Button";

const api = 'https://dbao82bnii.execute-api.us-east-2.amazonaws.com/prod';
const endpoint = '/createhackit';

type Hackit = {
    name: string,
    description: string,
}

const Home = () => {
    const [hackits, setHackits] = useState<Hackit[]>([]);

    const [newHackitName, setNewHackitName] = useState('');
    const [newHackitDesc, setNewHackitDesc] = useState('');

    const changeName = (event: any) => {
        setNewHackitName(event.target.value);
    }

    const changeDesc = (event: any) => {
        setNewHackitDesc(event.target.value)
    }

    const createHackit = (event: any) => {
        if (newHackitName && newHackitDesc) {
            const request = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: newHackitName,
                    description: newHackitDesc,
                })
            };

            fetch(api + endpoint, request)
                .then(response => response.json())
                .then(data => {
                    setHackits(data.hackits);
                })
        }
        setNewHackitDesc('');
        setNewHackitName('');
    }

    return (
        <div>
            {hackits.map((hackit) => {
                return(
                    <Link to={`/h/${hackit.name}`}>
                        <h5>
                            {hackit.name}
                        </h5>
                        <p>
                            {hackit.description}
                        </p>
                    </Link>
                )
            })}

            
            <p>
                Create a hackit!
            </p>
            <p>
                Name:
            </p>
            <input
                type="text"
                value={newHackitName}
                onChange={changeName}
            />
            <p>
                Description:
            </p>
            <input
                type="text"
                value = {newHackitDesc}
                onChange = {changeDesc}
            />
            <br />
            <Button onClick={createHackit}
                variant="contained" 
                color="primary"
            >
                Create Hackit
            </Button>
        </div>
    );
}

export default Home;