import './Pokemons.css';
import {getPokemons} from "../../services";
import {useEffect, useState} from "react";
import {PokemonComponent} from "../../components/pokemon-component/PokemonComponent";
import {Outlet} from "react-router-dom";

export function Pokemons() {
    let [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        getPokemons().then(value => {
            let {data: {results}} = value;
            setPokemons(results);
        });
    }, []);

    return (
        <div>
            <Outlet/>
            <div className={'pokemons-list'}>
                {
                    pokemons.map((pokemonItem) => <PokemonComponent key={pokemonItem.name} item={pokemonItem}/>)

                }


            </div>

        </div>
    );
}
