import './App.css';
import Users from "./components/user/users";
import Posts from "./components/post/posts";
import Comments from "./components/coment/comments";


function App() {
    return (
        <div>
            <div className={'blok-flex'}>
                <Users/>
                <Posts/></div>
            <Comments/>
        </div>
    );
}

export default App;
