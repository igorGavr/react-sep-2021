import {axiosInstance, axiosInstanceClear} from "./api.service";

//'https://pokeapi.co/api/v2/pokemons'

export const getPokemons = () => {
    return axiosInstance.get('/pokemon', {
        params: {limit: '100'}
    });
}

export const getPokemon = (url) => {
    return axiosInstanceClear.get(url);
}
