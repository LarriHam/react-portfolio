import { Link } from 'react-router-dom';
import { Badge, Box, Card, HStack, Image } from "@chakra-ui/react";
import { Button } from "./ui/button";
import { FaGithub } from "react-icons/fa";


const ProjectCard = ({project}) => {

  let techBadges = project.technologies.map((technology, i) => {
    return <Badge key={i}>{technology}</Badge>
  });

  return (

    <Card.Root flexDirection="row " overflow="hidden repeat2" maxW="xl">
      <Image
        objectFit="fit"
        maxW="200px"
        src={`/images/${project.images[0].url}`}
        alt={project.images[0].caption}
      />
      <Box>
        <Card.Body >
          <Card.Title mb="2">{project.title}</Card.Title>
          <Card.Description>
          {project.description}
          </Card.Description>
          <HStack mt="4" class="text-wrap">
            {techBadges}
          </HStack>
        </Card.Body>
        <Card.Footer>
          <Button asChild><a href={`${project.links[0].url}`}>View</a></Button>
          <Button asChild><a href={`${project.gitHub}`}><FaGithub /></a></Button>
        </Card.Footer>
      </Box>
    </Card.Root>
  )

};

export default ProjectCard