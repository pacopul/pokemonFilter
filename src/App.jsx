import { useState, useEffect } from 'react';
import header from './assets/header.jpeg';
import './App.css';
import PokemonCard from './components/PokemonCard';
import { fetchPokemons } from './service/pokemonService';
import Search from './components/Search';


const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
    useEffect(() => {
    fetchPokemons()
      .then(pokemons => {
        setPokemons(pokemons); 
        setFilteredPokemons(pokemons);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
    // Esta función se pasa a Search para filtrar pokemons
  const handleSearch = (query) => {
    if (!query) {
      setFilteredPokemons(pokemons);
    } else {
      setFilteredPokemons(
        pokemons.filter(pokemon =>
          pokemon.name.toLowerCase().startsWith(
            query.toLowerCase())
        )
      );
    }
  };

  return (
    <div class="container shadow p-0">
      <header className="header-bg">
        <img src={header} alt="header" class="w-100" />
      </header>
      <div className="row justify-content-center pt-3">
        <div className="col-10 col-sm-8 col-md-6 col-xl-4">
          <Search onSearch={handleSearch} />
        </div>
      </div>
      <div class="row p-3 justify-content-center">
        {filteredPokemons.map((pokemon) => (
          <div class="col-md-6 col-lg-4 mb-3">
            <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
          </div>
        ))}
      </div>
      <footer className='footer-bg'>
        <h1>© 2025 Pokédex App</h1>
      </footer>
    </div>
  );
};
export default App;
