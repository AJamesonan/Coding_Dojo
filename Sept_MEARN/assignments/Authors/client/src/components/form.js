import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Form = (props) => {
    //keep track of what is being typed via useState hook
    const [author, setAuthor] = useState(""); 
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        
        axios.post('http://localhost:8000/api/authors', {
            author,
        })
            .then(res=>{
                console.log(res)
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

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(navigate('/'))
    }

    //onChange to update author and price
    return (
        <div>
        {errors.map((err, index) => <p key={index}>{err}</p>)}
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Author</label><br/>
                <input type="text" onChange={(e)=>setAuthor(e.target.value)} value={author}/>
            </p>
            <input type="submit" value="new post"/>
        <div>
            <Link to={`/authors/update/${author._id}`}>Update</Link>|<button onClick={(e)=>{deleteAuthor(author._id)}}> squash this beef</button>
        </div>
        </form>
        </div>
    )
}
export default Form;