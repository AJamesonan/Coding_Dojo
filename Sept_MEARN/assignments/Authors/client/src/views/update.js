import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
    
const Update = (props) => {
    const { id } = useParams();
    const [author, setAuthor] = useState(""); 
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                console.log(res.data)
                setAuthor(res.data.author);
            })
    }, []);
    
    const updateAuthor = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/authors/' + id, {
            author,
        })
            .then(res => {
                console.log(res)
                console.log(res.data.author)
                navigate('/')
            })
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }
    
    return (
        <div>
            <h1>Update Author</h1>
            <form onSubmit={updateAuthor}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
                <p>
                    <label>Author:</label><br />
                    <input type="text" 
                    name="author" 
                    value={author} 
                    onChange={(e) => { setAuthor(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
    
export default Update;
