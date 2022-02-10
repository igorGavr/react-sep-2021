import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
} from "react-router-dom";
import {Home} from "./pages/home/Home";
import {Pokemons} from "./pages/pokemons/Pokemons";
import {Pokemon} from "./pages/pokemon/Pokemon";
import {Search} from "./pages/search/Search";

function App() {
    return (
        <div>
            <ul>
                <li>
                    <Link to={'/'}>home</Link>
                </li>
                <li>
                    <Link to={'/pokemons-page'}>pokemons</Link>
                </li>
                <li>
                    <Link to={'/search'}>search pokemon</Link>
                </li>
            </ul>

            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/pokemons-page'} element={<Pokemons/>}>
                    <Route path={'pokemon-details'} element={<Pokemon/>}/>
                </Route>
                <Route path={'/search'} element={<Search/>}/>
            </Routes>

        </div>
    );
}

export default App;
