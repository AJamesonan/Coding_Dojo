import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const People = () => {
    const [data, setData] = useState({});

    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}/?format=json`)
            .then((res) => {
                console.log(res.data)
                setData(res.data)
            })
            .then(() => { })
            .catch((err) => {
                console.error(err);
                setData({ error: "These are not the driods you are looking for!" })
            })
    }, [id])

    return data.error ? (
        <h1>{data.error}</h1>
    ) : (
        <div>
        <div>People</div>
        <h4>{data.name}</h4>
        <p>{data.hair_color}</p>
        <p>{data.mass}</p>
        <p>{data.birth_year}</p>
        </div>
    )
}

export default People;