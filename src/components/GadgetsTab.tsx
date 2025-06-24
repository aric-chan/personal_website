
import { CoffeeArray } from "@/assets/data/CoffeeArray.ts";
import { PcArray } from "@/assets/data/PcArray.ts";
import { KeyboardArray } from "@/assets/data/KeyboardArray.ts";
import EquipCard from "@/components/EquipCard.tsx";
import {Box, Text, VStack} from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react"
import {useRef} from "react";
import SplitText from "./ui/SplitText";
import ShinyText from './ui/ShinyText';


const GadgetsTab = () => {
    const constraintsRef = useRef(null);
    return (


        <Box
            ref={constraintsRef}
            position="relative"
            overflow="auto"
            display="flex"
            alignItems="center"
            justifyContent="center" // Center the card initially
        >

            <VStack w="100vw">

                    <SplitText
                        className="!text-5xl !font-bold !leading-snug"
                        text="Welcome to my garage :)"
                        delay={100}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                    />

                <ShinyText
                    className="!text-5xl !font-bold !leading-snug"
                    text="PC gadgets"
                    disabled={false}
                    speed={3}
                />
                <Grid templateColumns="repeat(2, 1fr)" gap={8}>
                    {PcArray.map((item, index) => (

                        <EquipCard
                            id={item.id}
                            title={item.title}
                            imageSrc={item.imageSrc}
                            shopUrl={item.shopUrl}
                            constraintsRef={constraintsRef}/>
                    ))}
                </Grid>

                <ShinyText
                    className="!text-5xl !font-bold !leading-snug"
                    text="Keyboards"
                    disabled={false}
                    speed={3}
                />
                <Grid templateColumns="repeat(2, 1fr)" gap={8}>
                    {KeyboardArray.map((item, index) => (
                        <EquipCard
                            id={item.id}
                            title={item.title}
                            imageSrc={item.imageSrc}
                            shopUrl={item.shopUrl}
                            constraintsRef={constraintsRef}/>

                    ))}
                </Grid>

                <ShinyText
                    className="!text-5xl !font-bold !leading-snug"
                    text="Coffee"
                    disabled={false}
                    speed={3}
                />
                <Grid templateColumns="repeat(2, 1fr)" gap={8}>
                    {CoffeeArray.map((item, index) => (
                        <EquipCard
                            id={item.id}
                            title={item.title}
                            imageSrc={item.imageSrc}
                            shopUrl={item.shopUrl}
                            constraintsRef={constraintsRef}/>

                    ))}
                </Grid>

            </VStack>
        </Box>);

};

export default GadgetsTab;