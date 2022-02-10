import './Pokemons.css';
import {getPokemons} from "../../services";
import {useEffect, useState} from "react";
import {PokemonComponent} from "../../components/pokemon-component/PokemonComponent";
import {Outlet} from "react-router-dom";

export function Pokemons() {
    let [pokemons, setPokemons] = useState([]);
    let [offset, setOffset] = useState(0);

    let [pagesCounter, setPagesCounter] = useState(0);


    useEffect(() => {
        let limit = 10;
        getPokemons(limit, offset).then(value => {
            let {data: {results, count}} = value;
            setPokemons(results);
            setPagesCounter(Math.ceil(count / limit));
        });
    }, [offset]);

    const pagesNumbersCreator = () => {
        let pageNumbers = []
        for (let i = 0; i < pagesCounter; i++) {
            pageNumbers.push(i + 1);
        }
        return pageNumbers;
    }

    return (
        <div>
            <Outlet/>
            <div className={'pokemons-list'}>
                {
                    pokemons.map((pokemonItem) => <PokemonComponent key={pokemonItem.name} item={pokemonItem}/>)
                }


            </div>

            <button onClick={() => {
                offset -= 10;
                setOffset(offset);
            }}>prev
            </button>

            <button onClick={() => {
                offset += 10;
                setOffset(offset);

            }}>next
            </button>

            <div>

                {
                    pagesNumbersCreator().map(value => <span key={value}> {value}</span>)
                }
            </div>

        </div>
    );
}
