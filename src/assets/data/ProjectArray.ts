import medicImage from "@/assets/projectImages/medic.jpg";
import coffeeImage from "@/assets/projectImages/coffee.jpg";
import bankImage from "@/assets/projectImages/bank.jpg";
import ootdImage from "@/assets/projectImages/ootd.jpg";
import siteImage from "@/assets/projectImages/personalsite.jpg"
import creditCardImage from "@/assets/projectImages/creditcards.jpg"
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
        title: "My personal site",
        description:  "Turning my old HTML+CSS site into React+Vite",
        imageSrc:siteImage,
        githubButton: true,
        githubUrl:"https://github.com/aric-chan/personal_website",
        liveButton:false,
        liveUrl:"",
        demoButton:false,
        demoUrl:"",
        techStackList: ["React", "Tailwind CSS", "React Bits", "Chakra UI", "Framer Motion"]
    },
    {
        id: 1,
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
        id: 2,
        title: "Credit Card Default Detection",
        description:  "Built ML pipelines to predict card default risk on a 30k samples dataset",
        imageSrc:creditCardImage,
        githubButton: true,
        githubUrl:"https://github.com/aric-chan/Credit-Card-Default-Detection",
        liveButton:false,
        liveUrl:"",
        demoButton:false,
        demoUrl:"",
        techStackList: ["Python", "Scikit-learn", "Pandas"]
    },
    {
        id: 3,
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
        id: 4,
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
        id: 5,
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