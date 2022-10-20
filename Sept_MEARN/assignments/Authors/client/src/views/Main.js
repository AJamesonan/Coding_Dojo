import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Form from '../components/form';
import List from './list';

const Main = (props) => {
    const [ authors, setAuthors] = useState([]);
    const [ loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(res=>{
                setAuthors(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id != authorId));
    }

    return (
        <div>
        <h1>
            Main
        </h1>
        <Link to = {`/add/author`}>Add Author</Link>
            <hr/>
            {loaded && <List authors={authors} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default Main;