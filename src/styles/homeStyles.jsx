import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  background-color: #fff;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.04);
`;

export const InputControl = styled.div`
  position: relative;
  width: 37rem;
  margin-bottom: 2rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem 2rem;
  outline: none;
  border-radius: 12px;
  background-color: #fafafa;
  font-family: inherit;
  font-size: inherit;
  font-weight: 500;
  color: #333;
  transition: all 0.3s ease;
  border: 2px solid #fafafa;

  &:focus {
    border: 2px solid #7263f3;
  }

  &::placeholder {
    color: #333;
    opacity: 0.3;
  }
`;

export const SubmitButton = styled.button`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  background-color: #7263f3;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  font-weight: 500;
  color: #fff;
  transition: all 0.3s ease;
`;

export const SearchResults = styled.div`
  position: absolute;
  height: 14rem;
  width: 37rem;
  top: 12%;
  left: 50%;
  overflow: auto;
  transform: translateX(-50%);
  z-index: 5;
  padding: 1rem 1.2rem;
  border-radius: 12px;
  background-color: white;
  box-shadow: 3px 4px 15px rgba(0, 0, 0, 0.2);
`;

export const PokemonName = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.2rem;
  font-weight: 500;
  color: #333;
  text-transform: capitalize;

  &:hover {
    background-color: #f0f0f0;
    color: #7263f3;
  }
`;

export const AllPokemon = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  margin: 3rem 15rem;
  padding: 1rem; 
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(33.333% - 2rem); // Subtract the total horizontal padding/margin
    margin: 1rem;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.04);
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
    }
`;

export const CardImage = styled.div`
  height: 250px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background-color: #fff;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
  }
`;

export const CardBody = styled.div`
  padding: 1rem;
  height: 200px;
  background-color: #fafafa;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-size: 1.4rem;
    color: #333;
    text-transform: capitalize;
  }

  p {
    color: #7263f3;
    font-weight: 500;
    font-size: 1.1rem;
    opacity: 0.68;
  }
`;

export const NextButton = styled.button`
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.04);
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  font-weight: 500;
  color: #7263f3;
  transition: all 0.3s ease;

  &:hover {
    color: #333;
  }
`;
