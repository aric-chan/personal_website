import { Button, Card, Image, Text, HStack } from "@chakra-ui/react"
import { FaGithub, FaYoutube } from "react-icons/fa";
import { Tag } from "@chakra-ui/react"
import {Box} from "@chakra-ui/react";
interface projectCardProps {
    id: number
    title: string;
    description: string;
    imageSrc: string;
    githubButton?: boolean;
    githubUrl?: string;
    liveButton?: boolean;
    liveUrl?: string;
    demoButton?: boolean;
    demoUrl?: string;
    techStackList: string[];
}
const projectCard: React.FC<projectCardProps> = ({
                                                     id,
    title,
    description,
    imageSrc,
    githubButton,
    githubUrl,
    liveButton,
    liveUrl,
    demoButton,
    demoUrl,
    techStackList

}) => {
    return (
        <Card.Root maxW="xl" overflow="hidden" flexDirection="row" >
            {id%2 == 0 &&<Image src={imageSrc} maxW="200px" objectFit="cover" />}
            <Box>
                <Card.Body gap="2">
                    <Card.Title>{title}</Card.Title>
                    <Card.Description>
                        {description}
                    </Card.Description>

                    <HStack wrap="wrap" paddingTop = "20px">
                        {techStackList.map((item,index) => (
                                <Tag.Root maxW="none" display="inline-block">
                                    <Tag.Label pt = "1px">{item}</Tag.Label>
                                </Tag.Root>
                            )
                        )}
                    </HStack>
                </Card.Body>
                <Card.Footer gap="2">
                    {githubButton && (<Button variant="outline" as="a" href = {githubUrl} ><FaGithub /></Button>)}
                    {liveButton && (<Button variant="outline" as="a" href = {liveUrl}><FaYoutube /></Button>)}
                    {demoButton && (<Button variant="outline" as="a" href = {demoUrl}>Live Demo</Button>)}
                </Card.Footer>
            </Box>
            {id%2 != 0 &&<Image src={imageSrc} maxW="200px" objectFit="cover" />}
        </Card.Root>
    )

}
export default projectCard;
