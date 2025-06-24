import React, {useEffect, useRef, useState} from 'react';
import {projectArray} from "@/assets/data/projectArray.ts";
import {Box, Button, Flex, HStack, VStack} from "@chakra-ui/react";
import ProjectCard from "@/components/ProjectCard.tsx";

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
        <Box
            position="relative"
            overflow="auto"
            display="flex"
            alignItems="center"
            justifyContent="center" // Center the card initially
        >
        <VStack justify="center" wrap="wrap" gap="6">
            <Flex bg = "gray.300" width="1/2" wrap="wrap" gap="2" justify="center" rounded="md">
                {allTags.map(techStack => (
                        <Button
                            bg = {selectedTags.includes(techStack)?"gray.700" : ""}
                            key = {techStack}
                            size="2xs"
                            colorScheme="teal"
                            _hover={{background: "teal.200" }}
                            onClick={()=> {selectTagArrayHandler(techStack)}}
                        >
                            {techStack}
                        </Button>
                    )
                )}
            </Flex>

            <VStack wrap="wrap" gap="6">
            {filteredProjectArray.map((item,index) => (
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
                        constraintsRef={null}
                    />
                )
            )}
        </VStack>
            </VStack>
            </Box>

    );
};

export default filterTag;