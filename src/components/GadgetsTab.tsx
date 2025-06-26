
import { CoffeeArray } from "@/assets/data/CoffeeArray.ts";
import { PcArray } from "@/assets/data/PcArray.ts";
import { KeyboardArray } from "@/assets/data/KeyboardArray.ts";
import EquipCard from "@/components/EquipCard.tsx";
import {Box, VStack} from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react"
import {useRef} from "react";
import ShinyText from './ui/ShinyText';
import { Fade } from "react-awesome-reveal";


const GadgetsTab = () => {
    const constraintsRef = useRef(null);
    return (

        <Box
            ref={constraintsRef}
            position="relative"
            display="flex"
            alignItems="center"
            justifyContent="center" // Center the card initially
        >

            <VStack w="100vw">
                <Fade>

                <ShinyText
                    className="!text-5xl !font-bold !leading-snug"
                    text="PC gadgets"
                    disabled={false}
                    speed={3}
                />
                <Grid templateColumns="repeat(2, 1fr)" gap={8}>
                    {PcArray.map((item) => (

                        <EquipCard
                            id={item.id}
                            title={item.title}
                            imageSrc={item.imageSrc}
                            shopUrl={item.shopUrl}
                            constraintsRef={constraintsRef}/>
                    ))}
                </Grid>
                <Box p={4}></Box>
                <ShinyText
                    className="!text-5xl !font-bold !leading-snug"
                    text="Keyboards"
                    disabled={false}
                    speed={3}
                />
                <Grid templateColumns="repeat(2, 1fr)" gap={8}>
                    {KeyboardArray.map((item) => (
                        <EquipCard
                            id={item.id}
                            title={item.title}
                            imageSrc={item.imageSrc}
                            shopUrl={item.shopUrl}
                            constraintsRef={constraintsRef}/>

                    ))}
                </Grid>
                <Box p={4}></Box>
                <ShinyText
                    className="!text-5xl !font-bold !leading-snug"
                    text="Coffee"
                    disabled={false}
                    speed={3}
                />
                <Grid templateColumns="repeat(2, 1fr)" gap={8}>
                    {CoffeeArray.map((item) => (
                        <EquipCard
                            id={item.id}
                            title={item.title}
                            imageSrc={item.imageSrc}
                            shopUrl={item.shopUrl}
                            constraintsRef={constraintsRef}/>

                    ))}
                </Grid>
                </Fade>
            </VStack>
        </Box>
    );

};

export default GadgetsTab;