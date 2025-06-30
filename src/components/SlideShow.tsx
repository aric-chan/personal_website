import { useState } from "react";
import {
    motion,
    useMotionValue,
    useTransform,
    AnimatePresence
} from "framer-motion";

import ChiMaImages from "../assets/data/ChimaArray.ts"

interface CardProps {
    index: number;
    setIndex: (index: number) => void;
    frontCard?: boolean;
    drag?: string;
}

function Card(props: CardProps) {
    const [exitX, setExitX] = useState(0);

    const x = useMotionValue(0);
    const scale = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]);
    const rotate = useTransform(x, [-150, 0, 150], [-45, 0, 45], {
        clamp: false
    });

    const variantsFrontCard = {
        animate: { scale: 1, y: 0, opacity: 1 },
        exit: (custom: number) => ({
            x: custom,
            opacity: 0,
            scale: 0.5,
            transition: { duration: 0.2 }
        })
    };
    const variantsBackCard = {
        initial: { scale: 0, y: 105, opacity: 0 },
        animate: { scale: 0.75, y: 30, opacity: 0.5 }
    };
//@ts-ignore
    function handleDragEnd(_, info: { offset: { x: number } }) {
        if (info.offset.x < -100) {
            setExitX(-250);
            props.setIndex(props.index + 1);
        }
        if (info.offset.x > 100) {
            setExitX(250);
            props.setIndex(props.index + 1);
        }
    }

    // Select image based on index
    const image = ChiMaImages[props.index % ChiMaImages.length];

    return (
        <motion.div
            style={{
                width: 280,
                height: 280,
                position: "absolute",
                top: 0,
                x,
                rotate,
                cursor: "grab",

            }}
            whileTap={{ cursor: "grabbing" }}
            // Dragging
            drag={props.drag as false | "x" | "y" | undefined}
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
            onDragEnd={handleDragEnd}
            // Animation
            variants={props.frontCard ? variantsFrontCard : variantsBackCard}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={exitX}
            transition={
                props.frontCard
                    ? { type: "spring", stiffness: 300, damping: 20 }
                    : { scale: { duration: 0.2 }, opacity: { duration: 0.4 } }
            }
        >

            <motion.img
                // @ts-ignore
                src={image.src}
                alt={image.alt}
                style={{
                    width: 220,
                    height: 220,
                    borderRadius: 20,
                    scale,
                    pointerEvents: "none",
                    objectFit: "cover",
                }}

            />
        </motion.div>
    );
}

export function SlideShow() {
    const [index, setIndex] = useState(0);

    return (
        <motion.div style={{ width: 200, height: 200, position: "relative" }}>
            <AnimatePresence initial={false}>
                <Card
                    key={index + 2}
                    frontCard={false}
                    index={index + 1}
                    setIndex={setIndex}
                />
                <Card
                    key={index}
                    frontCard={true}
                    index={index}
                    setIndex={setIndex}
                    drag="x"
                />
            </AnimatePresence>
        </motion.div>
    );
}
