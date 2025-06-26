
import budapest from "../../../public/gallery/budapest.jpg";
import chimabirthday from "../../../public/gallery/chimabirthday.jpg";
import harrypotter from "../../../public/gallery/harrypotter.jpg";
import hkmaster from "../../../public/gallery/hkmaster.jpg";
import joffrelakes from "../../../public/gallery/joffrelakes.jpg";
import kinabalu from "../../../public/gallery/kinabalu.jpg";
import kingcrab from "../../../public/gallery/kingcrab.jpg";
import kyoto from "../../../public/gallery/kyoto.jpg";
import wanchai from "../../../public/gallery/wanchai.jpg";
import yellowleaf from "../../../public/gallery/yellowleaf.jpg";

 interface Gallery {
     id: number;
     title:string;
     description:string;
     rotate: number;
     translate: string;
     imageSrc:string;
}

export const GalleryArray : Gallery[]  = [
    {
        id: 0,
        title: "2020 Budapest",
        description:  "First time to Europe",
        imageSrc:budapest,
        rotate: -5,
        translate:"0% 150%"
    },
    {
        id: 1,
        title: "ChiMa 2-year-old",
        description:  "The cat needs two toilets",
        imageSrc:chimabirthday,
        rotate: 10,
        translate:"0% 100%"
    },
    {
        id: 2,
        title: "2025 Harry Potter Museum",
        description:  "Learn Expelliarmus at school",
        imageSrc:harrypotter,
        rotate: -10,
        translate:"0% 60%"
    },
    {
        id: 3,
        title: "2022 Hong Kong Masters",
        description:  "Witness of 147 by Marco",
        imageSrc:hkmaster,
        rotate: 20,
        translate:"0% 30%"
    }
    ,
    {
        id: 4,
        title: "2023 Joffre Lake",
        description:  "beautiful british columbia :)",
        imageSrc:joffrelakes,
        rotate: -20,
        translate:"0% 10%"
    }
    ,
    {
        id: 5,
        title: "2012 Mount Kinabalu",
        description: "Hike decision made in 2 days",
        imageSrc:kinabalu,
        rotate: 10,
        translate:"0% 10%"
    }
    ,
    {
        id: 6,
        title: "Kyoto",
        description:  "Took us 2 hours to wear kimono",
        imageSrc:kyoto,
        rotate: -10,
        translate:"0% 20%"
    }
    ,
    {
        id: 7,
        title: "2022 Richmond",
        description:  "delicious king crab at Sun Sui Wah",
        imageSrc:kingcrab,
        rotate: 15,
        translate:"0% 60%"
    }
    ,
    {
        id: 8,
        title: "2019 Hong Kong",
        description:  "point of no return",
        imageSrc:wanchai,
        rotate: -25,
        translate:"0% 90%"
    } ,
    {
        id: 9,
        title: "2022 国営昭和記念公園",
        description:  "ginkgo smell like vomit, do you know?",
        imageSrc:yellowleaf,
        rotate: 20,
        translate:"-20% 130%"
    }
]