import { Box, Flex, IconButton,Link } from "@chakra-ui/react";
import { IoDocumentTextOutline, IoMailOutline, IoLogoLinkedin, IoHome } from "react-icons/io5";
const footer = () => {

    return (
        <Box >
            <Flex justify="center" gap={6}>
                <Link href="/" >
                <IconButton
                            rounded="full"
                            bg={{ base: "red.200", _hover: { base: "red.400" } }}
                            _hover={{transform: "scale(1.1)" }}
                            transition="color 0.3s, transform 0.3s">
                    <IoHome/>
                </IconButton>
                </Link>
                <Link href="../../public/chan_aric_edbert_resume.pdf" target="_blank"
                      rel="noopener noreferrer">
                    <IconButton rounded="full"
                                bg={{ base: "red.200", _hover: { base: "red.400" } }}
                                _hover={{transform: "scale(1.1)" }}
                                transition="color 0.3s, transform 0.3s">
                        <IoDocumentTextOutline/>
                    </IconButton>
                </Link>
                <Link href="mailto:aricchan918@gmail.com" >
                <IconButton rounded="full"  bg={{ base: "red.200", _hover: { base: "red.400" } }}
                            _hover={{transform: "scale(1.1)" }}
                            transition="color 0.3s, transform 0.3s">
                    <IoMailOutline />
                </IconButton>
                    </Link>
                <Link href="https://www.linkedin.com/in/aric-edbert-chan-041b99136/" target="_blank"
                      rel="noopener noreferrer">
                <IconButton rounded="full" bg={{ base: "red.200", _hover: { base: "red.400" } }}
                            _hover={{transform: "scale(1.1)" }}
                            transition="color 0.3s, transform 0.3s">
                    <IoLogoLinkedin />
                </IconButton>
                    </Link>
            </Flex>
            <p> © 2025 Aric Chan. All rights reserved.</p>
        </Box>

    )
}
export default footer;