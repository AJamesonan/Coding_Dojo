import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Navigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Detail = (props) => {
    const [project, setProject] = useState({})
    const { id } = useParams();

    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:8000/api/projects/'+id)
            .then(res => setProject(res.data))
            .catch(err => console.error(err));
    }, []);
    console.log("project data" + project)

    const deleteProject = (projectId) => {
        axios.delete('http://localhost:8000/api/projects/' + projectId)
            .then(navigate('/'))
    }

    return (
        <div>
            <h1>Project:</h1>
            {/* <p><a href=''>{project.title}</a></p> */}

            <p>Title: {project.title}</p>
            <p>Price: {project.price}</p>
            <p>Description: {project.description}</p>
            <Link to={`/projects/update/${project._id}`}>Update</Link>|<button onClick={(e)=>{deleteProject(project._id)}}> squash this beef</button>
        </div>
    )
}

export default Detail;

