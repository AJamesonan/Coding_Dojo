
import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
    
const ProjectList = (props) => {
    console.log(props.projects)
    const projectObj = props.projects.projects; 
    return (
        <div>
            {projectObj.map( (projects, i) =>
            <p key={i}><Link to ={`/projects/${projects._id}`}>{projects.title}, {projects.price}, {projects.description}</Link></p>
            )}
        </div>
    )
}
    
export default ProjectList;