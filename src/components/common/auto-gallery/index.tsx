import { Box, Heading, Text, Image } from "@chakra-ui/react";
import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  anh1Gallery,
  anh2Gallery,
  anh3Gallery,
  anh4Gallery,
  anh5Gallery,
  city,
  city2,
} from "@assets/images";

interface GalleryItem {
  id: number;
  title: string;
  subTitle: string;
  image: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: "Patterns Residence",
    subTitle: "Dolor sit amet, consectetur",
    image: anh1Gallery,
  },
  {
    id: 2,
    title: "Expansion",
    subTitle: "architectural renderings",
    image: city,
  },
  {
    id: 3,
    title: "Palm Beach Residence",
    subTitle: "Dolor sit amet, consectetur",
    image: anh2Gallery,
  },
  {
    id: 4,
    title: "Caspian Dream Liner",
    subTitle: "Dolor sit amet, consectetur",
    image: anh3Gallery,
  },
  {
    id: 5,
    title: "Modern Villa",
    subTitle: "Dolor sit amet, consectetur",
    image: anh4Gallery,
  },
  {
    id: 6,
    title: "Urban Oasis",
    subTitle: "Dolor sit amet, consectetur",
    image: city2,
  },
  {
    id: 7,
    title: "Sky Garden",
    subTitle: "Dolor sit amet, consectetur",
    image: anh5Gallery,
  },
];

const AutoGallery = ({ top }: { top?: string }) => {
  const [maxScroll, setMaxScroll] = useState(0);
  const x = useMotionValue(0);
  const animationRef = useRef<ReturnType<typeof animate> | null>(null);
  const hasStarted = useRef(false);
  const speed = 40;

  useEffect(() => {
    const calculateMaxScroll = () => {
      const itemWidth = window.innerWidth < 768 ? 300 : 525;
      const totalWidth = GALLERY_ITEMS.length * itemWidth;
      const viewportWidth = window.innerWidth;
      setMaxScroll(Math.max(0, totalWidth - viewportWidth));
    };

    calculateMaxScroll();
    window.addEventListener("resize", calculateMaxScroll);
    return () => window.removeEventListener("resize", calculateMaxScroll);
  }, []);

  // Start auto-scroll only once
  useEffect(() => {
    if (maxScroll > 0 && !hasStarted.current) {
      hasStarted.current = true;
      animationRef.current = animate(x, -maxScroll, {
        duration: (maxScroll / speed) * 1.5,
        ease: "easeOut",
      });
    }
  }, [maxScroll, x]);

  const stopAnimation = () => {
    if (animationRef.current) {
      animationRef.current.stop();
      animationRef.current = null;
    }
  };

  return (
    <Box
      bg="white"
      pt={20}
      pb={10}
      overflow="hidden"
      position={top ? "absolute" : "relative"}
      top={top}
      width="100%"
    >
      <motion.div
        drag="x"
        dragConstraints={{ left: -maxScroll, right: 0 }}
        dragElastic={0.2}
        dragTransition={{
          bounceStiffness: 200,
          bounceDamping: 50,
          power: 0.4,
          timeConstant: 400,
        }}
        dragMomentum={true}
        style={{
          x,
          display: "flex",
          gap: "0",
          width: "max-content",
          cursor: "grab",
          willChange: "transform",
        }}
        whileTap={{ cursor: "grabbing" }}
        onDragStart={stopAnimation}
        onDragEnd={() => {
          // Poll until momentum settles (velocity near zero)
          const checkMomentum = () => {
            const velocity = Math.abs(x.getVelocity());
            if (velocity > 5) {
              // Momentum still active, check again soon
              requestAnimationFrame(checkMomentum);
              return;
            }

            const currentX = x.get();

            // If at or past the end boundary, stay there
            if (currentX <= -maxScroll + 5) {
              return;
            }

            // Otherwise resume auto-scroll toward the end
            const remaining = Math.abs(-maxScroll - currentX);
            if (remaining > 5) {
              animationRef.current = animate(x, -maxScroll, {
                duration: (remaining / speed) * 1.5,
                ease: "easeOut",
              });
            }
          };

          // Start checking after a brief initial delay
          setTimeout(checkMomentum, 800);
        }}
      >
        {GALLERY_ITEMS.map((item, index) => (
          <Box key={`${item.id}-${index}`} flexShrink={0} w="525px" px={0}>
            <Box mb={6} mx={4}>
              <Heading
                fontSize={{ base: "16px", md: "20px" }}
                fontWeight="bold"
                fontFamily="'Be Vietnam Pro'"
                color="black"
                mb={1}
              >
                {item.title}
              </Heading>
              <Text
                fontSize={{ base: "12px", md: "14px" }}
                color="black"
                fontFamily="'Be Vietnam Pro'"
                fontWeight="400"
                maxW="300px"
                lineHeight="1.2"
              >
                {item.subTitle}
              </Text>
            </Box>
            <Box
              h={{ base: "350px", md: "588px" }}
              w="full"
              overflow="hidden"
              position="relative"
              role="group"
            >
              <Image
                src={item.image}
                w="100%"
                h="100%"
                objectFit="cover"
                transition="transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                _groupHover={{ transform: "scale(1.1)" }}
              />
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bg="blackAlpha.400"
                opacity={0}
                transition="opacity 0.4s ease"
                _groupHover={{ opacity: 1 }}
                pointerEvents="none"
              />
            </Box>
          </Box>
        ))}
      </motion.div>
    </Box>
  );
};

export default AutoGallery;
