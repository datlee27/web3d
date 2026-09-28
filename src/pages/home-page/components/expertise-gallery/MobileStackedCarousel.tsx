import { Box, Flex, Heading, Text, VStack, Image } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Item {
  title: string;
  image: string;
  description: string;
}

interface MobileStackedCarouselProps {
  items: Item[];
}

const MobileStackedCarousel = ({ items }: MobileStackedCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const getCardStyle = (index: number) => {
    const diff = (index - currentIndex + items.length) % items.length;
    
    // Normalize diff to be within [-1, 1] relative to center
    let normalizedDiff = diff;
    if (diff > items.length / 2) normalizedDiff = diff - items.length;
    if (diff < -items.length / 2) normalizedDiff = diff + items.length;

    const isActive = normalizedDiff === 0;
    const isLeft = normalizedDiff === -1;
    const isRight = normalizedDiff === 1;

    let x = 0;
    let scale = 0.8;
    let zIndex = 1;
    let opacity = 0;

    if (isActive) {
      x = 0;
      scale = 1;
      zIndex = 10;
      opacity = 1;
    } else if (isLeft) {
      x = -130; // Shifting by pixels for better control
      scale = 0.85;
      zIndex = 5;
      opacity = 0.7;
    } else if (isRight) {
      x = 130;
      scale = 0.85;
      zIndex = 5;
      opacity = 0.7;
    }

    return { x, scale, zIndex, opacity };
  };

  return (
    <Box 
      w="full" 
      h="500px" 
      position="relative" 
      display="flex" 
      alignItems="center" 
      justifyContent="center"
      bg="white"
      overflow="hidden"
      py={10}
      sx={{ touchAction: "none" }}
    >
      <Flex 
        position="relative" 
        w="full" 
        h="400px" 
        align="center" 
        justify="center"
        onClick={(e: React.MouseEvent) => {
          const clickX = e.clientX;
          const windowWidth = window.innerWidth;
          if (clickX < windowWidth / 3) handlePrev();
          if (clickX > (windowWidth * 2) / 3) handleNext();
        }}
      >
        <AnimatePresence initial={false}>
          {items.map((item, i) => {
            const style = getCardStyle(i);
            if (style.opacity === 0) return null;

            return (
              <motion.div
                key={i}
                initial={false}
                animate={{
                  x: style.x,
                  scale: style.scale,
                  zIndex: style.zIndex,
                  opacity: style.opacity,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.32, 0.72, 0, 1]
                }}
                style={{
                  position: "absolute",
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => {
                  if (info.offset.x > 50) handlePrev();
                  else if (info.offset.x < -50) handleNext();
                }}
              >
                <Card item={item} isActive={i === currentIndex} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </Flex>

      {/* Navigation Hints */}
      <VStack position="absolute" bottom="20px" spacing={1} w="full">
        <Text fontSize="md" fontWeight="700" color="black" fontFamily="'Be Vietnam Pro'">
          {items[currentIndex].title}
        </Text>
        <Text fontSize="xs" color="gray.400" fontWeight="500">
          Swipe left/right to browse
        </Text>
      </VStack>
    </Box>
  );
};

const Card = ({ item, isActive }: { item: Item; isActive: boolean }) => (
  <Box
    w="260px"
    h="360px"
    bg="white"
    borderRadius="none"
    overflow="hidden"
    boxShadow="none"
    position="relative"
    transition="all 0.3s ease"
  >
    <Image 
      src={item.image} 
      alt={item.title} 
      w="full" 
      h="full" 
      objectFit="cover"
      filter={isActive ? "none" : "grayscale(30%) blur(1px)"}
    />
    {isActive && (
      <Box
        position="absolute"
        bottom={0}
        left={0}
        w="full"
        p={6}
        bgGradient="linear(to-t, blackAlpha.800, transparent)"
      >
        <VStack align="flex-start" spacing={1}>
          <Heading color="white" size="sm" fontFamily="'Be Vietnam Pro'">
            {item.title}
          </Heading>
          <Text color="whiteAlpha.800" fontSize="10px" noOfLines={2} fontFamily="'Be Vietnam Pro'">
            {item.description}
          </Text>
        </VStack>
      </Box>
    )}
  </Box>
);

export default MobileStackedCarousel;
