import './App.css'
import { useState, useEffect } from "react";
import Card from './card'

function App() {
  const [pokeName, setPokeName] = useState([]);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      const listRes = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const listData = await listRes.json();
    
      if (!listData?.results?.length) return;

      const Name = listData.results.map(p => p.name);
      const detailUrls = listData.results.map(p => p.url);

      setPokeName(Name);
      console.log("details: ", detailUrls);
      
      
      const detailPromises = detailUrls.map(url => fetch(url).then(res => res.json()));
      console.log("details Promise: ", detailPromises );

      console.log("details Promise object: ", detailPromises?.object );
      
      const allPokemonsData = await Promise.all(detailPromises);
      console.log("allpoke... ", allPokemonsData[3]);


      const images = allPokemonsData.map(p =>
        p?.sprites?.other?.home?.front_default
      );
    
      setPokemons(images);

      
      
      // const urls = allPokemonsData[0]?.sprites;
      // console.log("url, ", urls.other.home.front_default);
      

      // const imageUrls = allPokemonsData.map(p => p.sprites.other['official-artwork'].front_default);
      // setPokemons("link...   ",imageUrls);

    
      // setPokemon(listData);

      // console.log("All Pokemon Data Fetched:", pokemons);

    }
    fetchPokemon();
  }, []);


  let cards = [];

  for (let i = 0; i < pokemons.length; i++) {
    cards.push(
      <Card 
        key={i}
        number = {i+1}
        pName = {pokeName[i]}
        currentImg={pokemons[i]}
      />
    );
  }


  return (
    <>
      <div className='bg-cyan-50'>
        <div className=' text-cyan-500 text-center text-4xl p-2' >Pokemon Guidebook</div>
        <div className=' bg-cyan-500 text-white mx-3 py-2 flex items-center justify-center gap-2 text-3xl p-1' >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" fill="currentColor" class="bi bi-funnel-fill" viewBox="0 0 16 16">
              <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z"/>
            </svg>  
            Search
        </div>
        {
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-x-5 gap-y-7 p-3">
          {cards}  
        </div> 
        }
      </div>
    </>
  )
}

export default App
