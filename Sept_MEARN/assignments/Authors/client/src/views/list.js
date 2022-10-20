
import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
    
const List = (props) => {
    const { removeFromDom } = props;

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => {
                removeFromDom(authorId)
            })
            .catch(err => console.error(err));
    }
    

    console.log(props.authors)
    const authorObj = props.authors; 
    return (
        <div>
            {authorObj.map( (authors, i) =>
            <p key={i}>
                <Link to ={`/authors/${authors._id}`}>{authors.author}</Link>
                <button onClick={(e)=>{deleteAuthor(authors._id)}}> squash this beef</button>
            </p>
            )}
        </div>
    )
}
    
export default List;