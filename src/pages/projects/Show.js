import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import projectsJSON from '../../data/projects.json';


const Show = () => {
    const [projectsList, setProjectsList] = useState(projectsJSON);
    const [project, setProject] = useState(null);
    const {slug} = useParams();

    useEffect(() => {
        const found = projectsList.find((project) => {
            return project.slug === slug;
        })

        setProject(found);

    }, [])

    if(project === null) return <h2>Loading...</h2>

    if(project === undefined) return <Navigate to={`/project/${slug}`}/>

    return (
        <>
        <h2>title: {project.title}</h2>
        <p>{project.description}</p>
        <p>{project.technologies}</p>
        </>
        
    );
};

export default Show;