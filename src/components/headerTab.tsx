import { Tabs } from "@chakra-ui/react"
import {useLocation, useNavigate} from "react-router-dom"
import {useEffect, useState} from "react";

const HeaderTab = () => {
    let location = useLocation();
    let navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("home");

    //updating the active tab when route to new url
    useEffect(() => {
        if (location.pathname === "/" ) {
            setActiveTab("home");
        } else if (location.pathname === "projects") {
            setActiveTab("projects");
        } else if (location.pathname === "equipments") {
            setActiveTab("equipments");
        } else if (location.pathname === "more") {
            setActiveTab("more");
        }

    },[location.pathname]);
    return (
        <Tabs.Root value = {activeTab} onValueChange = {(e) =>
        {setActiveTab(e.value);
        if (e.value === "projects") {
            navigate("/projects");
        } else if (e.value === "home") {
            navigate("/");
        } else if (e.value === "equipments") {
            navigate("/equipments");
        } else if (e.value === "more"){
            navigate("/more");
        } else {
            navigate("/");
        }
        console.log("e.value", e.value)}
        }
                   variant="plain">
            <Tabs.List bg="bg.muted" rounded="l3" p="1">
                <Tabs.Trigger value="home" >
                    Home
                </Tabs.Trigger>
                <Tabs.Trigger value="projects">
                    Projects
                </Tabs.Trigger>
                <Tabs.Trigger value="equipments">
                    Equipments
                </Tabs.Trigger>
                <Tabs.Trigger value="more">
                    More
                </Tabs.Trigger>
                <Tabs.Indicator bg="blue.500" rounded="l2" />
            </Tabs.List>
        </Tabs.Root>
    )
}
export default HeaderTab;
