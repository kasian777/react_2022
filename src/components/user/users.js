import {useEffect, useState} from "react";
import User from "../user/user";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))
    }, [])
    return (
        <div className={'user'}>
            {users.map(value => <User key={value.id} id={value.id} name={value.name}
                                      email={value.email} />
            )}
            {users.name}
        </div>
    )
}
export default Users;

