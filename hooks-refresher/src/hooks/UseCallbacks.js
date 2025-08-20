import { useCallback, useState } from 'react';

import { Shuffle } from './shuffle';

import Search from './Search';

const allUsers = [
    'john',
    'alex',
    'george',
    'simon',
    'james',
    ];


    export default function Callback() {
    const [users, setUsers] = useState(allUsers);

    const handleSearch = useCallback( (text) => {
        console.log(users[0])
        const filteredUsers = allUsers.filter((user) => user.includes(text))

        setUsers(filteredUsers)
    }, [users])

    return (
        <div className='tutorial'>
        <div >
            <button onClick={() => setUsers(Shuffle(allUsers))}>
            Shuffle
            </button>

            <Search onChange={handleSearch} />
        </div>
        <ul>
            {users.map((user) => (
            <li key={user}>{user}</li>
            ))}
        </ul>
        </div>
    );
}