import { LuSchool } from "react-icons/lu";
import { IoSchoolOutline } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import type { IconType } from "react-icons";

interface EventProps {
    date: string;
    icon: IconType;
    title: string;
    description: string;
}


export const EventArray: EventProps[] = [
    {
        date: "2024 - Current",
        icon: LuSchool,
        title: "University of British Columbia",
        description: "Bachelor of Computer Science",
    },
    {
        date: "2024",
        icon: FaPeopleGroup,
        title: "Sing Sharp Limited",
        description: "Web Development Intern",
    },
    {
        date: "2021 - 2023",
        icon: FaPeopleGroup,
        title: "Nanyang Commercial Bank",
        description: "Economist ",
    },
    {
        date: "2018 -2021",
        icon: FaPeopleGroup,
        title: "Sun Hung Kai Properties",
        description: "Research Analyst",
    },
    {
        date: "2017 - 2018",
        icon: FaPeopleGroup,
        title: "Hong Kong Policy Research Institute Limited",
        description: "Assistant Researcher",
    },
    {
        date: "2015 - 2017",
        icon: IoSchoolOutline,
        title: "Chinese University of Hong Kong",
        description: "Master of Philosophy in Economics",
    },
    {
        date: "2009 - 2012",
        icon: IoSchoolOutline,
        title: "Chinese University of Hong Kong",
        description: "Bachelor of Social Sciences in Economics, Minor in Mathematics",
    }
];