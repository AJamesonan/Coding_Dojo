import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Form from '../components/form';
import ProjectList from '../components/projectsList';

const Main = (props) => {
    const [ projects, setProjects] = useState([]);
    const [ loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/projects')
            .then(res=>{
                setProjects(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);

    const removeFromDom = (projectId) => {
        setProjects(projects.filter(project => project._id != projectId));
    }

    const createNewProject = project =>{
        axios.post('http://localhost:8000/api/projects', project)
        .then(res=>{
            setProjects([...projects,res.data]);
        })
    }

    return (
        <div>
            <Form onSubmitProp={createNewProject} initalTitle="" initialPrice="" initialDescription=""/>
            <hr/>
            {loaded && <ProjectList projects={projects} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default Main;