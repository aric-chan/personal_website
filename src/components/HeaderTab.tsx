import { Tabs } from "@chakra-ui/react"
import {useLocation, useNavigate} from "react-router-dom"
import {useEffect, useState} from "react";

const HeaderTab = () => {
    let location = useLocation();
    let navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("");

    //updating the active tab when route to new url
    useEffect(() => {
        if (location.pathname === "/" ) {
            setActiveTab("home");
        } else if (location.pathname === "/projects") {
            setActiveTab("projects");
        } else if (location.pathname === "/gadgets") {
            setActiveTab("gadgets");
        } else if (location.pathname === "/more") {
            setActiveTab("more");
        }

    },[location.pathname]);
    return (
            <Tabs.Root
                value={activeTab}
                onValueChange={(e) => {
                setActiveTab(e.value);
                if (e.value === "projects") {
                    navigate("/projects");
                } else if (e.value === "home") {
                    navigate("/");
                } else if (e.value === "gadgets") {
                    navigate("/gadgets");
                } else if (e.value === "more") {
                    navigate("/more");
                }
            }
            }
                       variant="plain">
                <Tabs.List
                    bg="gray.800"
                    rounded="l3"
                    p="1"
                >
                    <Tabs.Trigger
                        value="home">
                        <p>Home</p>
                    </Tabs.Trigger>
                    <Tabs.Trigger value="projects">
                        Projects
                    </Tabs.Trigger>
                    <Tabs.Trigger value="gadgets">
                        Gadgets
                    </Tabs.Trigger>
                    <Tabs.Trigger value="more">
                        More
                    </Tabs.Trigger>
                </Tabs.List>
            </Tabs.Root>
            )
            }
            export default HeaderTab;
