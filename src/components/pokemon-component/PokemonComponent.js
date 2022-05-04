import './PokemonComponent.css';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
} from "react-router-dom";

export function PokemonComponent(props) {
    let {item} = props; // props.item
    // console.log(item);
    return (
        <div className={'pokemon-card'}>
            {item.name}
            <br/>

            <Link to={'pokemon-details'} state={item}>pokemon details</Link>

        </div>
    );
}
