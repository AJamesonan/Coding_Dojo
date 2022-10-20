import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Navigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Detail = (props) => {
    const [author, setAuthor] = useState({})
    const { id } = useParams();

    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/'+id)
            .then(res => setAuthor(res.data))
            .catch(err => console.error(err));
    }, []);
    console.log("author data" + author)

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(navigate('/'))
    }

    return (
        <div>
            <h1>Author:</h1>
            {/* <p><a href=''>{author.title}</a></p> */}

            <p>Author: {author.author}</p>

            <Link to={`/authors/update/${author._id}`}>Update</Link>|<button onClick={(e)=>{deleteAuthor(author._id)}}> squash this beef</button>
        </div>
    )
}

export default Detail;
