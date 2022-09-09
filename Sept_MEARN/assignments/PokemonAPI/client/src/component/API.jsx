import React, {useState, useEffect} from 'react';
import axios from 'axios';



const API =() =>{
    const [pokemon, setpokemon] = useState([]);
    let [buttonClicked, setButtonClicked] = useState(false)
    

    useEffect(()=>{   
        console.log("Test TEST")
        axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then(response =>{
            console.log(response.data.results)
            setpokemon((response.data.results))
        })
    },[buttonClicked])
        
    return(
        <div>
            <button onClick={()=>{setButtonClicked(!buttonClicked)}}> Get Pokemon</button>
            
            {buttonClicked ?
            pokemon.map((item, idx)=>{
                return (<div key={idx}>{item.name}</div>)
            }):null
            }
        </div>
    );
}
export default API;