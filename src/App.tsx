
import { Button, HStack } from "@chakra-ui/react"
import ProjectCard from "@/components/projectCard.tsx";
import {CardWithForm} from "@/components/CardWithForm.tsx";

export default function App() {
    return (
        <HStack>
            <ProjectCard></ProjectCard>
            <Button>Click me</Button>
            <CardWithForm></CardWithForm>
        </HStack>
    );
}