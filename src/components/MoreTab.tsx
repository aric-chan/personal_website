import { useRef } from "react";
import { motion } from "framer-motion";
import { Card, Image, Box, CardBody, CardTitle, CardDescription, HStack, Badge, Button } from "@chakra-ui/react";
import SplitText from "./ui/SplitText.tsx";
import ShinyText from './ui/ShinyText';
import Aurora from "@/components/ui/Aurora.tsx";

const MoreTab = () => {
    // const handleAnimationComplete = () => {
    //     console.log('All letters have animated!');
    // };
    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            width="100vw"
            height="100vh"
            zIndex={-1} // Put it behind other content
            overflow="hidden"
        >
        <Aurora
            colorStops={["#5227ff", "#7cff67", "#5227ff"]}
            blend={1}
            amplitude={0.3}
            speed={0.6}/>
        </Box>
    );
};

export default MoreTab;