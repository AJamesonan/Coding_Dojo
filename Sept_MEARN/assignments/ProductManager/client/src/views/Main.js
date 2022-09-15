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
    return (
        <div>
            <Form/>
            <hr/>
            {loaded && <ProjectList projects={projects}/>}
        </div>
    )
}

export default Main;