import { useState, useEffect } from 'react';
import ProjectCard from '../../components/ProjectCard';
import projectsJSON from '../../data/projects.json';
import FilterProjects from '../../components/FilterProjects';
import { Grid, Stack } from "@chakra-ui/react"
import { FaSearch } from "react-icons/fa";
import languagesJSON from '../../data/projects.json';

const Index = () => {
    const [projectsList, setProjectsList] = useState(projectsJSON);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredList, setFilteredList] = useState(projectsJSON);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedLanguage, setSelectedLanguage] = useState("All");

    useEffect(() => {
        console.log(searchTerm);

        if(searchTerm === ""){
            setFilteredList(projectsList);
        }
        else if(searchTerm.length <= 1){
            return;
        }
        else {
            let result = projectsList.filter((project) => {
                return project.title.toLowerCase().includes(searchTerm.toLowerCase());
            });
    
            setFilteredList(result);
        }

    }, [searchTerm]);

    useEffect(() => {

        if(selectedCategory === "All"){
            setFilteredList(projectsList);
        }
        else {
            let result = projectsList.filter((project) => {
                return project.categories.includes(selectedCategory);
            });

            setFilteredList(result);
        }

    }, [selectedCategory]);

    useEffect(() => {

        if(selectedLanguage === "All"){
            setFilteredList(projectsList);
        }
        else {
            let result = projectsList.filter((project) => {
                return project.languages.includes(selectedLanguage);
            });

            setFilteredList(result);
        }

    }, [selectedLanguage]);

    const projectCards = filteredList.map((project, index) => {
        return <ProjectCard key={index} project={project} />;
    });

    return (
        <>
            <Stack direction={'row'} py={'20px'}>        
                <FilterProjects setSearchTerm={setSearchTerm} setSelectedCategory={setSelectedCategory} setSelectedLanguage={setSelectedLanguage}/>          
            </Stack>
            <Grid templateColumns="repeat(2, 1fr)" gap="">
                {projectCards}
            </Grid>

        </>
    );

};

export default Index;