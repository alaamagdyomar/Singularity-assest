import { useState } from "react";
import { useGlobalContext } from "../store/useGlobalContext";
import Router from "next/router";
import {
    Main,
    SearchForm,
    InputControl,
    Input,
    SubmitButton,
    SearchResults,
    PokemonName,
    AllPokemon,
    Card,
    CardImage,
    CardBody,
    NextButton
  } from '../styles/homeStyles';

export default function Home() {
  const {
    allPokemonData,
    searchResults,
    next,
    getPokemon,
    loading,
    realTimeSearch,
  } = useGlobalContext();

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
    realTimeSearch(search);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    realTimeSearch(search);
  };

  const displaySearchResults = () => {
    return searchResults.map((pokemon) => {
      return (
        <PokemonName
          key={pokemon.id}
          onClick={() => {
            Router.push(`/pokemon/${pokemon.name}`);
          }}
        >
          {pokemon.name}
        </PokemonName>
      );
    });
  };

  return (
    <Main>
      <SearchForm onSubmit={handleSearch}>
        <InputControl>
          <Input
            type="text"
            value={search}
            onChange={handleChange}
            placeholder="Search for a Pokemon..."
          />
          <SubmitButton type="submit">Search</SubmitButton>
        </InputControl>
      </SearchForm>

      {search && searchResults.length > 0 && (
        <SearchResults>{displaySearchResults()}</SearchResults>
      )}

      <AllPokemon>
        {allPokemonData ? (
          allPokemonData.map((pokemon) => (
            <Card
              key={pokemon.id}
              onClick={() => {
                Router.push(`/pokemon/${pokemon.name}`);
              }}
            >
              <CardImage>
                <img
                  src={pokemon.sprites.other.home.front_shiny}
                  alt={pokemon.name}
                />
              </CardImage>
              <CardBody>
                <h3>{pokemon.name}</h3>
                <p>More Details &nbsp; &rarr;</p>
              </CardBody>
            </Card>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </AllPokemon>

      <div>
        {allPokemonData.length > 0 && (
          <NextButton onClick={next}>Load More &darr;</NextButton>
        )}
      </div>
    </Main>
  );
}
