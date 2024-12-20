import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from "./components/ui/provider";

// pages
import Home from './pages/Home';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound';
import RedirectExample from './pages/RedirectExample';
import ProjectsIndex from './pages/projects/Index';
import ProjectsShow from './pages/projects/Show';
import { Container } from '@chakra-ui/react';

//components
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Provider>
            <Router>
                <Navbar />
                <Container>
                    <Routes>
                        <Route path={"/"} element={<Home />}  />
                        <Route path={"/about"} element={<About />}  />
                        <Route path={"/redirect-example"} element={<RedirectExample />}  />

                        <Route path={"projects"} element={<ProjectsIndex/>}/>
                        <Route path={"projects/:slug"} element={<ProjectsShow/>}/>

                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </Container>
                

                

            
            </Router>
        </Provider>    
    );
};

export default App;