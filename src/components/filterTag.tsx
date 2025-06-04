import React, {useEffect, useState} from 'react';
import {projectArray} from "@/assets/data/projectArray.ts";
import {Button, HStack} from "@chakra-ui/react";
import ProjectCard from "@/components/projectCard.tsx";

const filterTag = () => {
    const allTags = [... new Set(projectArray.flatMap(item => item.techStackList))]

    const [selectedTag, setSelectedTag] = useState([]);
    const [filteredProjectArray, setFilteredProjectArray] = useState(projectArray);
    // const [isClicked, setIsClicked] = useState(false);
    const handleClick = (tag:string) => {
        let newSelectedTag: string[];
        if (selectedTag.includes(tag)) {
            newSelectedTag = selectedTag.filter(t => t !== tag);
        } else {
            newSelectedTag = [...selectedTag, tag];
        }
        setSelectedTag(newSelectedTag);
        console.log('Updated selectedTag:', newSelectedTag);

    }
    // useEffect(() => {
    //     filteredProjectArray = projectArray
    // }, []);
    //
    // const filteredProjectArray = projectArray.filter(
    //     proj => proj.techStackList.some(
    //         techStack => selectedTag.includes(techStack)))

    useEffect(() => {
        let newFilteredProjectArray;
        if (selectedTag.length > 0) {
            newFilteredProjectArray = projectArray.filter(
                proj => proj.techStackList.some(
                    techStack => selectedTag.includes(techStack)))
        } else {
            newFilteredProjectArray = projectArray;
        }
        setFilteredProjectArray(newFilteredProjectArray)

    }, [selectedTag]);
    console.log('Filtered projects:', filteredProjectArray);


    return (
        <HStack wrap="wrap" gap="6">
            {allTags.map(techStack => (
                    <Button
                        key = {techStack}
                        size="xs"
                        colorPalette="cyan"
                        className="toggle-button"
                        onClick={(e) => {
                            handleClick(techStack);
                        }}
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