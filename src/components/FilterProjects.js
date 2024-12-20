import { Stack } from '@chakra-ui/react';
import categoriesList from '../data/categories.json';
import languagesList from '../data/languages.json';
import { FaSearch } from "react-icons/fa";



const FilterProjects = ({ setSearchTerm, setSelectedCategory, setSelectedLanguage }) => {

    let categoryOptions = categoriesList.map((category, index) => {
        return <option key={index} value={category.value}>{category.label}</option>
    });

    let languageOptions = languagesList.map((language, index) => {
        return <option key={index} value={language.value}>{language.label}</option>
    });

    return (
        <>
            <Stack pr={'50px'}>
                <p>Search Projects:</p>
                <Stack direction={'row'}>                
                    <label className="input input-bordered flex items-center gap-2">
                    <input onChange={(e) => setSearchTerm(e.target.value)} type="text" className="grow" placeholder="Search" />                
                    </label>
                    <FaSearch />
                </Stack>           
            </Stack>
            
            <Stack pr={'50px'}>
                <p>Categories:</p>
                <select onChange={(e) => setSelectedCategory(e.target.value)} name="category">
                <option value={"All"}>All</option>
                {categoryOptions}
                </select>
            </Stack>

            <Stack>
                <p>Language:</p>
                <select onChange={(e) => setSelectedLanguage(e.target.value)} name="language">
                <option value={"All"}>All</option>
                {languageOptions}
                </select>
            </Stack>

            
        </>
    );
};

export default FilterProjects;