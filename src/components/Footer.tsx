import {Box, Flex, IconButton, Link} from "@chakra-ui/react";
import { IoDocumentTextOutline, IoMailOutline, IoLogoLinkedin, IoHome } from "react-icons/io5";
const footer = () => {

    return (
        <Box p={4}>
            <Flex justify="center" gap={6}>
                <Link href="/personal_website/">
                    <IconButton
                        size="xs"
                        rounded="full"
                        bg={{base: "teal.100", _hover: {base: "teal.400"}}}
                        _hover={{transform: "scale(1.1)"}}
                        transition="color 0.3s, transform 0.3s">
                        <IoHome/>
                    </IconButton>
                </Link>
                <Link href="/personal_website/assets/chan_aric_edbert_resume.pdf" target="_blank"
                      rel="noopener noreferrer">
                    <IconButton size="xs"
                                rounded="full"
                                bg={{base: "teal.100", _hover: {base: "teal.400"}}}
                                _hover={{transform: "scale(1.1)"}}
                                transition="color 0.3s, transform 0.3s">
                        <IoDocumentTextOutline/>
                    </IconButton>
                </Link>
                <Link href="mailto:aricchan918@gmail.com">
                    <IconButton size="xs"
                                rounded="full" bg={{base: "teal.100", _hover: {base: "teal.400"}}}
                                _hover={{transform: "scale(1.1)"}}
                                transition="color 0.3s, transform 0.3s">
                        <IoMailOutline/>
                    </IconButton>
                </Link>
                <Link href="https://www.linkedin.com/in/aric-edbert-chan-041b99136/" target="_blank"
                      rel="noopener noreferrer">

                        <IconButton size="xs"
                                    rounded="full" bg={{base: "teal.100", _hover: {base: "teal.400"}}}
                                    _hover={{transform: "scale(1.1)"}}
                                    transition="color 0.3s, transform 0.3s">
                            <IoLogoLinkedin/>
                        </IconButton>
                </Link>
            </Flex>
            <Box p={2}></Box>
            <p className="!text-xs"> © 2025 Aric Chan. All rights reserved.</p>
        </Box>

    );
}
export default footer;