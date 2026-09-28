import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionFlex = motion(Flex);

interface GalleryItemProps {
  image: string;
  title: string;
  description?: string;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}

const GalleryItem = ({
  image,
  title,
  description,
  index,
  hoveredIndex,
  setHoveredIndex,
}: GalleryItemProps) => {
  // Determine if this item is the currently hovered one
  const isHovered = hoveredIndex === index;
  // If no item is hovered, all have equal flex.
  // If one is hovered:
  // - The hovered one gets flex 3 (expands)
  // - Others get flex 1 (shrink/standard) for contrast
  const flexValue = hoveredIndex === null ? 1 : isHovered ? 2 : 0.5;

  return (
    <MotionFlex
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      onClick={() => setHoveredIndex(isHovered ? null : index)} // Better for touch devices
      flex={flexValue}
      h={{ base: isHovered ? "300px" : "150px", md: "full" }}
      minH={{ base: isHovered ? "300px" : "150px", md: "none" }}
      bgImage={`url(${image})`}
      bgSize="cover"
      bgPosition="center"
      position="relative"
      direction="column"
      justify="flex-end"
      overflow="hidden"
      cursor="pointer"
      transition={{ duration: 1.2, ease: "easeInOut" }}
      animate={{ flex: flexValue }}
    >
      {/* Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="full"
        h="full"
        bg="blackAlpha.400"
        transition="background 0.3s"
        _groupHover={{ bg: "blackAlpha.200" }}
      />

      {/* Content Container */}
      <VStack
        align="flex-start"
        justify="flex-end"
        p={8}
        w="full"
        h="full"
        zIndex={1}
        spacing={4}
      // Use a clip path or opacity for showing/hiding details
      >
        <Heading
          color="white"
          fontFamily="'Be Vietnam Pro'"
          fontSize={{ base: isHovered ? "24px" : "18px", md: isHovered ? "48px" : "24px" }}
          transition="all 0.3s"
          whiteSpace="nowrap" // Keep title on one line if possible
        >
          {title}
        </Heading>

        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <VStack align="flex-start" spacing={4}>
              <Text color="whiteAlpha.900" fontSize="md" maxW="400px">
                {description ||
                  "Detailed description of this service and how we bring your vision to life through high-quality 3D rendering."}
              </Text>
            </VStack>
          </motion.div>
        )}
      </VStack>
    </MotionFlex>
  );
};

export default GalleryItem;
