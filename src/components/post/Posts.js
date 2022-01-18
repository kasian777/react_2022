
import {useEffect, useState} from "react";
import Post from "./Post";
import {getPost} from "../../services/User.services";

const Posts = ({id}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPost(id).then(value => setPosts(value.data))
    }, [id])
    return (
        <div>
            {posts.map(value => <Post key={value.id} id={value.id} title={value.title} body={value.body} />)}

        </div>
    )
}
export  default  Posts   ;