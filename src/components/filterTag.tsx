import React, {useEffect, useState} from 'react';
import {projectArray} from "@/assets/data/projectArray.ts";
import {Button, HStack} from "@chakra-ui/react";
import ProjectCard from "@/components/projectCard.tsx";

const filterTag = () => {
    const [filteredProjectArray, setFilteredProjectArray] = useState(projectArray);
    const [selectedTags, setSelectedTags] = useState([]);


    const handleClick = (tag) => {
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
        <HStack wrap="wrap" gap="6">
            {allTags.map(techStack => (
                    <Button
                        key = {techStack}
                        size="xs"
                        colorPalette="cyan"
                        className="toggle-button"
                        onClick={()=>handleClick(techStack)}
                        >
                        {techStack}
                    </Button>
                )
                )}
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
                    />
                )
            )}
        </HStack>

    );
};

export default filterTag;