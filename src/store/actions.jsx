export const LOADING = "LOADING";
export const GET_POKEMON = "GET_POKEMON";
export const GET_ALL_POKEMON = "GET_ALL_POKEMON";
export const GET_SEARCH = "GET_SEARCH";
export const GET_POKEMON_DATABASE = "GET_POKEMON_DATABASE";
export const NEXT = "NEXT";

export const setLoading = () => ({ type: LOADING });
export const getAllPokemon = (payload) => ({ type: GET_ALL_POKEMON, payload });
export const getPokemonSuccess = (payload) => ({ type: GET_POKEMON, payload });
export const getPokemonDatabase = (payload) => ({ type: GET_POKEMON_DATABASE, payload });
export const getNextPokemon = (payload) => ({ type: NEXT, payload });
export const getSearchResults = (payload) => ({ type: GET_SEARCH, payload });
