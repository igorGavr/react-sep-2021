import {axiosInstance, axiosInstanceClear} from "./api.service";

//'https://pokeapi.co/api/v2/pokemons'

export const getPokemons = (limit, offset) => {
    return axiosInstance.get('/pokemon', {
        params: {limit: limit || 10, offset}
    });
}

export const getPokemon = (url) => {
    return axiosInstanceClear.get(url);
}

export const getPokemonByName = (name) => {
    return axiosInstance.get(`/pokemon/${name}`);
}
