// Gallery.tsx
import {Box, Image} from "@chakra-ui/react";
import { motion } from "framer-motion";
interface GalleryProps {
    constraintsRef: React.RefObject<HTMLDivElement | null>;
    rotate: number;
    translate: string;
    title:string;
    description:string;
    imageSrc:string;
}

const Gallery = ({ constraintsRef, title, description, imageSrc, rotate, translate }: GalleryProps) => {
    return (
        <Box zIndex={999}>
            <motion.div
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.2}
                style={{
                    cursor: "grab",
                    rotate,
                    translate

                }}

            >

                <div className="flip-card grabbable">
                    <div className="flip-card-inner ">
                        <div className="flip-card-front">
                            <Image
                                   width = "180px"
                                   height = "180px"
                                   pointerEvents="none"
                                   borderRadius="50px"
                                   src={imageSrc}
                                   />
                        </div>
                        <div className="flip-card-back">
                            <p className ="flip-card-title">{title}</p>
                            <p className ="flip-card-description">{description}</p>

                        </div>
                    </div>
                </div>

            </motion.div>
        </Box>
    );
};
export default Gallery;