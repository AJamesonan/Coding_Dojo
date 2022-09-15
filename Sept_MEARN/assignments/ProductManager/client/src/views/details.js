import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
    
const Detail = (props) => {
    const [project, setProject] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/projects/' +id)
            .then(res => setProject(res.data))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div>
        <h1>Project:</h1>
        {/* <p><a href=''>{project.title}</a></p> */}

            <p>Title: {project.title}</p>
            <p>Price: {project.price}</p>
            <p>Description: {project.description}</p>
        </div>
    )
}
    
export default Detail;

