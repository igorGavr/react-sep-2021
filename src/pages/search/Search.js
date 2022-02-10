import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {getPokemonByName} from "../../services";
import {PokemonComponent} from "../../components/pokemon-component/PokemonComponent";

export function Search() {
    const {register, handleSubmit} = useForm();
    let [pokemon, setPokemon] = useState(null);

    const xxx = ({pokemonName}) => {
        getPokemonByName(pokemonName.toLowerCase()).then(({data}) => setPokemon({...data}));

    };


    return (

        <div>
            <form onSubmit={handleSubmit(xxx)}>
                <input type="text" {...register('pokemonName')}/>
                <button>search poke</button>
            </form>

            {
                pokemon && <PokemonComponent item={pokemon}/>
            }
        </div>
    )
        ;
}
