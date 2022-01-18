import './App.css';
import {useEffect, useState} from "react";

import {getUsers, getUser} from "./services/User.services";
import UserComponent from "./components/userComponents/UserComponent";
import Posts from "./components/post/Posts";


function App() {
    let [users, setUsers] = useState([])
    let [ChoosedUser, setChoosedUser] = useState(null)
    const [userId, setUserId] = useState(null)
    const [isPostView, setIsPostView] = useState(false)
    useEffect(() => {
        getUsers().then(value => setUsers(value.data))
    }, [])

    useEffect(() => {
        getUser(userId).then(value => setChoosedUser(value.data))
    }, [userId])

    const ChooseUser = (id) => {
        setUserId(id)
    }
    return (
        <div>
        <div className={'wrap'}>
            <div>
                {users.map(value => <UserComponent key={value.id} item={value} ChooseUser={ChooseUser}/>)}

            </div>
            <div>
                <h2>id:{ChoosedUser?.id}</h2>
                <h2>name:{ChoosedUser?.name}</h2>
                <h2>username:{ChoosedUser?.username}</h2>
                <h2>email:{ChoosedUser?.email}</h2>
                <h2>street:{ChoosedUser?.address.street}</h2>
                <h2>suite:{ChoosedUser?.address.suite}</h2>
                <h2>zipcode:{ChoosedUser?.address.zipcode}</h2>
                <h2>lat:{ChoosedUser?.address.geo.lat}</h2>
                <h2>lng:{ChoosedUser?.address.geo.lng}</h2>
                <button onClick={()=>setIsPostView(true)}>get post</button>

            </div>
        </div>
            {isPostView && <Posts id={userId}/>}
        </div>
    );
}

export default App;
