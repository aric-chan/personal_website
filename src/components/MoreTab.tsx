import ShinyText from "@/components/ui/ShinyText.tsx";
import {Box, Grid, VStack} from "@chakra-ui/react";
import {Fade} from "react-awesome-reveal";
import {PcArray} from "@/assets/data/PcArray.ts";
import EquipCard from "@/components/EquipCard.tsx";
import {KeyboardArray} from "@/assets/data/KeyboardArray.ts";
import {CoffeeArray} from "@/assets/data/CoffeeArray.ts";



const MoreTab = () => {

    return (

            <Fade>
                <ShinyText
                    className="!text-5xl !font-bold !leading-snug"
                    text="More to come"
                    disabled={false}
                    speed={3}
                />
            </Fade>
    );
};

export default MoreTab;