import React, { useEffect } from "react";
import { useGlobalContext } from "../../store";
import { useRouter } from "next/router";
import Loading from "../../components/Loading";
import { PokemonBg, PokemonImage, PokemonBody, PokemonInfo, PokemonInfoItem } from '../../styles/pokemonStyles';

function Pokemon() {
  const router = useRouter();
  const { pokemon } = router.query;
  const { getPokemon, loading, pokemon: pokemonItem } = useGlobalContext();

  useEffect(() => {
    if (pokemon) {
      getPokemon(pokemon);
    }
  }, [pokemon]);

  let myLink = "";
  if (pokemonItem?.sprites?.other) {
    const { "official-artwork": link } = pokemonItem?.sprites?.other;
    myLink = link.front_default;
  }

   return (
    <PokemonBg loading={String(loading)} >
      {!loading ? (
        pokemonItem && (
          <>
            <PokemonImage>
              <img
                src={
                  pokemonItem?.sprites?.other?.home.front_default
                    ? pokemonItem?.sprites?.other?.home.front_default
                    : myLink
                }
                alt={`${pokemonItem?.name} sprite`}
              />
            </PokemonImage>
            <PokemonBody>
              <h2>{pokemonItem?.name}</h2>
              <PokemonInfo>
                <PokemonInfoItem>
                  <h5>Name:</h5>
                  <p>{pokemonItem?.name}</p>
                </PokemonInfoItem>

                <PokemonInfoItem>
                  <h5>Type:</h5>
                  {pokemonItem?.types?.map((type) => (
                    <p key={type.type.name}>{type.type.name}</p>
                  ))}
                </PokemonInfoItem>

                <PokemonInfoItem>
                  <h5>Height:</h5>
                  <p>{pokemonItem?.height}</p>
                </PokemonInfoItem>

                <PokemonInfoItem>
                  <h5>Abilities:</h5>
                  {pokemonItem?.abilities?.map((ability) => (
                    <p key={ability.ability.name}>{ability.ability.name}</p>
                  ))}
                </PokemonInfoItem>

                <PokemonInfoItem>
                  <h5>Stats:</h5>
                  {pokemonItem?.stats?.map((stat) => (
                    <p key={stat.stat.name}>{stat.stat.name}</p>
                  ))}
                </PokemonInfoItem>

                <PokemonInfoItem>
                  <h5>A few moves:</h5>
                  {pokemonItem?.moves?.slice(0, 3).map((move) => (
                    <p key={move.move.name}>{move.move.name}</p>
                  ))}
                </PokemonInfoItem>
              </PokemonInfo>
            </PokemonBody>
          </>
        )
      ) : (
        <Loading />
      )}
    </PokemonBg>
  );
}

export default Pokemon;
