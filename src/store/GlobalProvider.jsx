// src/store/GlobalProvider.js
import React, { createContext, useContext, useReducer, useEffect, useState } from "react";
import { reducer } from "./reducer";
import { setLoading, getAllPokemon, getPokemonSuccess, getPokemonDatabase, getNextPokemon } from "./actions";
import { debounce } from "lodash-es";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const baseUrl = "https://pokeapi.co/api/v2/";
  const initialState = {
    allPokemon: [],
    pokemon: {},
    pokemonDataBase: [],
    searchResults: [],
    next: "",
    loading: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [allPokemonData, setAllPokemonData] = useState([]);

  // Functions to interact with API
  const allPokemon = async () => {
    dispatch(setLoading());
    const res = await fetch(`${baseUrl}pokemon?limit=20`);
    const data = await res.json();
    dispatch(getAllPokemon(data));

    // Fetch character data
    const allPokemonData = await Promise.all(data.results.map(async (pokemon) => {
      const pokemonRes = await fetch(pokemon.url);
      return await pokemonRes.json();
    }));
    setAllPokemonData(allPokemonData);
  };

  const getPokemon = async (name) => {
    dispatch(setLoading());
    const res = await fetch(`${baseUrl}pokemon/${name}`);
    const data = await res.json();
    dispatch(getPokemonSuccess(data));
  };

  const loadPokemonDatabase = async () => {
    dispatch(setLoading());
    const res = await fetch(`${baseUrl}pokemon?limit=100000&offset=0`);
    const data = await res.json();
    dispatch(getPokemonDatabase(data.results));
  };

  const next = async () => {
    dispatch(setLoading());
    const res = await fetch(state.next);
    const data = await res.json();
    dispatch(getNextPokemon(data));
  };

  const realTimeSearch = debounce(async (search) => {
    const res = state.pokemonDataBase.filter(pokemon => pokemon.name.includes(search.toLowerCase()));
    dispatch(getSearchResults(res));
  }, 500);

  // Initial fetch
  useEffect(() => {
    loadPokemonDatabase();
    allPokemon();
  }, []);

  return (
    <GlobalContext.Provider value={{ ...state, allPokemonData, getPokemon, realTimeSearch, next }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
