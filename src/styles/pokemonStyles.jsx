import styled from "styled-components";

export const PokemonBg = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 800px;
  transition: all 0.3s ease-in-out;
  border-radius: 12px;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.1);
  background: blue;
`;
    

export const PokemonImage = styled.div`
  display: flex;
  justify-content: center;
  height: 380px;

  img {
    width: 96%;
    object-fit: contain;
    filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.5));
  }
`;

export const PokemonBody = styled.div`
  padding: 2.5rem 3rem;

  h2 {
    padding: 0.5rem 0;
    font-size: 2.5rem;
    font-weight: 600;
    text-transform: capitalize;
    color: #fff;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 1rem;
    text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.1);
  }
`;

export const PokemonInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const PokemonInfoItem = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;

  h5 {
    font-size: 1.2rem;
    font-weight: 600;
    color: #fff;
    text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.1);
  }

  p {
    font-size: 1.2rem;
    font-weight: 500;
    color: #333;
  }
`;
