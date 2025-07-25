import {Fade} from "react-awesome-reveal";
import {TimelineArray} from "@/assets/data/TimelineArray.ts";
import type {IconType} from "react-icons";
import { Icon, Timeline } from "@chakra-ui/react"


interface EventProps {
    date: string;
    icon: IconType; // Store the component type
    title: string;
    description: string;
}
const Event = ({event}: {event:EventProps}) => {
    const IconComponent = event.icon;
    return (
            <Timeline.Item _hover={{transform: "scale(1.05)" }}
                           transition="transform 0.3s">
                <Timeline.Content width="160px">
                    <Timeline.Title>{event.date}</Timeline.Title>
                </Timeline.Content>
                <Timeline.Connector>
                    <Timeline.Separator borderColor="teal.400"/>
                    <Timeline.Indicator outline="none">
                        <Icon>
                            <IconComponent/>
                        </Icon>
                    </Timeline.Indicator>
                </Timeline.Connector>
                <Timeline.Content>
                    <Timeline.Title fontWeight="semibold">{event.title}</Timeline.Title>
                    <Timeline.Description >{event.description}</Timeline.Description>
                </Timeline.Content>
            </Timeline.Item>
        )
}

const TimeLine = () => {
    return (
        <Fade>
            <Timeline.Root translate="10%" maxWidth = "500px">
                {TimelineArray.map((item, index) =>
                    <Event key = {index}
                           event = {item}
                    />
                )}
            </Timeline.Root>
        </Fade>

    )}
export default TimeLine;