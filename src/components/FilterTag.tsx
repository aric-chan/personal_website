import {useEffect, useState} from 'react';
import {projectArray} from "@/assets/data/ProjectArray.ts";
import {Box, Button, Flex, VStack} from "@chakra-ui/react";
import ProjectCard from "@/components/ProjectCard.tsx";
import { motion } from 'framer-motion';
import { Fade } from 'react-awesome-reveal';

const filterTag = () => {
    const [filteredProjectArray, setFilteredProjectArray] = useState(projectArray);
    const [selectedTags, setSelectedTags] = useState([]);

    const selectTagArrayHandler = (tag) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter(t => t!== tag));
        } else {
            setSelectedTags([...selectedTags,tag])
        }
    }
    useEffect(() => {
        let newFilterProjectArray;
        if (selectedTags.length > 0) {
            newFilterProjectArray = projectArray.filter(
                proj=> proj.techStackList.some(
                    tStack => selectedTags.includes(tStack))
            )} else {
            newFilterProjectArray = projectArray
        }
        setFilteredProjectArray(newFilterProjectArray);
    }, [selectedTags]);
    //unquie tag array
    const allTags = [... new Set(projectArray.flatMap(project => project.techStackList))]
    return (
        <motion.div
            initial={{ x: 0, y: 0, opacity: 0.1 }}
            whileInView={{ opacity: 1 }}
        >
            <Box
            position="relative"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
        <VStack justify="center" wrap="wrap" gap="6">

            <Flex p = {5} bg = "gray.300/20" width="1/2" wrap="wrap" gap="2" justify="center" rounded="md">

                {allTags.map(techStack => (
                        <Button
                            bg = {selectedTags.includes(techStack)?"gray.500" : ""}
                            key = {techStack}
                            size="2xs"
                            colorScheme="teal"
                            _hover={{background: "cyan.600" }}
                            onClick={()=> {selectTagArrayHandler(techStack)}}
                        >
                            <Box color={selectedTags.includes(techStack)?"gray.100" : "gray.950"}>
                                {techStack}
                            </Box>
                        </Button>
                    )
                )}

            </Flex>
                <Fade>
            <VStack wrap="wrap" gap="6">
                {filteredProjectArray.map((item) => (
                    <ProjectCard
                        key = {item.id}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        imageSrc={item.imageSrc}
                        githubButton={item.githubButton}
                        githubUrl={item.githubUrl}
                        liveButton={item.liveButton}
                        liveUrl={item.liveUrl}
                        demoButton={item.demoButton}
                        demoUrl={item.demoUrl}
                        techStackList={item.techStackList}
                    />
                )
            )}
        </VStack>
                </Fade>
            </VStack>
            </Box>
        </motion.div>
    );
};

export default filterTag;