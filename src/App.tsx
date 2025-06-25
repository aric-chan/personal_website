import {BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderTab from '@/components/HeaderTab.tsx';
import Footer from '@/components/Footer.tsx';
import FilterTag from '@/components/FilterTag.tsx';
import EquipCard from '@/components/EquipCard.tsx';
import {Box, VStack} from "@chakra-ui/react";
import GadgetsTab from "@/components/GadgetsTab.tsx";
import {SlideShow} from "@/components/SlideShow.tsx";
import MoreTab from "@/components/MoreTab.tsx";
import Aurora from './components/ui/Aurora';
import HomeTab from "@/components/HomeTab.tsx";

export default function App() {
    return (
        <>
            <BrowserRouter>
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
                        speed={0.4}
                    />
                </Box>
            <VStack>
                <Box
                    position="fixed"
                    top={0}
                    zIndex={999}
                    width="100%"
                    textAlign="center"
                    p={5}
                    bg="transparent"
                >
                    <HeaderTab/>
                </Box>
                <Box p={10}></Box>
                <Routes>
                    <Route path="/" element={<HomeTab/>}/>
                    <Route path="projects" element={<FilterTag/>}/>
                    <Route path="gadgets" element={<GadgetsTab/>}/>
                    <Route path="more" element={<MoreTab/>}/>
                </Routes>
                <Footer/>
            </VStack>

        </BrowserRouter></>


    );
}