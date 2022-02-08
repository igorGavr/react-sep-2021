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
            </ul>

            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/pokemons-page'} element={<Pokemons/>}>
                    <Route path={'pokemon-details'} element={<Pokemon/>}/>
                </Route>
            </Routes>

        </div>
    );
}

export default App;
