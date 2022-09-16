
import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
    
const ProjectList = (props) => {
    const { removeFromDom } = props;

    const deleteProject = (projectId) => {
        axios.delete('http://localhost:8000/api/projects/' + projectId)
            .then(res => {
                removeFromDom(projectId)
            })
            .catch(err => console.error(err));
    }
    

    console.log(props.projects)
    const projectObj = props.projects; 
    return (
        <div>
            {projectObj.map( (projects, i) =>
            <p key={i}><Link to ={`/projects/${projects._id}`}>{projects.title}, {projects.price}, {projects.description}</Link><button onClick={(e)=>{deleteProject(projects._id)}}> squash this beef</button></p>
            )}
        </div>
    )
}
    
export default ProjectList;