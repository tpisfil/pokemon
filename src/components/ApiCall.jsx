import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ApiCall = props => {
    const [pokemon, setPokemon] = useState([]);

    const getPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then(res => {
            setPokemon(res.data.results)
            console.log(res.data.results)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return(
        <div>
            <h3>This is coming from my API component</h3>

            <button onClick={getPokemon}>Fetch It</button>

            {
                pokemon.map(poke => (
                    <h3>{poke.name}</h3>
                ))
            }
        </div>
    );
}

export default ApiCall;