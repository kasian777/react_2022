import './App.css';
import {useEffect, useState} from "react";
import {getUsers,getUser} from "./services/User.services";

import UserComponent from "./components/userComponents/UserComponent";

function App() {
    let [users, setUsers] = useState([])
    let [ChoosedUser, setChoosedUser] = useState(null)
    useEffect(() => {
        getUsers().then(value => setUsers(value.data))
    }, [])
    const ChooseUser = (id) => {
        getUser(id).then(value => setChoosedUser(value.data))
    }
    return (<div className={'wrap'}>
            <div>
                {users.map(value => <UserComponent key={value.id} item={value} ChooseUser={ChooseUser}/>)}

            </div>
            <div>{ChoosedUser?.name}</div>
            {/*{ChoosedUser && (<div>{user.name}</div>)}*/}
        </div>
    );
}

export default App;
