import { Text, Timeline } from "@chakra-ui/react"
import {LuCheck, LuPackage, LuSchool, LuShip} from "react-icons/lu"
import {EventArray} from "@/assets/data/EventArray.ts";
import type {IconType} from "react-icons";
interface EventProps {
    date: string;
    icon: IconType; // Store the component type, not the rendered element
    title: string;
    description: string;
}
const Event = ({event}: {event:EventProps}) => {
    const IconComponent = event.icon;
    return (
            <Timeline.Item>
                <Timeline.Content width="160px">
                    <Timeline.Title>{event.date}</Timeline.Title>
                </Timeline.Content>
                <Timeline.Connector>
                    <Timeline.Separator />
                    <Timeline.Indicator>
                        <IconComponent/>
                    </Timeline.Indicator>
                </Timeline.Connector>
                <Timeline.Content>
                    <Timeline.Title>{event.title}</Timeline.Title>
                    <Timeline.Description >{event.description}</Timeline.Description>
                </Timeline.Content>
            </Timeline.Item>
        )
}

const TimeLine = () => {
    return (
        <Timeline.Root justifyContent="center" maxW="500px">
            {EventArray.map((item,index) =>
                <Event key = {index}
                       event = {item}
                       />
                )}
        </Timeline.Root>
    )}
export default TimeLine;