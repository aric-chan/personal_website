import { Card, Image, Text, HStack, Link } from "@chakra-ui/react"
import { motion } from "framer-motion";

interface equipCardProps {
    id: number
    title: string;
    imageSrc: string;
    shopUrl: string;
    constraintsRef:any;
}
const equipCard: React.FC<equipCardProps> = ({id, title, imageSrc, shopUrl, constraintsRef})=> {
    return (
        <motion.div
            drag = {true} // Explicitly enable dragging in both x and y
            dragConstraints={constraintsRef}
            dragElastic={0.1}
            whileDrag={{ scale: 1.05, rotate: 1 }}
            whileTap={{ cursor: "grabbing" }}
            style={{ cursor: "grab" }}
            initial={{ x: 0, y: 0 }}
        >
        <Card.Root height="180px" width="180px" overflow="hidden" _hover={{transform: "scale(1.05)" }}
                       transition="color 0.3s, transform 0.3s">
                <Link href={shopUrl} target="_blank"
                      rel="noopener noreferrer">
                <Image pointerEvents="none" rounded="md" height="120px" width="180px" src={imageSrc} objectFit="cover" />
                </Link>
                    <Card.Body p={2} display="flex" alignItems="center">
                    <Text
                        as="h3"
                        fontSize="2xs"
                        fontWeight="semibold"
                    >
                        {title}
                    </Text>
                </Card.Body>
            </Card.Root>
            </motion.div>
    )
}
export default equipCard;
