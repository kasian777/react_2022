import './App.css';
import Users from "./components/user/user";
import Post from "./components/post/posts";
import Comment from "./components/coment/comment";

function App() {
  return (
    <div>
      <Users/>
        <Posts/>
        <Comments/>
    </div>
  );
}

export default App;
