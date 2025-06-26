import { Button, Card, Image, HStack, Link } from "@chakra-ui/react"
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
    techStackList,

}) => {
    return (
        <Card.Root maxW="xl" overflow="hidden" flexDirection="row"  _hover={{transform: "scale(1.05)" }}
                   transition="transform 0.3s">
            {id%2 == 0 &&<Image pointerEvents="none" src={imageSrc} maxW="200px" objectFit="cover" />}
            <Box>
                <Card.Body bg = "gray.700/40" gap="2">
                    <Card.Title>{title}</Card.Title>
                    <Card.Description>
                        {description}
                    </Card.Description>

                    <HStack wrap="wrap" paddingTop = "20px">
                        {techStackList.map((item) => (
                                <Tag.Root maxW="none" display="inline-block">
                                    <Tag.Label pt = "1px">{item}</Tag.Label>
                                </Tag.Root>
                            )
                        )}
                    </HStack>
                </Card.Body>
                <Card.Footer bg = "gray.700/40" gap="2">
                    {githubButton && (<Link href={githubUrl}  _hover={{textDecoration: 'none'}}><Button _hover={{transform: "scale(1.1)" }} bg = "gray.900" size = "xs" variant="outline"><FaGithub /></Button></Link>)}
                    {liveButton && (<Link href={liveUrl}  _hover={{textDecoration: 'none'}}><Button _hover={{transform: "scale(1.1)" }} bg = "gray.900"  size = "xs" variant="outline"><FaYoutube /></Button></Link>)}
                    {demoButton && (<Link href={demoUrl}  _hover={{textDecoration: 'none'}}><Button _hover={{transform: "scale(1.1)" }} bg = "gray.900"  size = "xs" variant="outline">Live Demo</Button></Link>)}
                </Card.Footer>
            </Box>
            {id%2 != 0 &&<Image pointerEvents="none" src={imageSrc} maxW="200px" objectFit="cover" />}
        </Card.Root>
    )

}
export default projectCard;
