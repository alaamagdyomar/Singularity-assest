// src/components/PokemonCard.js
import React from "react";
import Router from "next/router";

const PokemonCard = ({ pokemon }) => {
    return (
        <div
            className="card"
            onClick={() => Router.push(`/pokemon/${pokemon.name}`)}
        >
            <div className="card-image">
                <img src={pokemon.sprites.other.home.front_shiny} alt={pokemon.name} />
            </div>
            <div className="card-body">
                <h3>{pokemon.name}</h3>
                <p>More Details &nbsp; &rarr;</p>
            </div>
        </div>
    );
};

export default PokemonCard;
