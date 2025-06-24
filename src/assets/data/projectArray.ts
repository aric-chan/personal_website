import medicImage from "../../../public/projectImages/medic.jpg";
import coffeeImage from "../../../public/projectImages/coffee.jpg";
import bankImage from "../../../public/projectImages/bank.jpg";
import ootdImage from "../../../public/projectImages/ootd.jpg";
 interface Project {
    id: number
    title: string;
    description: string;
    imageSrc: string;
    githubButton?: boolean;
    githubUrl?: string;
    liveButton?: boolean;
    liveUrl?: string;
    demoButton?: boolean;
    demoUrl?: string;
    techStackList: string[];
}

export const projectArray : Project[]  = [
    {
        id: 0,
        title: "OOTDscribe",
        description:  "AI-generated journal platform using user-input mood, stories, and images",
        imageSrc:ootdImage,
        githubButton: true,
        githubUrl:"https://github.com/Perry2004/AI-OOTD",
        liveButton:true,
        liveUrl:"https://devpost.com/software/ootdscribe",
        demoButton:false,
        demoUrl:"",
        techStackList: ["Gemini", "React", "Express.js", "MongoDB", "Tailwind CSS", "React Bits", "ShadCN"]
    },
    {
        id: 1,
        title: "24-7 MedConnect",
        description:  "Offer suitable doctors based on Gemini AI-generated feedback derived from user-input symptoms",
        imageSrc:medicImage,
        githubButton: true,
        githubUrl:"https://github.com/Mabelwang233/24-7MedConnect",
        liveButton:true,
        liveUrl:"https://devpost.com/software/24-7-medconnect-g8wknp",
        demoButton:true,
        demoUrl:"http://3.12.148.94:5173/",
        techStackList: ["Gemini", "React", "Express.js", "MongoDB", "Amazon EC2"]
    },
    {
        id: 2,
        title: "Coffee Tasting Platform",
        description:  "A CRUD Platform for coffee enthusiast to log bean purchase information and brew note reviews",
        imageSrc:coffeeImage,
        githubButton: true,
        githubUrl:"https://github.com/aric-chan/CoffeeTastingPlatform",
        liveButton:false,
        liveUrl:"https://devpost.com/software/24-7-medconnect-g8wknp",
        demoButton:false,
        demoUrl:"http://3.12.148.94:5173/",
        techStackList: ["Java", "Junit"]
    },
    {
        id: 3,
        title: "Online Banking Database",
        description:  "Online Banking System that allows bank employees to create and manage customer accounts\n" +
            "\n",
        imageSrc:bankImage,
        githubButton: true,
        githubUrl:"https://github.com/aric-chan/OnlineBankingDB",
        liveButton:false,
        liveUrl:"https://devpost.com/software/24-7-medconnect-g8wknp",
        demoButton:false,
        demoUrl:"http://3.12.148.94:5173/",
        techStackList: ["HTML", "CSS", "PHP", "MySQL"]
    }
]