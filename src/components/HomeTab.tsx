import { SlideShow } from "@/components/SlideShow.tsx";
import Timeline from "@/components/TimeLine";
import SplitText from "@/components/ui/SplitText.tsx";
import { useRef } from "react";
import { Box, Flex, HStack, VStack } from "@chakra-ui/react";
import { GalleryArray } from "@/assets/data/GalleryArray.ts";
import Gallery from "@/components/Gallery.tsx";
import { Fade } from "react-awesome-reveal";

const HomeTab = () => {
    const constraintsRef = useRef<HTMLDivElement>(null);
    return (
        <Box minW="100vw" ref={constraintsRef} overflow="hidden">
            <Fade>
                <VStack p={{ base: 2, md: 4 }}>
                    <HStack
                        justifyContent="center"
                        direction={{ base: "column", md: "row" }}
                        p={{ base: 4, md: 8 }}
                    >
                        {GalleryArray.map((item) => (
                            <Gallery
                                key={item.id}
                                title={item.title}
                                description={item.description}
                                imageSrc={item.imageSrc}
                                rotate={item.rotate}
                                translate={item.translate}
                                constraintsRef={constraintsRef}
                            />
                        ))}
                    </HStack>
                    <Box p={{ base: 4, md: 38 }} />
                    <Flex gap="4" direction={{ base: "column", md: "row" }}>
                        <Flex gap="4" direction="column">
                            <SplitText
                                className="!text-5xl !font-bold !leading-snug"
                                text="Hi there!"
                                delay={100}
                                duration={0.6}
                                ease="power3.out"
                                splitType="chars"
                                from={{ opacity: 0, y: 40 }}
                                to={{ opacity: 1, y: 0 }}
                                threshold={0.1}
                            />
                            <SplitText
                                className="!text-5xl !font-bold !leading-snug"
                                text="I'm Aric"
                                delay={200}
                                duration={0.2}
                                ease="power3.out"
                                splitType="chars"
                                from={{ opacity: 0, y: 40 }}
                                to={{ opacity: 1, y: 0 }}
                                threshold={0.1}
                            />
                            <p>Code to keep my cat's bowl overflowing</p>
                        </Flex>
                        <SlideShow />
                    </Flex>
                    <Box p={{ base: 8, md: 16 }} />
                        <Timeline />
                </VStack>
            </Fade>
        </Box>
    );
};

export default HomeTab;