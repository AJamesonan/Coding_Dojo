import React, {useState} from 'react';

const API =() =>{
    const [pokemon, setpokemon] = useState([]);

    const fetchData=()=>{
        console.log("Test TEST")
        fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(response =>{
            return response.json()
        })
        .then((response)=>{
            console.log(response)
            setpokemon(response.results)
            console.log(response.results)
        })
        .catch((err)=>{
            console.log("catch all cought: ", err)
        })
    }
    return(
        <div>
            <button onClick={fetchData}> Get Pokemon</button>
            {pokemon.map((item, idx)=>{
                return (<div key={idx}>{item.name}</div>)
            })}
        </div>
    );
};
export default API;