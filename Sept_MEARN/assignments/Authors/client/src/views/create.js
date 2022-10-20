import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate} from "react-router-dom";
import Form from "../components/form"

const Create = (props) => {
    const [authors, setAuthors] = useState(); 
    const [loaded, setLoaded]= useState(false)
    const navigate =useNavigate();
    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(res=>{
                setAuthors(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);
    
    const createNewAuthor =  author =>{
        axios.post('http://localhost:8000/api/author',  author)
        .then(res=>{
            setAuthors([...authors,res.data]);
            navigate('/');
        })
    }
    
    return (
        <div>
            <h1>Create an Author</h1>
            { loaded && (
            <Form onSubmitProp={createNewAuthor} initialTitle={authors.author} />
        )}
        </div>
    )
}
    
export default Create;