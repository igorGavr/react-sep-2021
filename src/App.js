import {
    Routes, Route, Link
} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Users from "./pages/Users";
import Posts from "./pages/Posts";
import Comments from "./pages/Comments";
import UserDetails from "./pages/UserDetails";
import PostsOfUser from "./pages/PostsOfUser";

function App() {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/layout'}>Layout</Link></li>
            </ul>


            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/layout'} element={<Layout/>}>
                    <Route path={'users'} element={<Users/>}>
                        <Route path={':id'} element={<UserDetails/>}/>
                        <Route path={':id/posts'} element={<PostsOfUser/>}/>
                    </Route>
                    <Route path={'posts'} element={<Posts/>}/>
                    <Route path={'comments'} element={<Comments/>}/>
                </Route>

            </Routes>

        </div>
    );
}

export default App;
